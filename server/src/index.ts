import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import { authenticateToken, AuthRequest } from './middleware/auth';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get('/api/protected', authenticateToken, (req: AuthRequest, res) => {
  res.json({ message: 'You are authenticated', userId: req.userId });
});