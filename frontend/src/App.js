import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import RegistrationForm from './components/RegistrationForm';
import Home from './pages/Home';
import TempAuth from './pages/TempAuth';
import RequireAuth from './components/RequireAuth';

const theme = createTheme({
  palette: {
    background: {
      default: '#2b5a5c', // Задаем фоновый цвет для всего приложения
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Применяем глобальные стили */}
      <Routes>
      <Route path="/" element={<TempAuth />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
