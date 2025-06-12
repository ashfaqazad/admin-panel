// /app/dashboard/users/[email]/orders/page.jsx
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import {
  Container, Typography, Card, CardContent,
  CardMedia, Grid
} from "@mui/material";

const UserOrdersPage = () => {
  const { email } = useParams(); // ✅ This gives you the dynamic email from the route
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchUserOrders = async () => {
      try {
        const encodedEmail = encodeURIComponent(email);
        const res = await fetch(`/api/user-orders/${encodedEmail}`);
        const data = await res.json();
        setOrders(data.orders || []);
      } catch (error) {
        console.error("Failed to fetch user orders:", error);
      }
    };

    if (email) {
      fetchUserOrders();
    }
  }, [email]);

  return (
    <Container sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Orders for {email}
      </Typography>

      {orders.length > 0 ? (
        orders.map((order, index) => (
          order?.orders_data?.length > 0 && (
            <Card key={index} sx={{ marginBottom: 3 }}>
              <CardContent>
                <Typography variant="h6">Order #{index + 1}</Typography>
                <Typography variant="subtitle2">Email: {order.email}</Typography>
                <Typography variant="subtitle2">
                  Date: {new Date(order.order_date).toLocaleDateString()}
                </Typography>

                <Typography variant="h6" mt={2}>Items:</Typography>
                <Grid container spacing={2}>
                  {order.orders_data.map((item, i) => (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                      <CardMedia
                        component="img"
                        width="100"
                        height="120"
                        image={item.image}
                        alt={item.title}
                        sx={{ width: "300px", height: "300px" }}
                      />
                      <Typography><strong>{item.title}</strong></Typography>
                      <Typography>Rs. {item.price}</Typography>
                      <Typography>Qty: {item.quantity}</Typography>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          )
        ))
      ) : (
        <Typography>No orders found.</Typography>
      )}
    </Container>
  );
};

export default UserOrdersPage;














// 'use client';
// import { useEffect, useState } from 'react';
// import { useParams } from 'next/navigation'; // for dynamic params
// import {
//   Container,
//   Typography,
//   Card,
//   CardContent,
//   Grid,
// } from '@mui/material';
// import axios from 'axios';

// const UserOrdersPage = () => {
//   const params = useParams(); // { email: 'adnan@gmail.com' }
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchUserOrders = async () => {
//       try {
//         // const encodedEmail = encodeURIComponent(params.email); // 👈 encode here
//         // const res = await axios.get(`/api/user-orders/${encodedEmail}`);
//         const encodedEmail = encodeURIComponent(email); // ✅ once only
//         const res = await fetch(`/api/user-orders/${encodedEmail}`);

//         setOrders(res.data.orders);
//       } catch (err) {
//         console.error('Failed to fetch user orders:', err);
//       }
//     };

//     if (params.email) {
//       fetchUserOrders();
//     }
//   }, [params.email]);

//   return (
//     <Container sx={{ padding: 4 }}>
//       <Typography variant="h5" gutterBottom>
//         Orders for {params.email}
//       </Typography>



//       {/* {orders.length > 0 ? (
//         orders.map((order, index) => (
//           <Card key={index} sx={{ mb: 2 }}>
//             <CardContent>
//               <Typography variant="subtitle1">Order #{index + 1}</Typography>
//               <Typography variant="body2">Date: {new Date(order.order_date).toLocaleDateString()}</Typography>

//               <Grid container spacing={2} mt={2}>
//                 {order.orders_data.map((item, idx) => (
//                   <Grid item xs={12} sm={6} md={4} key={idx}>
//                     <Typography>{item.title}</Typography>
//                     <Typography>Rs. {item.price}</Typography>
//                     <Typography>Qty: {item.quantity}</Typography>
//                   </Grid>
//                 ))}
//               </Grid>
//             </CardContent>
//           </Card>
//         ))
//       ) : (
//         <Typography>No orders found.</Typography>
//       )} */}



//             {orders.length > 0 ? (
//               orders.map((order, index) => (
//                 order?.orders_data?.length > 0 && (
//                   <Card key={index} sx={{ marginBottom: 3 }}>
//                     <CardContent>
//                       <Typography variant="h6">Order #{index + 1}</Typography>
//                       <Typography variant="subtitle2">Email: {order.email}</Typography>
//                       <Typography variant="subtitle2">
//                         Date: {new Date(order.order_date).toLocaleDateString()}
//                       </Typography>
      
//                       <Typography variant="h6" mt={2}>Items:</Typography>
//                       <Grid container spacing={2}>
//                         {order.orders_data.map((item, i) => (
//                           <Grid item xs={12} sm={6} md={4} key={i}>
//                             <CardMedia
//                               component="img"
//                               width="100"
//                               height="120"
//                               image={item.image}
//                               alt={item.title}
//                               sx={{ width: "300px", height: "300px" }}
//                             />
//                             <Typography><strong>{item.title}</strong></Typography>
//                             <Typography>Rs. {item.price}</Typography>
//                             <Typography>Qty: {item.quantity}</Typography>
//                           </Grid>
//                         ))}
//                       </Grid>
//                     </CardContent>
//                   </Card>
//                 )
//               ))
//             ) : (
//               <Typography>No orders found.</Typography>
//             )}
      
      



//     </Container>
//   );
// };

// export default UserOrdersPage;





// // // Example: Show 1 user's orders
// // 'use client';
// // import { useEffect, useState } from "react";
// // import { useParams } from "next/navigation"; // or useRouter()
// // import axios from "axios";
// // import { Container, Typography } from "@mui/material";

// // const UserOrders = () => {
// //   const params = useParams(); // returns { email: 'user@example.com' }
// //   const email = decodeURIComponent(params.email);
// //   const [orders, setOrders] = useState([]);

// //   useEffect(() => {
// //     const fetchUserOrders = async () => {
// //       try {
// //         const response = await axios.get(`/api/user-orders/${email}`);
// //         setOrders(response.data.orders);
// //       } catch (err) {
// //         console.error("Error fetching user orders:", err);
// //       }
// //     };

// //     fetchUserOrders();
// //   }, [email]);

// //   return (
// //     <Container>
// //       <Typography variant="h4">Orders for {email}</Typography>
// //       {/* Render the orders just like admin page */}
// //     </Container>
// //   );
// // };

// // export default UserOrders;

