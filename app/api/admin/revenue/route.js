// app/api/admin/revenue/route.js
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(req) {
  try {
    const payments = await stripe.charges.list({ limit: 100 }); // Recent 100 payments
    const total = payments.data.reduce((sum, charge) => sum + charge.amount, 0);
    return Response.json({ revenue: total / 100 }); // Convert cents to dollars
  } catch (error) {
    console.error("Stripe error:", error.message);
    return Response.json({ message: 'Failed to fetch revenue' }, { status: 500 });
  }
}
