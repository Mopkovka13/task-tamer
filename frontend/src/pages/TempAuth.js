import React, { useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate

const TempAuth = () => {
  const navigate = useNavigate(); // Хук для навигации
    
  useEffect(() => {
    const fetchData = async () => {  // Сделаем функцию асинхронной
        localStorage.clear();
      console.log('Component mounted');
      const hashParams = new URLSearchParams(window.location.hash.substr(1));
      const accessToken = hashParams.get('access_token'); // Здесь получаем access_token из хэш-фрагмента
    
      if (accessToken) {
        const requestData = {
          accessToken: accessToken,
        };

        try {
          const res = await axios.post('http://localhost:8081/api/v1/oauth/google/token', requestData, {
            headers: {
              'Content-Type': 'application/json',
            },
          });

          console.log('Response:', res.data);

          localStorage.setItem('accessToken', res.data.accessToken);
          localStorage.setItem('refreshToken', res.data.refreshToken);
          localStorage.setItem('expiresIn', res.data.expiresIn);

          navigate('/home');
        } catch (err) {
          console.error('Error:', err);

          navigate('/auth');
        }
      } else {
        console.log('No access token found in URL');
      }
    };

    fetchData();  // Вызовем асинхронную функцию внутри useEffect
  }, []);  // Пустой массив, чтобы эффект сработал только при монтировании компонента

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 3, 
          backgroundColor: '#212121', 
          borderRadius: 2, 
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" color="white">Get out from my mind!</Typography>
      </Box>
    </Container>
  );
};

export default TempAuth;
