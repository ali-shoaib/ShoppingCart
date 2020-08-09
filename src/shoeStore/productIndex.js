import React, { useState, useContext } from 'react';
import {Link, useParams} from 'react-router-dom';
import './card.css';
import '../App.css';
import { GlobalContext } from './contextApi';

function ProductIndex(){
    const [productlist] = useContext(GlobalContext);
    
    return(
        <div className="productIndex"> 
        <h2 className="products">Products</h2>
        {productlist.map((product) => (
        <div className="card" key={product.id}>
        <h2>{product.name}</h2>
        <img src={product.img} alt={product.name} /><br/>
        <Link to={`${product.id}`}>
        <button>See details</button>
        </Link>
        </div>
    ))}
        </div>
    )
}

export default ProductIndex;