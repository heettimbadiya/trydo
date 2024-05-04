import React, { useEffect } from "react";
import Footer from "./components/global/Footer";
import Contact from "./pages/contact/Contact";
import Home from "./pages/Home/Home";
import { Route, Routes, useLocation } from "react-router";
import About from "./pages/about/About";
import Services from "./pages/service/Services";
import ServicePage2 from "./components/service/ServicePage2";
import Header from "./components/global/Header";
import Blocks from "./pages/blog/Blocks";
const App = () => {
    function ScrollToTop() {
      const { pathname } = useLocation();
      useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
      return null;
    }
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/service-details" element={<ServicePage2 />} />
        <Route path="/blocks" element={<Blocks />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
