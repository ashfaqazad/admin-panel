// ❌ Don't add "use client" here

import './globals.css';
import { AuthProvider } from '@/components/AuthProvider';
import MuiThemeProvider from '@/components/MuiThemeProvider';
import ClientLayout from '@/components/ClientLayout'; // 👈 Import new layout wrapper

export const metadata = {
  title: 'Admin Panel',
  description: 'Next.js Admin Panel with MUI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <MuiThemeProvider>
            <ClientLayout>{children}</ClientLayout>
          </MuiThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}















// // app/layout.jsx
// import './globals.css';
// import Sidebar from '@/components/Sidebar';
// import Topbar from '@/components/Topbar';
// import { AuthProvider } from '@/components/AuthProvider';
// import MuiThemeProvider from '@/components/MuiThemeProvider'; // 👈 import new wrapper
// import 'react-flow-renderer/dist/style.css';
// import 'react-flow-renderer/dist/theme-default.css';


// export const metadata = {
//   title: 'Admin Panel',
//   description: 'Next.js Admin Panel with MUI',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <AuthProvider>
//           <MuiThemeProvider> {/* ✅ Wrap all MUI components here */}
//             <Topbar />
//             <Sidebar />
//             <main style={{ marginLeft: 240, padding: 16 }}>{children}</main>
//           </MuiThemeProvider>
//         </AuthProvider>
//       </body>
//     </html>
//   );
// }
