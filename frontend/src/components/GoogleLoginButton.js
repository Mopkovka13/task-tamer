import React from 'react';
import { Button, Box } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';  // Импортируем иконку Google

const GoogleLoginButton = () => {
  const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
    `client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&` +
    `redirect_uri=http://localhost:3000&` +
    `response_type=code&` +
    `scope=openid%20email%20profile`;

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
      <Button
        variant="contained"
        color="primary"
        sx={{
          marginBottom: 2,
          width: '100%',
          backgroundColor: "#3c90b8",
          display: 'flex',  // Используем flex для выравнивания содержимого
          alignItems: 'center',  // Выравнивание по центру по вертикали
          justifyContent: 'center',  // Центрируем по горизонтали
        }}
        onClick={() => {
          // Перенаправляем пользователя на Google OAuth URL
          window.location.href = googleAuthUrl;
        }}
      >
        <GoogleIcon sx={{ marginRight: 1 }} /> {/* Иконка Google с отступом справа */}
        Sign in with Google
      </Button>
    </Box>
  );
};

export default GoogleLoginButton;
