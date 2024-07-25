import React, { createContext, useState, useContext } from 'react';

// Crea el contexto
const AuthContext = createContext();

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = async (username, password) => {
        try {
            const response = await fetch(`/api/users?username=${username}&password=${password}`, {
                method: 'GET',
            });

            if (response.ok) {
                setIsAuthenticated(true);
                return true;
            } else {
                alert('Login failed');
                return false;
            }
        } catch (error) {
            console.error('An unexpected error occurred:', error);
            return false;
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personalizado para usar el contexto
export const useAuth = () => {
    return useContext(AuthContext);
};
