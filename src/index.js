import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Landing from './views/home/Landing';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './views/shop/Shop';
import Cart from './views/cart/Cart';
import Category from './views/Categories/Category';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index="/Landing" element={<Landing />}/>
        <Route path='/Shop' element={<Shop />}/>
        <Route path='/Cart' element={<Cart />}/>
        <Route path='/Category' element={<Category />}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
