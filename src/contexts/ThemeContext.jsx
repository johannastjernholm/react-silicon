import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();
// TODO: Spara dark mode till localStorage

const DarkThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("isDarkMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    document.body.setAttribute("data-theme", isDarkMode ? "dark" : "");
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((currentValue) => !currentValue);
  };

  return <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>;
};

export default DarkThemeProvider;
