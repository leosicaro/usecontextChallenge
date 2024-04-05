import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('white');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'white' ? 'black' : 'white'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


export {useTheme,ThemeProvider};