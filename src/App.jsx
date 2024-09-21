import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Shop from './pages/Shop/Shop';
import ShopCategory from './pages/ShopCategory/ShopCategory';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import LoginSignup from './pages/LoginSignup/LoginSignup';
import ShopContextProvider from './context/ShopContext';

import men_banner from  './assets/banner_mens.png'
import women_banner from  './assets/banner_women.png'
import kid_banner from  './assets/banner_kids.png'
function App() {
  return (
    <BrowserRouter>
      <ShopContextProvider>
      <Navbar />

      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/men' element={<ShopCategory category='men' banner={men_banner} />} />
        <Route path='/women' element={<ShopCategory category='women' banner={women_banner} />} />
        <Route path='/kids' element={<ShopCategory category='kid' banner={kid_banner} />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup/>} />
      </Routes>
      <Footer />

      </ShopContextProvider>
      
    </BrowserRouter>
  );
}

export default App;