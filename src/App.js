import React from 'react';
import Hero from './components/Hero';
import Product from './components/Product';
import ProductDetail1 from './components/product-details/productDetail-1';
import ProductDetail2 from './components/product-details/productDetail-2';
import ProductDetail3 from './components/product-details/productDetail-3';
import ProductDetail4 from './components/product-details/productDetail-4';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Baner from './components/Baner';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={
            <div>
              <Baner />
              {/* <Hero /> */}
              <Product />
              <Footer />
            </div>
          } />

          {/* <Route path='/product-detail/1' element={<ProductDetail1 />} /> */}
          {/* <Route path='/product-detail/2' element={<ProductDetail2 />} /> */}
          <Route path='/product-detail/3' element={<ProductDetail3 />} />
          {/* <Route path='/product-detail/4' element={<ProductDetail4 />} /> */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;


