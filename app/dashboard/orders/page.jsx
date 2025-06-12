// /app/dashboard/orders/page.jsx
'use client';

import { useEffect, useState } from "react";
import {
  Container, Typography, Card, CardContent,
  CardMedia, Grid
} from "@mui/material";
import axios from "axios";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const response = await axios.get("/api/admin-orders");
        setOrders(response.data.orders);
      } catch (error) {
        console.error("Error fetching admin orders:", error);
      }
    };

    fetchAllOrders();
  }, []);

  return (
    <Container sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        All Orders (Admin View)
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

export default AdminOrders;
