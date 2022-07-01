import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import Products from './components/Products/Products';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<><Header /><Products /></>} />
        <Route path='/item/:id' element={<Product />} />
      </Routes>
    </>
  );
}

export default App;