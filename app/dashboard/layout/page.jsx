'use client';
// import { useAuth } from '@/components/AuthProvider';
// // import { useAuth } from '@/context/AuthContext';
// import { AuthProvider } from '@/components/AuthProvider';
import { useAuth, AuthProvider } from '@/components/AuthProvider';


import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';

function DashboardContent({ children }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push('/login');
  }, [user]);

  if (!user) return <div>Loading...</div>;

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Topbar />
        <main>{children}</main>
      </div>
    </div>
  );
}

export default function DashboardLayout({ children }) {
  return (
    <AuthProvider>
      <DashboardContent>{children}</DashboardContent>
    </AuthProvider>
  );
}








// 'use client';
// import { useAuth } from '@/context/AuthContext';
// import { AuthProvider } from '@/context/AuthContext'; // ya relative path

// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';
// import Sidebar from '@/components/Sidebar';
// import Topbar from '@/components/Topbar';

// export default function DashboardLayout({ children }) {
//   const { user } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (!user) router.push('/login');
//   }, [user]);

//   if (!user) return <div>Loading...</div>;

//   return (
//     <div style={{ display: 'flex' }}>
//       <Sidebar />
//       <div style={{ flex: 1 }}>
//         <Topbar />
//         <main>{children}</main>
//       </div>
//     </div>
//   );
// }
