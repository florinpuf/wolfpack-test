import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

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

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI!)
    .then(() => console.log('✅ MongoDB connected'))
    .catch((err) => {
        console.error('❌ MongoDB connection error:', err.message);
        process.exit(1);
    });

export default app;
