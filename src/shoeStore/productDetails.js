import React, { useContext } from 'react'
import {useParams} from 'react-router'
import {Link} from 'react-router-dom'
import {GlobalContext} from './contextApi';
import './card.css';
import '../App.css';

const ProductDetails = () => {
        const [productList, addToCart, colors, sizes, cart, clearCart] = useContext(GlobalContext);

        const {id} = useParams();
        const products = productList[id];
        
    return(
        
            <div>
            <h2 className='productdetails'>Product Details</h2>
            <h3>{cart.length}</h3>
                <div className="card2">
                <h4 className="name">{products.name}</h4>
                <h4><span>Rs. {products.cost}</span></h4>
                <div className="colors">
                {
                    colors.map((color,index) => (
                    <button key={index} style={color}></button>
                    ))
                }
                </div>
                <div className="sizes">
                {
                    sizes.map((size,index) => (
                    <button key={index}>{size.s}</button>
                    ))
                }
                </div>
                <img src={products.img} alt={products.name}/><br/>
                <button onClick={() => addToCart(products.id)}>Add to cart</button><br/>
            <button onClick={clearCart}>Clear cart</button>
            <Link to='/products'>
            <button>Back to Products</button><br/>
            </Link>
            </div>
        
            </div>
    )
}

export default ProductDetails;