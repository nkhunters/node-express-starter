import express from 'express';
const router = express.Router();

router.get('/payment-gateway', (req, res) => {
  res.send('Payment Gateway');
});

export { router };
