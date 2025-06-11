'use client';
import React, { useEffect, useState } from 'react';
import {
  Typography,
  Box,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
} from '@mui/material';

export default function UsersPage() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/users');
        const data = await res.json();
        console.log("Users from API:", data); // 👈 yeh log check karo


        if (Array.isArray(data)) {
          // If user.role is missing, fallback to "User"
          const updatedUsers = data.map((user) => ({
            ...user,
            role: user.role || 'User',
          }));

          setUsers(updatedUsers);
        } else {
          console.error('Invalid response from server:', data);
        }
      } catch (err) {
        console.error('Failed to fetch users:', err);
      }
    };

    fetchUsers();
  }, []);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const res = await fetch("/api/users");
  //       const data = await res.json();
  //       console.log("Users from API:", data); // 👈 confirm karo yahan kya aa raha
  //       setUsers(data);
  //     } catch (error) {
  //       console.error("Error fetching users:", error);
  //     }
  //   };
  //   fetchUsers();
  // }, []);




  return (
    <Box
      sx={{
        backgroundColor: '#0A192F',
        color: 'white',
        width: '100%',
        minHeight: '100vh',
        p: 4,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" fontWeight="bold" mt={4} mb={3}>
        👥 Users
      </Typography>

      <TableContainer component={Paper} sx={{ backgroundColor: '#0A192F' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Name</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Email</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Role</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Created At</TableCell>
            </TableRow>
          </TableHead>

          {/* <TableBody>
            {users.map((user) => (
              <TableRow key={user._id} hover>
                <TableCell sx={{ color: 'white' }}>{user.username}</TableCell>
                <TableCell sx={{ color: 'white' }}>{user.email}</TableCell>
                <TableCell sx={{ color: 'white' }}>{user.role}</TableCell>
                <TableCell sx={{ color: 'white' }}>
                  {new Date(user.createdAt).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody> */}

          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} hover>
                <TableCell sx={{ color: 'white' }}>{user.name}</TableCell>
                <TableCell sx={{ color: 'white' }}>{user.email}</TableCell>
                <TableCell sx={{ color: 'white' }}>{user.role}</TableCell>
                <TableCell sx={{ color: 'white' }}>
                  {new Date(user.createdAt).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>


        </Table>
      </TableContainer>
    </Box>
  );
}
















// 'use client';
// import React, { useEffect, useState } from 'react';
// import {
//   Typography,
//   Box,
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
//   TableContainer,
//   Paper,
// } from '@mui/material';

// export default function UsersPage() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//   //   const dummyUsers = [
//   //     { id: 1, name: 'Ali Khan', email: 'ali@gmail.com', role: 'User', createdAt: '2024-01-01' },
//   //     { id: 2, name: 'Sara Ahmed', email: 'sara@gmail.com', role: 'Admin', createdAt: '2024-02-10' },
//   //     { id: 3, name: 'Usman Tariq', email: 'usman@gmail.com', role: 'User', createdAt: '2024-03-15' },
//   //     { id: 4, name: 'Hira Malik', email: 'hira@gmail.com', role: 'User', createdAt: '2024-03-20' },
//   //     { id: 5, name: 'Zain Ali', email: 'zain@gmail.com', role: 'Admin', createdAt: '2024-04-01' },
//   //     { id: 6, name: 'Fariha Yousuf', email: 'fariha@gmail.com', role: 'User', createdAt: '2024-04-10' },
//   //     { id: 7, name: 'Hamza Noor', email: 'hamza@gmail.com', role: 'User', createdAt: '2024-04-18' },
//   //     { id: 8, name: 'Rabia Noman', email: 'rabia@gmail.com', role: 'User', createdAt: '2024-04-25' },
//   //     { id: 9, name: 'Adeel Raza', email: 'adeel@gmail.com', role: 'Admin', createdAt: '2024-05-01' },
//   //     { id: 10, name: 'Mehwish Tariq', email: 'mehwish@gmail.com', role: 'User', createdAt: '2024-05-20' },
//   //   ];

//   //   setUsers(dummyUsers);
//   // }, []);

//   return (
//     <Box sx={{ backgroundColor: '#0A192F', color: 'white', width: "700px", minHeight: '100vh', p: 4, borderRadius: 2 }}>
//       <Typography variant="h5" fontWeight="bold" mt={4} mb={3}>
//         👥 Users
//       </Typography>

//       <TableContainer component={Paper} sx={{ backgroundColor: '#0A192F' }}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Name</TableCell>
//               <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Email</TableCell>
//               <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Role</TableCell>
//               <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Created At</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {users.map((user) => (
//               <TableRow key={user.id} hover>
//                 <TableCell sx={{ color: 'white' }}>{user.name}</TableCell>
//                 <TableCell sx={{ color: 'white' }}>{user.email}</TableCell>
//                 <TableCell sx={{ color: 'white' }}>{user.role}</TableCell>
//                 <TableCell sx={{ color: 'white' }}>{user.createdAt}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// }

















// // app/dashboard/users/page.jsx
// 'use client';
// import React from 'react';
// import { Typography, Box } from '@mui/material';

// export default function UsersPage() {
//   return (
//     <Box>
//       <Typography variant="h4" gutterBottom>
//         Users
//       </Typography>
//       <Typography>Manage and view user accounts here.</Typography>
//     </Box>
//   );
// }