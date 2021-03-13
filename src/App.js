import React from 'react';
import Navbar from './Component/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './Component/Hero';
import Products from './Component/Products';
import { productData, productDataTwo } from './Component/Products/data';
import Feature from './Component/Feature';
import Footer from './Component/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading='Choose your favorite' data={productData}/>
      <Feature/>
      <Products heading='Choose your favorite' data={productDataTwo}/>
      <Footer/>
    </Router>

  );
}

export default App;
