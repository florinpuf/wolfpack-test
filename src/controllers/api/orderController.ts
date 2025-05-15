import { Request, Response } from 'express';
import Order from '../../models/Order';

export const createOrder = async (req: Request, res: Response) => {
    try {
        const { userId, productId, quantity } = req.body;
        const order = await Order.create({ userId, productId, quantity, status: 'pending' });
        res.status(201).json(order);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const listOrders = async (req: Request, res: Response) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 });
        res.status(200).json(orders);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}

export const updateOrder = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const {quantity} = req.body;
        const order = await Order.findByIdAndUpdate(id, {quantity}, {new: true});
        if (!order) return res.status(404).json({message: 'Not found'});
        res.status(200).json(order);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}
