'use client';

import { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Paper, Typography } from '@mui/material';

export default function FlowChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchWeeklyRevenue = async () => {
      try {
        const res = await fetch('/api/admin/weekly-revenue');
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Failed to fetch weekly revenue data:", err);
      }
    };

    fetchWeeklyRevenue();
  }, []);

  return (
    <Paper sx={{ p: 2, mt: 4, background: '#1e1e2f', borderRadius: 3 }}>
      <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
        Weekly Recap
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorValue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Paper>
  );
}



















// 'use client';

// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import { Paper, Typography } from '@mui/material';

// const data = [
//   { name: 'Mon', value: 3000 },
//   { name: 'Tue', value: 4500 },
//   { name: 'Wed', value: 4000 },
//   { name: 'Thu', value: 5000 },
//   { name: 'Fri', value: 4700 },
//   { name: 'Sat', value: 6000 },
//   { name: 'Sun', value: 5300 },
// ];

// export default function WeeklyRecapChart() {
//   return (
//     <Paper sx={{ p: 2, mt: 4, background: '#1e1e2f', borderRadius: 3 }}>
//       <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
//         Weekly Recap
//       </Typography>
//       <ResponsiveContainer width={700} height={300}>
//         <AreaChart data={data}>
//           <defs>
//             <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
//               <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
//             </linearGradient>
//           </defs>
//           <XAxis dataKey="name" stroke="#ccc" />
//           <YAxis stroke="#ccc" />
//           <CartesianGrid strokeDasharray="3 3" stroke="#444" />
//           <Tooltip />
//           <Area
//             type="monotone"
//             dataKey="value"
//             stroke="#8884d8"
//             fillOpacity={1}
//             fill="url(#colorValue)"
//           />
//         </AreaChart>
//       </ResponsiveContainer>
//     </Paper>
//   );
// }



















// 'use client';

// import React from 'react';
// import { Box, Typography, Paper } from '@mui/material';
// import ReactFlow from 'react-flow-renderer';

// const elements = [
//   { id: '1', type: 'input', data: { label: 'Start' }, position: { x: 250, y: 0 } },
//   { id: '2', data: { label: 'Process' }, position: { x: 250, y: 100 } },
//   { id: '3', data: { label: 'End' }, position: { x: 250, y: 200 } },
//   { id: 'e1-2', source: '1', target: '2', animated: true },
//   { id: 'e2-3', source: '2', target: '3', animated: true },
// ];

// export default function FlowChart() {
//   return (
//     <Paper
//       elevation={3}
//       sx={{
//         height: 400,
//         mt: 5,
//         p: 1,
//         borderRadius: 2,
//         bgcolor: 'background.paper',
//         border: '2px solid #1976D2', // MUI blue border
//         overflow: 'hidden',
//       }}
//     >
//       <ReactFlow elements={elements} />
//     </Paper>
//   );
// }
