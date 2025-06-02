'use client';



import React from 'react';
import { Drawer, List, ListItem, ListItemText, Toolbar } from '@mui/material';
import { useRouter } from 'next/navigation';

const drawerWidth = 240;

export default function Sidebar() {
  const router = useRouter();

  const menuItems = [
    { text: 'Dashboard', path: '/dashboard' },
    { text: 'Users', path: '/dashboard/users' },
    { text: 'Settings', path: '/dashboard/settings' },
    { text: 'ProductTable', path: '/dashboard/ProductTable' },

  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          // backgroundColor: '#1e1e2f', // Sidebar background color
          // color: '#fff',              // Default text color
          backgroundColor: '#0A192F', // ✅ Dark gray background
          color: '#ffffff',           // ✅ White text for contrast

        },
      }}
    >
      <Toolbar />
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => router.push(item.path)}
            sx={{
              '&:hover': {
                backgroundColor: '#333356', // Hover background color
              },
              paddingY: 1.5,
              paddingX: 3,
            }}
          >
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontWeight: 500,
                fontSize: '16px',
                color: '#fff',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
















// 'use client';



// import React from 'react';
// import { Drawer, List, ListItem, ListItemText, Toolbar } from '@mui/material';
// import { useRouter } from 'next/navigation';

// const drawerWidth = 240;

// export default function Sidebar() {
//   const router = useRouter();

//   const menuItems = [
//     { text: 'Dashboard', path: '/dashboard' },
//     { text: 'Users', path: '/dashboard/users' },
//     { text: 'Settings', path: '/dashboard/settings' },
//   ];

//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: drawerWidth,
//         flexShrink: 0,
//         [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
//       }}
//     >
//       <Toolbar />
//       <List>
//         {menuItems.map((item) => (
//           <ListItem button key={item.text} onClick={() => router.push(item.path)}>
//             <ListItemText primary={item.text} />
//           </ListItem>
//         ))}
//       </List>
//     </Drawer>
//   );
// }
