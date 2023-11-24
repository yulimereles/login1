import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import { MainRoutes } from './routers/MainRoutes';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
