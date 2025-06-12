// /app/api/dashboard-stats/route.js
import connectDB from '@/lib/connectDB';
import User from '@/models/User';
import Product from '@/models/Product';
import Order from '@/models/Order';

export async function GET() {
  try {
    await connectDB();

    const userCount = await User.countDocuments();
    const productCount = await Product.countDocuments();
    const orderCount = await Order.countDocuments();

    // Optional: Total Revenue
    const orders = await Order.find();
    const totalRevenue = orders.reduce((sum, order) => {
      const orderTotal = order.order_data.flat().reduce((subSum, item) => subSum + item.price * item.qty, 0);
      return sum + orderTotal;
    }, 0);

    return Response.json({
      userCount,
      productCount,
      orderCount,
      totalRevenue
    });
  } catch (error) {
    return new Response("Failed to fetch dashboard stats", { status: 500 });
  }
}
