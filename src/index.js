import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import './index.scss';

import { UserProvider } from './context/user.context';
import { ProductsProvider } from './context/products.context';
import { CartProvider } from './context/cart.context';

import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <Router>
         <UserProvider>
            <ProductsProvider>
               <CartProvider>
                  <App />
               </CartProvider>
            </ProductsProvider>
         </UserProvider>
      </Router>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
