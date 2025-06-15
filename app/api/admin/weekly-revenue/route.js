import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET() {
  try {
    const payments = await stripe.paymentIntents.list({ limit: 100 });
    const revenueMap = {
      Mon: 0,
      Tue: 0,
      Wed: 0,
      Thu: 0,
      Fri: 0,
      Sat: 0,
      Sun: 0,
    };

    payments.data.forEach(payment => {
      if (payment.status === 'succeeded') {
        const date = new Date(payment.created * 1000); // Stripe timestamp
        const day = date.toLocaleDateString('en-US', { weekday: 'short' }); // "Mon", "Tue", etc.
        revenueMap[day] += payment.amount / 100; // Convert cents to dollars
      }
    });

    const orderedDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const weeklyData = orderedDays.map(day => ({
      name: day,
      value: revenueMap[day],
    }));

    return Response.json(weeklyData);
  } catch (err) {
    console.error("Weekly revenue error:", err.message);
    return Response.json({ message: "Error generating weekly data" }, { status: 500 });
  }
}
