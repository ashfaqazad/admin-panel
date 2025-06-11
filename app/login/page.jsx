'use client';
import { useAuth } from '@/components/AuthProvider';
import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';

export default function LoginPage() {
  const { user, dispatch } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // 👇 Redirect if already logged in
  useEffect(() => {
    if (user) {
      router.replace('/dashboard');
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.token && data.user) {
      // Store token
      localStorage.setItem('token', data.token);

      // Decode token
      const decoded = jwtDecode(data.token);

      // Update context state
      dispatch({ type: 'LOGIN', payload: decoded });

      // Redirect to dashboard
      router.push('/dashboard');
    } else {
      setError(data.message || 'Login failed');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box mt={10}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </Box>
        </form>

        {/* Register Link */}
        <Box mt={2} textAlign="center">
          <Typography variant="body2">
            Don't have an account?{' '}
            <Button
              variant="text"
              color="primary"
              onClick={() => router.push('/register')}
            >
              Register
            </Button>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}












// 'use client';
// import { useAuth } from '@/components/AuthProvider';
// import React, { useState } from 'react';
// import { Container, TextField, Button, Typography, Box } from '@mui/material';
// import { useRouter } from 'next/navigation';

// export default function LoginPage() {
//   const { dispatch } = useAuth();
//   const router = useRouter();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [user, setUser] = useState('')

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const res = await fetch('/api/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password }),
//     });


//     const data = await res.json();

//   //   if (data.token && data.user) {
//   //     localStorage.setItem('token', data.token);
//   //     localStorage.setItem('user', JSON.stringify({ email: data.user.email }));

//   //     setUser({ email: data.user.email }); // 👈 VERY IMPORTANT

//   //     router.push('/dashboard');
//   //   } else {
//   //     setError(data.message || 'Login failed');
//   //   }


//     if (data.token && data.user) {
//     // localStorage.setItem('token', data.token);
//     localStorage.setItem('token', data.token);
//     localStorage.setItem('user', JSON.stringify({ email: data.user.email }));
//     setUser({ email: data.user.email }); // 👈 VERY IMPORTANT

//     const decoded = jwt_decode(data.token);
//     dispatch({ type: 'LOGIN', payload: decoded }); // 👈 Update context state
//     router.push('/dashboard');
//   }


  
//   };


//   return (
//     <Container maxWidth="xs">
//       <Box mt={10}>
//         <Typography variant="h5" align="center" gutterBottom>
//           Login
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             label="Email"
//             fullWidth
//             margin="normal"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <TextField
//             label="Password"
//             type="password"
//             fullWidth
//             margin="normal"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           {error && (
//             <Typography color="error" variant="body2">
//               {error}
//             </Typography>
//           )}
//           <Box mt={2}>
//             <Button type="submit" variant="contained" color="primary" fullWidth>
//               Login
//             </Button>
//           </Box>
//         </form>

//         {/* 👇 Register link below form */}
//         <Box mt={2} textAlign="center">
//           <Typography variant="body2">
//             Don't have an account?{' '}
//             <Button
//               variant="text"
//               color="primary"
//               onClick={() => router.push('/register')}
//             >
//               Register
//             </Button>
//           </Typography>
//         </Box>
//       </Box>
//     </Container>
//   );
// }

