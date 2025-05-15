import { Request, Response } from 'express';
import Order from '../../models/Order';

// TODO: move this to a different file
const orderStatuses = [ 'pending', 'confirmed', 'shipped', 'cancelled'];

export const listOrders = async (req: Request, res: Response) => {
    try {
        const { status } = req.query;

        const filter: Record<string, any> = {};

        if (status && typeof status === 'string') {
            if (!orderStatuses.includes(status)) {
                return res.status(400).json({
                    error: `Invalid status. Allowed values: ${orderStatuses.join(', ')}`,
                });
            }
            filter.status = status;
        }

        const orders = await Order.find(filter).sort({ createdAt: -1 });
        res.json(orders);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const viewOrder = async (req: Request, res: Response) => {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Not found' });
    res.json(order);
};

export const updateOrderStatus = async (req: Request, res: Response) => {
    try {
        const { status } = req.body;
        const order = await Order.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: false }
        );
        if (!order) return res.status(404).json({ message: 'Not found' });
        res.json(order);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
