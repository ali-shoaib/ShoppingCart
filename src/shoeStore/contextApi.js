import React, { useState } from 'react';

export const GlobalContext = React.createContext();

function ContextProvider (props) {
    const [productList] = useState([
         {
            id: 0,
            name: "White Nike Shoes",
            cost: 15000,
            img: 'data:image/jpeg;base64,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'    
          },
          {
            id: 1,
            name: "Green Adidas Shoes",
            cost: 20000,
            img: 'https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/414c2f3ff4844bb79728ab2000cdc977_9366/Ultraboost_20_Shoes_Green_EG0729_01_standard.jpg'   
          },
          {
            id: 2,
            name: "White Puma Shoes",
            cost: 13000,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSG6n9G--1cvt2E7Z-7Beh_prit1-0mb5chMg&usqp=CAUhttps://cdn11.bigcommerce.com/s-hiuea1t2mw/images/stencil/1280x1280/products/27130/64437/apimvsbuc__14377.1577949068.jpg?c=2&imbypass=on'
          },
          {
            id: 3,
            name: "Red Adidas Shoes",
            cost: 10000,
            img: 'https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/2f54465ab56448f19ee6ab9d0161414b_9366/X_PLR_Shoes_Red_FY9055_01_standard.jpg'
          },
          {
            id: 4,
            name: "Blue Adidas Shoes",
            cost: 6000,
            img:'data:image/jpeg;base64,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'
          },
          {
            id: 5,
            name: "Pink Nike Shoes",
            cost: 8000,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRL-mj7znXF47cr3ucnIorigaDqr2Hdo1IOVQ&usqp=CAU'
          }
        ])

    const [cart, setCart] = useState([]);

      const addToCart = (id) => {
        const data = productList.filter(product => {
          return product.id === id;
        })
        console.log(cart);
        setCart([...cart, ...data]);
      }

      const clearCart = () => {
        setCart([]);
      }

      const [colors] = useState([
        {backgroundColor: 'red'},
        {backgroundColor: 'blue'},
        {backgroundColor: 'yellow'},
        {backgroundColor: 'green'}
      ])

      const [sizes] = useState([
        {s: "S"},
        {s: "M"},
        {s: "L"},
        {s: "XL"}
      ])
    return(
        <GlobalContext.Provider value={[productList, addToCart, colors, sizes, cart, setCart, clearCart]}>
            {props.children}
        </GlobalContext.Provider>
    )
} 

export default ContextProvider;