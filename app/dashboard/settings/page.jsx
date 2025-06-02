'use client';
import React, { useState } from 'react';
import {
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Paper,
} from '@mui/material';

export default function SettingsPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Updated Settings:', form);
    // Yahan actual update API call hogi
  };

  return (
    <Box sx={{ backgroundColor: '#0A192F', color: 'white', minHeight: '100vh', p: 4 }}>
      <Typography variant="h5" fontWeight="bold" mt={4} mb={3}>
        ⚙️ Settings
      </Typography>

      <Paper sx={{ p: 3, maxWidth: 600, backgroundColor: '#1565C0', color: 'white' }} elevation={3}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                variant="outlined"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                value={form.email}
                onChange={handleChange}
                variant="outlined"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="password"
                label="New Password"
                name="password"
                value={form.password}
                onChange={handleChange}
                variant="outlined"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth color="secondary">
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}




















// // app/dashboard/settings/page.jsx
// 'use client';
// import React from 'react';
// import { Typography, Box } from '@mui/material';

// export default function SettingsPage() {
//   return (
//     <Box>
//       <Typography variant="h4" gutterBottom>
//         Settings
//       </Typography>
//       <Typography>Manage system configuration and preferences here.</Typography>
//     </Box>
//   );
// }
