import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Home = () => {
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
