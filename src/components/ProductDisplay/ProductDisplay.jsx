import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../context/ShopContext';
function ProductDisplay(props) {
    const {product} = props
    const {addToCart,getQuantityById,removeFromCart} = useContext(ShopContext)
  return (
    <div className='product_display'>
        <div className="left">
            <div className="display_img_list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="display_img">
                <img src={product.image} alt={product.name} />
            </div>
        </div>

        <div className="right">
            <h1>{product.name}</h1>
            <div className="star">
                <p>⭐⭐⭐⭐⭐</p>
                <p>5 Reviews</p>
            </div>
            <div className="price">
                <p className='new'>${product.new_price}</p>
                <p className='old'>${product.old_price}</p>
            </div>
            <div className="description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis deleniti ratione obcaecati blanditiis, itaque, eaque sit ipsam libero perferendis, expedita architecto deserunt nobis minus assumenda consectetur et ipsa magnam.</p>
            </div>
            <h3>Select Size</h3>
            <div className="sizes">
                <p>XS</p>
                <p>S</p>
                <p>M</p>
                <p>L</p>
                <p>XL</p>
            </div>
             <button onClick={()=>addToCart(product)} className='cart'>Add to cart</button>
             {
                    getQuantityById(product.id) > 0 ? 
                    <div className="dato">
                        <p className='quantity'>Quantity: {getQuantityById(product.id)}</p>
                        <button onClick={()=>removeFromCart(product.id)}>Remove</button>
                    </div>
                    
                    
                    : null
                
             }
        </div>
      
    </div>
  )
}

export default ProductDisplay
