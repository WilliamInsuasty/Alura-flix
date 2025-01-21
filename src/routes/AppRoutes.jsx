import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home'; // Asegúrate de que la ruta sea correcta
import NewVideo from '../pages/NewVideo'; // Importamos la página de Nuevo Video


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/NewVideo" element={<NewVideo />} />
    </Routes>
  );
};

export default AppRoutes;




