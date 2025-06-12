// import { NextResponse } from 'next/server';
// import connectDB from '@/lib/connectDB';
// import Order from '@/models/Order';

// export async function GET(request, { params }) {
//   const { email } = params;
//   try {
//     await connectDB();
//     const orders = await Order.find({ email }).sort({ order_date: -1 });

//     return NextResponse.json({ orders }, { status: 200 });
//   } catch (error) {
//     console.error('User Orders Fetch Error:', error);
//     return NextResponse.json({ error: 'Failed to fetch user orders' }, { status: 500 });
//   }
// }


// // /app/api/user-orders/[email]/route.js
// import { NextResponse } from 'next/server';
// import connectDB from '@/lib/connectDB';
// import Order from '@/models/Order';

// export async function GET(req, { params }) {
//   const { email } = params;

//   try {
//     await connectDB();
//     const userOrders = await Order.find({ email }).sort({ order_date: -1 });

//     return NextResponse.json({ orders: userOrders }, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching user orders:", error);
//     return NextResponse.json({ error: 'Failed to fetch user orders' }, { status: 500 });
//   }
// }



// app/api/user-orders/[email]/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/lib/connectDB';
import Order from '@/models/Order';


export async function GET(req, context) {
  const { params } = await context;
  const email = decodeURIComponent(params.email); // 🔐 email ko decode bhi karo

  try {
    await connectDB();
    console.log("Fetching orders for email:", email);

    const orders = await Order.find({ email }).sort({ order_date: -1 });

    return NextResponse.json({ orders }, { status: 200 });
  } catch (error) {
    console.error('User Orders Fetch Error:', error);
    return NextResponse.json({ error: 'Failed to fetch user orders' }, { status: 500 });
  }
}

// export async function GET(req, context) {
//   const { email } = context.params; // ✅ correct usage

//   try {
//     await connectDB();

//     const userOrders = await Order.find({ email }).sort({ order_date: -1 });

//     return NextResponse.json({ orders: userOrders }, { status: 200 });
//   } catch (error) {
//     console.error('Error fetching user orders:', error);
//     return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 });
//   }
// }
