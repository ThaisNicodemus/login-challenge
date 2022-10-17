import React, { useState, createContext } from 'react';
import { NavigateProvider } from 'react-use-navigate'

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const navigate = NavigateProvider();

//     const [user, setUser] = useState(null);

//     const login = (email, password) => {
//         console.log("login auth", { email, password });

//         // Senha mocada!
//         if (password !== "admin") {
//             return false;
//         }
//         setUser({ id: "001", email });
//         localStorage.setItem('user', JSON.stringify(user));
        
//         return true;        
//     };

//     const logout = () => {
//         console.log("logout");
//         setUser(null);
//         localStorage.removeItem('user');
//         navigate("/login");
//     };

//     return (
//         <AuthContext.Provider
//             value={{ authenticated: !!user, user, login, logout }}
//         >
//             {children}
//         </AuthContext.Provider>
//     );
// };