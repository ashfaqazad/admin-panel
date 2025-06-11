'use client';

import { useAuth } from './AuthProvider';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function ClientLayout({ children }) {
  const { user } = useAuth();

  return (
    <>
      <Topbar />
      {user ? (
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <main style={{ padding: 16 }}>{children}</main>
        </div>
      ) : (
        <main style={{ padding: 16 }}>{children}</main>
      )}
    </>
  );
}


// marginLeft: 240,