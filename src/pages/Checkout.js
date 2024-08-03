import React from 'react';
import Navbar from '../components/Navbar';
import "./Checkout.css"

const Checkout = ({ cart, removeFromCart }) => {
  const totalCost = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <Navbar />
      <h2>Checkout</h2>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <div className="cart-img">
              <img src={item.image} alt={item.description} />
            </div>
            <div className='cart-data'>            
            <h3>{item.description}</h3>
            <p>Price: ${item.price}</p>
            <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <h3>Total Cost: ${totalCost}</h3>
    </div>
  );
};

export default Checkout;
