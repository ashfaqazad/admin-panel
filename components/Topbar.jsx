'use client';
import { Button, AppBar, Toolbar, Typography, Box } from '@mui/material';
import { useRouter } from 'next/navigation';
// import { useAuth } from '@/context/AuthContext';
import { useAuth } from '@/components/AuthProvider';



export default function Topbar() {
  const { user, setUser } = useAuth();
  const router = useRouter();
  const { dispatch } = useAuth();


  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   setUser(null);
  //   router.push('/login');
  // };

  const handleLogout = () => {
  localStorage.removeItem('token');
  dispatch({ type: 'LOGOUT' });
  router.push('/login');
};


  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Admin Panel
        </Typography>
        {user ? (
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Button color="inherit" onClick={() => router.push('/login')}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}












// 'use client';



// import React from 'react';
// import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// import { useRouter } from 'next/navigation';

// export default function Topbar() {
//   const router = useRouter();

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     router.push('/login');
//   };

//   return (
//     <AppBar position="fixed" sx={{ zIndex: 1201 }}>
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           Admin Panel
//         </Typography>
//         <Button color="inherit" onClick={handleLogout}>
//           Logout
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// }
