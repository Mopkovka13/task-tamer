import React, { useState } from 'react';
import { TextField, Button, Box, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate

const RegistrationForm = () => {
  const navigate = useNavigate(); // Хук для навигации
  const [formData, setFormData] = useState({
    login: '',
    password: '',
    confirmPassword: '',
    email: '',
    nickname: ''
  });

  // Функция для перехода на страницу регистрации
  const handleAuthClick = () => {
    navigate('/auth');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
    } else {
      // Логика отправки данных на сервер
      console.log('Registration data:', formData);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 3,
          backgroundColor: '#5e939c',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" color="white" gutterBottom>Register</Typography>

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            label="Login"
            variant="outlined"
            name="login"
            value={formData.login}
            onChange={handleChange}
            sx={{ marginBottom: 2, width: '100%' }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            name="password"
            value={formData.password}
            onChange={handleChange}
            sx={{ marginBottom: 2, width: '100%' }}
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            sx={{ marginBottom: 2, width: '100%' }}
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
            sx={{ marginBottom: 2, width: '100%' }}
          />
          <TextField
            label="Nickname"
            variant="outlined"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            sx={{ marginBottom: 2, width: '100%' }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ marginTop: 2, width: '100%', backgroundColor: "#3c90b8" }}
          >
            Register
          </Button>

          {/* Центрируем кнопку для перехода на страницу логина */}
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            <Button 
              variant="text" 
              sx={{ color: 'white', textTransform: 'none'}} 
              onClick={handleAuthClick}
            >
              Return to the authorization page
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default RegistrationForm;
