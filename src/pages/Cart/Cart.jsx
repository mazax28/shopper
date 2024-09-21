import React, { useContext } from 'react';
import './Cart.css';
import { ShopContext } from '../../context/ShopContext';

function Cart() {
  const { cart, removeFromCart } = useContext(ShopContext);

  // Calcular el total del carrito
  const totalAmount = cart.reduce((total, product) => total + product.new_price * product.quantity, 0);

  return (
    <div className='cart'>
      <h1>Carrito</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div className='list_cart_item'>
          <p>Item</p>
          <p>Name</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
          <p>Remove</p>
          {cart.map((product) => (
            <div key={product.id} className='cart-item'>
                <img src={product.image} alt="" />
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <p>{product.quantity}</p>
                <p>${product.new_price * product.quantity}</p>
                <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
              </div>
          ))}
        </div>
      )}
      <div className='bottom'>
        <div className="bottom_left">
          <div className="cost">
            <p>Subtotal:</p>
            <p>${totalAmount}</p>
          </div>
          <div className="cost">
            <p>Shipping:</p>
            <p>$10</p>
          </div>
          <div className="cost">
            <p>Total:</p>
            <p>${totalAmount + 10}</p>
          </div>
          <button>Checkout</button>
        </div>
        <div className="bottom_right">
          <p>Have a promocode</p>
          <div className="promocode">
            <input type="text" placeholder='Enter your promocode' />
            <button>Apply</button>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Cart;