'use client'; // 👈 Yeh line sabse upar honi chahiye



import { createContext, useContext, useEffect, useReducer } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

const initialState = {
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      return state;
  }
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        dispatch({ type: 'LOGIN', payload: decoded });
      } catch (err) {
        console.log('Invalid token', err);
        localStorage.removeItem('token');
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user: state.user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);























// 'use client';

// import { createContext, useContext, useEffect, useReducer } from 'react';
// // import jwt_decode from 'jwt-decode';
// import { jwtDecode } from 'jwt-decode';


// const AuthContext = createContext();

// const initialState = {
//   user: null,
// };

// function authReducer(state, action) {
//   switch (action.type) {
//     case 'LOGIN':
//       return { user: action.payload };
//     case 'LOGOUT':
//       return { user: null };
//     default:
//       return state;
//   }
// }

// export const AuthProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, initialState);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       try {
//         // const decoded = jwt_decode(token);
//         const decoded = jwtDecode(token);

//         dispatch({ type: 'LOGIN', payload: decoded });
//       } catch {
//         localStorage.removeItem('token');
//         dispatch({ type: 'LOGOUT' });
//       }
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user: state.user, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);




















// 'use client';

// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   // useEffect(() => {
//   //   const token = localStorage.getItem('token');
//   //   if (token) {
//   //     // ✅ Skip API call for now — assume user is logged in
//   //     setUser({ name: 'Demo User' }); // Temporary mock user
//   //     setLoading(false);
//   //   } else {
//   //     router.push('/login');
//   //     setLoading(false);
//   //   }
//   // }, [router]);

//   // ✅ Load user from localStorage when app loads


//   useEffect(() => {
//   const token = localStorage.getItem('token');
//   const storedUser = localStorage.getItem('user');

//   if (token && storedUser) {
//     const parsedUser = JSON.parse(storedUser);
//     setUser(parsedUser); // ✅ real user info
//     setLoading(false);
//   } else {
//     router.push('/login');
//     setLoading(false);
//   }
// }, [router]);


//   if (loading) return <div>Loading...</div>;

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);
























// 'use client';

// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { usePathname, useRouter } from 'next/navigation';

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();
//   const pathname = usePathname();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setUser({ name: 'Demo User' }); // mock user
//       setLoading(false);
//     } else {
//       // ✅ Allow login and register page without redirect
//       if (pathname !== '/login' && pathname !== '/register') {
//         router.push('/login');
//       }
//       setLoading(false);
//     }
//   }, [router, pathname]);

//   if (loading) return <div>Loading...</div>;

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);
































// 'use client';


// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       fetch('/api/verifyToken', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ token })
//       })
//         .then(res => res.json())
//         .then(data => {
//           if (data.success) {
//             setUser(data.user);
//           } else {
//             router.push('/login');
//           }
//           setLoading(false);
//         });
//     } else {
//       router.push('/login');
//       setLoading(false);
//     }
//   }, [router]);

//   if (loading) return <div>Loading...</div>;

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);
