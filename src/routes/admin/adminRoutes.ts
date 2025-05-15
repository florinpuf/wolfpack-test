import { Router } from 'express';
import { asyncHandler } from '../../middleware/asyncHandler';
import * as OrderController from '../../controllers/admin/adminOrderController';
import { validateDto } from "../../middleware/validate";
import { AdminUpdateOrderDto } from "../../dtos/UpdateOrderDto";

const router = Router();

// Example: for dashboard
router.get('/', (req, res) => {
    res.json({ message: 'Admin dashboard - root' });
});

router.get('/orders/', asyncHandler(OrderController.listOrders));
router.get('/orders/:id', asyncHandler(OrderController.viewOrder));
router.patch('/orders/:id', validateDto(AdminUpdateOrderDto), asyncHandler(OrderController.updateOrderStatus));

export default router;
