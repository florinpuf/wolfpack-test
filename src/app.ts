import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health-check', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'API is live' });
});

export default app;
