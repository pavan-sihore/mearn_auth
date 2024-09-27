// src/features/Authentication/hooks/useAuth.js

import { useState } from 'react';

const useAuth = () => {
    const [user, setUser] = useState(null);

    const login = (username, password) => {
        // Simulated login process
        if (username === "user" && password === "pass") {
            setUser({ username });
        } else {
            throw new Error("Invalid credentials");
        }
    };

    const logout = () => {
        setUser(null);
    };

    return { user, login, logout };
};

export default useAuth;
