import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Импортируем GoogleOAuthProvider
import App from './App';

// Замените "YOUR_GOOGLE_CLIENT_ID" на ваш реальный Client ID
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={clientId}> {/* Оборачиваем в GoogleOAuthProvider */}
    <BrowserRouter> {/* Оборачиваем в BrowserRouter */}
      <App />
    </BrowserRouter>
  </GoogleOAuthProvider>
);
