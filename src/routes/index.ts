import express from 'express';
import { router as phonepayRouter } from './phonepay-routes';
import { router as razorpayRouter } from './razorpay-routes';

const router = express.Router();
router.use('/phonepay', phonepayRouter);
router.use('/razorpay', razorpayRouter);

export { router };
