import React from 'react';
import { TextField, Button, Box, Container } from '@mui/material';
import GoogleLoginButton from './GoogleLoginButton'; // Импортируем компонент GoogleLoginButton
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate

const AuthForm = () => {
  const navigate = useNavigate(); // Хук для навигации

  // Функция для перехода на страницу регистрации
  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}> {/* Ограничиваем ширину контейнера и добавляем отступ сверху */}
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 2, // Добавляем внутренние отступы
          backgroundColor: '#5e939c', // Темный фон
          borderRadius: 2, // Скругление углов
          boxShadow: 3, // Легкая тень
        }}
      >
        <h2 style={{ color: 'white' }}>Login</h2>
        <TextField 
          label="Login" 
          variant="outlined" 
          sx={{ marginBottom: 2, width: '100%' }} // Отступ снизу и растягиваем на всю ширину
        />
        <TextField 
          label="Password" 
          type="password" 
          variant="outlined" 
          sx={{ marginBottom: 2, width: '100%' }}
        />
        <Button variant="contained" color="primary" sx={{ marginBottom: 2, marginTop: 2, width: '100%', backgroundColor: "#3c90b8" }}>
          Login
        </Button>
        <GoogleLoginButton /> {/* Кнопка для Google Login */}
        
        {/* Кнопка для перехода на страницу регистрации */}
        <Button 
          variant="text" 
          sx={{ color: 'white', marginTop: 2, textTransform: 'none' }} 
          onClick={handleRegisterClick} // Обработчик клика
        >
          Don't have an account? Register
        </Button>
      </Box>
    </Container>
  );
};

export default AuthForm;
