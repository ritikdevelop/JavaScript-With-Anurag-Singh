// index.js
import express, { json } from 'express';
const stripe = require('stripe')('sk_test_your_stripe_secret_key');
const app = express();
const port = 5500;

app.use(json());

// Define a route for processing payments
app.post('/process-payment', async (req, res) => {
  const { amount, currency, token } = req.body;
  try {
    // Create a payment intent using the Stripe API
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method: token,
      confirm: true,
    });
    // Return the payment intent status to the client
    res.json({ status: paymentIntent.status });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while processing the payment.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});