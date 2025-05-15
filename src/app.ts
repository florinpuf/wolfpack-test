import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import apiRoutes from './routes/api/userRoutes';
import adminRoutes from './routes/admin/adminRoutes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// iOS app routes
app.use('/api', apiRoutes);

// Admin dashboard routes
app.use('/admin', adminRoutes);

app.get('/health-check', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'API is live' });
});

export default app;
