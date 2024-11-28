import express from 'express';
import authMiddleware from '../Middleware/auth.js'
import { listOrders, placeOrder, updateStatus, userOrders, verifyOrder } from '../Controllers/orderController.js';
import authMiddelware from '../Middleware/auth.js';

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder)
orderRouter.post("/verify", verifyOrder)
orderRouter.post("/userorders", authMiddelware, userOrders)
orderRouter.get("/list", listOrders)
orderRouter.post("/status",updateStatus)

export default orderRouter;