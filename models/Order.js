// models/Order.js
import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  email: { type: String },
  order_data: [
    [
      {
        id: String,
        name: String,
        qty: Number,
        size: String,
        price: Number,
        img: String,
      },
    ],
  ],
  order_date: { type: Date, default: Date.now },
}, { collection: "orders" }); // 👈 important

const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);
export default Order;









// // /models/Order.js
// import mongoose from 'mongoose';

// const OrderSchema = new mongoose.Schema({
//   email: { type: String, required: true },
//   order_date: { type: Date, default: Date.now },
//   orders_data: [
//     {
//       id: String,
//       title: String,
//       price: Number,
//       image: String,
//       quantity: Number,
//       total: Number,
//     },
//   ],
// });

// export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
