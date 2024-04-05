import RoutesApp from './routes/RoutesApp';
import { ThemeProvider, useTheme } from './themes/ThemeContext'; 
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

const AppContent = () => {
  const { theme } = useTheme(); 
  return (
    <div className={`App ${theme}`}>
      <RoutesApp />
    </div>
  );
};

export default App;