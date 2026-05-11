import { Router } from 'express';
import { searchGames } from '../lib/igdb';

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

export default router;