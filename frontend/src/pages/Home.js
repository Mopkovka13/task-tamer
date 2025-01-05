import React, { useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import axios from 'axios';

const Home = () => {
  useEffect(() => {
    const fetchData = async () => {  // Сделаем функцию асинхронной
      console.log('Component mounted');
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');
    
      if (code) {
        const requestData = {
          code: code,
        };

        try {
          const res = await axios.post('http://localhost:8081/api/v1/oauth/token', requestData, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          console.log('Response:', res.data);
        } catch (err) {
          console.error('Error:', err);
        }
      } else {
        console.log('No code found in URL');
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
        <Typography variant="h4" color="white">Hello World</Typography>
      </Box>
    </Container>
  );
};

export default Home;
