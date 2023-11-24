// src/routers/MainRoutes.jsx
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HomePage} from '../pages/HomePage'
import { AboutPage } from '../pages/AboutPage'
import { ChatPage } from '../pages/ChatPage'
import LoginPage  from '../pages/LoginPages'
import { Navbar} from '../components/Navbar'
import { BackAndForward} from '../components/BackAndForward'


const MainRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem('lastPath', location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <BackAndForward />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
