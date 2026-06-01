import { createContext, useState } from "react";

export const UserContext = createContext()
export const ThemeContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState("sadik")

    return (
        <UserContext.Provider value={{ user, setUser }} >
            {children}
        </UserContext.Provider>
    );
};


export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
