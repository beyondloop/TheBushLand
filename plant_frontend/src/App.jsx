import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductPage from "./View Page/ProductPage";
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
    <Header/>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage/>} />
        <Route path="/product/:idx" element={<ProductPage />} />
      </Routes>
<Footer />
    </Router>
  );
};

export default App;
