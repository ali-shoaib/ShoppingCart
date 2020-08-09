import React,{useContext} from 'react';
import {GlobalContext} from './contextApi';
import '../App.css';
import './card.css';

function Cart(){
    const [cart] = useContext(GlobalContext);
    return(
        <div>
            <h2 className="itemsincart">Items In Cart</h2>
            {cart.map(item => (
                <div className="card2" key={item.id}>
                <h4 className="name">{item.name}</h4>
                <h4><span>Rs. {item.cost}</span></h4>
                
                <img src={item.img} alt={item.name}/><br/>
                </div>
            ))}
        </div>
    )
}

export default Cart;