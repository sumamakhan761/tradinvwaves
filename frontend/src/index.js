import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './index.css';

import HomePage from './landing_page/home/HomePage';

import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/footer';
import NotFound from './landing_page/Notfound'
import Home from "./components/Home";
import Funds from "./components/Funds";
import Holdings from "./components/Holdings";

// import Orders from "./components/Orders";
// import Positions from "./components/Positions";
// import Summary from "./components/Summary";
// import WatchList from "./components/WatchList";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path="/dashboard/*" element={<Home />} />
      {/* <Route path="/dashboard/orders" element={<Orders />} />
      <Route path="/dashboard/holdings" element={<Holdings />} />
      <Route path="/dashboard/positions" element={<Positions />} />
      <Route path="/dashboard/funds" element={<Funds />} /> */}
      <Route path='/about' element={<AboutPage />} />
      <Route path='/product' element={<ProductPage />} />
      <Route path='/pricing' element={<PricingPage />} />
      <Route path='/support' element={<SupportPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
