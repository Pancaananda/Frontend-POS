import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../services/auth'; // Adjust the import based on your auth service

interface AuthContextType {
    user: any; // Replace 'any' with your user type
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<any>(null); // Replace 'any' with your user type

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);

    const login = async (email: string, password: string) => {
        await auth.signInWithEmailAndPassword(email, password);
    };

    const logout = async () => {
        await auth.signOut();
    };

    const register = async (email: string, password: string) => {
        await auth.createUserWithEmailAndPassword(email, password);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};