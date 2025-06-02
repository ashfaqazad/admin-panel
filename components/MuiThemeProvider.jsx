'use client';

import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Dark mode enable karega
    background: {
      default: '#121212', // Dark gray background for body
      paper: '#1e1e1e',   // Optional: Cards & surfaces
    },
    text: {
      primary: '#ffffff',
    },
  },
});

export default function MuiThemeProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Apply global background color */}
      {children}
    </ThemeProvider>
  );
}











// 'use client';

// import React from 'react';
// import { ThemeProvider, CssBaseline } from '@mui/material';
// import { createTheme } from '@mui/material/styles';

// const theme = createTheme();

// export default function MuiThemeProvider({ children }) {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       {children}
//     </ThemeProvider>
//   );
// }
