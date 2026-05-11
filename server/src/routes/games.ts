import { Router } from 'express';
import { searchGames } from '../lib/igdb';
import { authenticateToken, AuthRequest } from '../middleware/auth';
import prisma from '../lib/prisma';

const router = Router();

router.get ('/search', async (require, res) => {
    const query = require.query.q as string;

    if (!query) {
        res.status(400).json({ error: 'Missing search query' });
        return;
    }

    try {
        const results = await searchGames(query);
        res.json(results);
    } catch (error) {
        console.error('IGDB search error:', error);
        res.status(500).json({ error: 'Failed to fetch games' });
    }
});

router.post('/list', authenticateToken, async (req: AuthRequest, res) => {
    const { igdbId, title, coverUrl, releaseYear, status } = req.body;

    try {
        const game = await prisma.game.upsert({
            where: { igdbId },
            create: { igdbId, title, coverUrl, releaseYear },
            update: {}
        });

        const entry = await prisma.userGame.create({
            data: {
                userId: req.userId!,
                gameId: game.id,
                status
            }
        });
        
        res.status(201).json(entry);
    } catch (error: any) {
        if (error.code === 'P2002') {
            res.status(409).json({ error: 'Game already on your list' });
            return;
        }
        console.error(error);
        res.status(500).json({ error: 'Failed to add game' });
    }
});

router.get('/list', authenticateToken, async (req: AuthRequest, res) => {
    try {
        const entries = await prisma.userGame.findMany({
            where: { userId: req.userId! },
            include: { game: true },
            orderBy: { createdAt: 'desc' }
        });

        res.json(entries);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch list' });
    }
});

router.patch('/list/:gameId', authenticateToken, async (req: AuthRequest, res) => {
    const gameId = parseInt(req.params.gameId as string);
    const { status, score, notes } = req.body;

    try {
        const entry = await prisma.userGame.update({
            where: {
                userId_gameId: {
                    userId: req.userId!,
                    gameId
                }
            },
            data: { status, score, notes }
        });

        res.json(entry);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update entry' });
    }
});

router.delete('/list/:gameId', authenticateToken, async (req: AuthRequest, res) => {
    const gameId = parseInt(req.params.gameId as string);

    try {
        await prisma.userGame.delete({
            where: {
                userId_gameId: {
                    userId: req.userId!,
                    gameId
                }
            }
        });

        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to remove game' });
    }
});

export default router;