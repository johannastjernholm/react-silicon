import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const DarkThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-theme", isDarkMode ? "dark" : "");
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((currentValue) => !currentValue);
  };

  return <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>;
};

export default DarkThemeProvider;
