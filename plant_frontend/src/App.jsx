import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductPage from "./View Page/ProductPage";
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import AvailableOn from './components/AvailableOn';
import BestsellerPage from './Pages/BestsellerPage'; // ✅ import

const App = () => {
  return (
    <Router>
    <Header/>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage/>} />
        <Route path="/product/:idx" element={<ProductPage />} />
        <Route path="/bestsellers" element={<BestsellerPage />} /> {/* ✅ new route */}
      </Routes>
       <AvailableOn />
      <AboutUs />
<Footer />
    </Router>
  );
};

export default App;
