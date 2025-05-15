import mongoose from 'mongoose';

export interface OrderSchema extends mongoose.Document {
    userId: string;
    productId: string;
    quantity: number;
    status: 'pending' | 'confirmed' | 'shipped' | 'cancelled';
    createdAt: Date;
    updatedAt: Date;
}

const orderSchema = new mongoose.Schema<OrderSchema>(
    {
        userId: { type: String, required: true },
        productId: { type: String, required: true },
        quantity: { type: Number, required: true },
        status: {
            type: String,
            enum: ['pending', 'confirmed', 'shipped', 'cancelled'],
            default: 'pending',
        },
    },
    { timestamps: true }
);

export default mongoose.model<OrderSchema>('Order', orderSchema);
