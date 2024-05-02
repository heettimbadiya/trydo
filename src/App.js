import { useTheme } from '@emotion/react'
import { Box } from '@mui/material'
import React from 'react'
import Header from './components/global/Header'
import Footer from './components/global/Footer'
import Contact from './pages/contact/Contact'
const App = () => {
  return (
    <>
    <Header />
    <Contact />
    <Footer />
    </>
  );
};

export default App;
