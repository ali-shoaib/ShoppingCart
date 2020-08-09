import React from 'react';
import {Link,Routes, Route} from 'react-router-dom';
import Header from './shoeStore/header';
import Home from './shoeStore/home';
import ProductIndex from './shoeStore/productIndex';
import ContextProvider from './shoeStore/contextApi';
import Cart from './shoeStore/cart';
import './App.css';
import ProductDetails from './shoeStore/productDetails';

function AppTwo () {
    const Notfound = () => {
        return(
            <h2 className='pagenotfound'>Page not found</h2>
        )
    }
    return(
        <div className="app">
            <ContextProvider>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="products" element={<ProductIndex />}></Route>
                <Route path="products/:id" element={<ProductDetails />} />
                <Route path="cart" element={<Cart />}></Route>
                <Route path="*" element={<Notfound />}></Route>
            </Routes>
            </ContextProvider>
            
        </div>
    )
}

export default AppTwo;