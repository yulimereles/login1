// src/routers/AppRouter.jsx
import { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { MainRoutes } from './MainRoutes';

const AppRouter = () => {
  const { login, logout, authState } = useContext(AuthContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = JSON.parse(localStorage.getItem('token'));

    if (user && token) {
      login({ user, token });
      return;
    } else {
      logout();
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      return;
    }
  }, [authState.logged]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoutes>
              {/* Componente de inicio de sesión */}
            </PublicRoutes>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoutes>
              <MainRoutes />
            </PrivateRoutes>
          }
        />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
