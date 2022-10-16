import { useState, createContext, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext('value');

export interface AuthContextProps {
    children: ReactNode;
    password?: string;
    user?: string;
}

export function AuthProvider (props: AuthContextProps) {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const login = (user: String, password: String) => {
        console.log("login auth", { user, password });

        // Senha mocada!
        if (password !== "admin") {
            return false;
        }
        if (user !== "admin") {
            return false;
        }
        
        // setUser({ id: "001", user });
        localStorage.setItem('user', JSON.stringify(user));
        
        return true;
    }
}


const logout = () => {
        console.log("logout");
        // setUser(null);
        localStorage.removeItem('user');
        // navigate("/login");
    };

//     return { (
//         <AuthContext.Provider
//             // value={{ authenticated: !!user, user, login, logout }}
//         >
//             {/* {children} */}
//         </AuthContext.Provider>
//     )
// }