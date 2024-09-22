import React, { createContext, useState,  changeTheme, us } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const changeThem = () => setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};

export default ThemeProvider;