import React from 'react';
import { Navigate } from 'react-router-dom';

// HOC для защиты маршрутов
const RequireAuth = ({ children }) => {
  const accessToken = localStorage.getItem('accessToken');

  // Если токен отсутствует, редиректим на страницу логина
  if (!accessToken) {
    return <Navigate to="/auth" replace />;
  }

  // Если токен есть, рендерим дочерние компоненты
  return children;
};

export default RequireAuth;