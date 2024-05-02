
import React from 'react'
import Footer from './components/global/Footer'
import Contact from './pages/contact/Contact'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router'
import About from './pages/about/About'
import Services from './pages/service/Services'
import ServicePage2 from './components/service/ServicePage2'
import Header from './components/global/Header'
const App = () => {
  return (
    <>
      <Header />
      <Routes>
    
        <Route path='/' element={ <Home />} />
        <Route path='/about' element={ <About />} />
        <Route path='/service' element={<Services />} />
        <Route path='/service-details' element={<ServicePage2 />} />
        <Route path='/contact' element={ <Contact />} />
      </Routes>
    <Footer />
    </>
  );
};

export default App;
