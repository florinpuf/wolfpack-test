import { Router } from 'express';
import { validateDto } from "../../middleware/validate";
import { CreateOrderDto } from "../../dtos/CreateOrderDto";
import * as OrderController from "../../controllers/api/orderController";
import { UpdateOrderDto } from "../../dtos/UpdateOrderDto";
import { asyncHandler } from '../../middleware/asyncHandler';

const router = Router();

router.get('/', (req, res) => {
    res.json({ message: 'root endpoint for iOS endpoint' });
});
router.get('/orders/', asyncHandler(OrderController.listOrders));
router.patch('/orders/:id', validateDto(UpdateOrderDto),  asyncHandler(OrderController.updateOrder));
router.post('/orders/', validateDto(CreateOrderDto), asyncHandler(OrderController.createOrder));

export default router;
