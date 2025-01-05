import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import RegistrationForm from './components/RegistrationForm';
import Home from './pages/Home';

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
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
