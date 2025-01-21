import React from 'react';
import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';
import GlobalStyles from './styles/globalStyles';
import { VideoProvider } from './context/VideoContext'; // Importar el proveedor
import Footer from './components/Footer';

const App = () => {
  return (
    <VideoProvider>
      <GlobalStyles />
      <Header />
      <AppRoutes />
      <Footer />
    </VideoProvider>
  );
};

export default App;


