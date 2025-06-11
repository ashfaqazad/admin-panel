// app/register/page.jsx
'use client';
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    });
    const data = await res.json();
    if (data.success) {
      router.push('/login');
    } else {
      setError(data.message);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box mt={10}>
        <Typography variant="h5" align="center" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
              Register
            </Button>
          </Box>
        </form>

                {/* 👇 Login link below form */}
                <Box mt={2} textAlign="center">
                  <Typography variant="body2">
                    Do you have an account?{' '}
                    <Button
                      variant="text"
                      color="primary"
                      onClick={() => router.push('/login')}
                    >
                      Login
                    </Button>
                  </Typography>
                </Box>
        
      </Box>
    </Container>
  );
}
