'use client';

import { useEffect, useState } from 'react';
import { Typography, Grid, Card, CardContent } from '@mui/material';

const Dashboard = () => {
  const [stats, setStats] = useState({
    userCount: 0,
    productCount: 0,
    orderCount: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/dashboard-stats');
        const data = await res.json();
        setStats(data);
      } catch (err) {
        console.error('Failed to fetch dashboard stats:', err);
      }
    };

    fetchStats();
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>👨‍💻 Admin Dashboard</Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff' }}>
            <CardContent>
              <Typography variant="h6">👥 Users</Typography>
              <Typography variant="h4">{stats.userCount}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff' }}>
            <CardContent>
              <Typography variant="h6">📦 Products</Typography>
              <Typography variant="h4">{stats.productCount}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff' }}>
            <CardContent>
              <Typography variant="h6">📑 Orders</Typography>
              <Typography variant="h4">{stats.orderCount}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff' }}>
            <CardContent>
              <Typography variant="h6">💰 Revenue</Typography>
              <Typography variant="h4">${stats.totalRevenue.toLocaleString()}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Weekly Recap Chart remains same here, optional dynamic later */}
    </div>
  );
};

export default Dashboard;





















// 'use client';
// import React from 'react';
// import {
//   Typography,
//   Box,
//   Grid,
//   Card,
//   CardContent,
// } from '@mui/material';
// import FlowChart from '@/components/FlowChart';


// const summaryData = [
//   { title: 'Users', value: 120, icon: '🧑‍🤝‍🧑' },
//   { title: 'Products', value: 85, icon: '📦' },
//   { title: 'Orders', value: 240, icon: '🧾' },
//   { title: 'Revenue', value: '$12,430', icon: '📈' },
// ];

// export default function DashboardPage() {
//   return (
//     <Box sx={{ backgroundColor: '#0A192F', color: 'white', minHeight: '100vh', p: 4 }}>
//       <Typography variant="h5" fontWeight="bold" mt={4} mb={3}>
//         🧠 Admin Dashboard
//       </Typography>

//       <Grid container spacing={3}>
//         {summaryData.map((item, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <Card sx={{ backgroundColor: '#1565C0', color: 'white', borderRadius: 2 }}>
//               <CardContent>
//                 <Typography variant="h6" gutterBottom>
//                   {item.icon} {item.title}
//                 </Typography>
//                 <Typography variant="h4" fontWeight="bold">
//                   {item.value}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>


//       <FlowChart />

//     </Box>
//   );
// }


















// // app/dashboard/page.jsx
// 'use client';
// import React from 'react';
// import { Typography, Box } from '@mui/material';

// export default function DashboardPage() {
//   return (
//     <Box>
//       <Typography variant="h4" gutterBottom>
//         Dashboard
//       </Typography>
//       <Typography>Overview of stats, charts, or system summary here.</Typography>
//     </Box>
//   );
// }