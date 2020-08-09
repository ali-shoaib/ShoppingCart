import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function Header(){
    return(
        <div>
        <header>
        <h1>The Shoe Store</h1>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="products">Products</Link></li>
                <li><Link to="contact">Contact</Link></li>
                <li><Link to="login">Login</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="cart"><button className="cart">Cart</button></Link></li>
            </ul>
        </nav>
        </header>
        </div>
    )
}

export default Header;