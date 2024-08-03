import React from 'react';
import "./Item.css";

const Item = ({ item, addToCart }) => (
  <div className="item">
    <img src={item.image} alt={item.description} />
    <h3>{item.description}</h3>
    <p>Rating: {item.rating}</p>
    <p>Price: ${item.price}</p>
    <button onClick={() => addToCart(item)}>Add to Cart</button>
  </div>
);

export default Item;