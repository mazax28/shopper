import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
function Navbar() {

  const [show, handleShow] =useState('shop');
  const {getTotalQuantity} = useContext(ShopContext)

  return (
    <div className='navbar container'>
        <div className="logo">
            <Link to='/'><img src={logo} alt="" /></Link>
            <Link to='/'><p>SHOPPER</p></Link>
        </div>
        <nav>
            <Link to='/' onClick={()=>handleShow('shop')} className={show==='shop'?'active':''} >Shop</Link>
            <Link to='/men' onClick={()=>handleShow('men')} className={show==='men'?'active':''}>Men</Link>
            <Link to='/women' onClick={()=>handleShow('women')} className={show==='women'?'active':''}>Women</Link>
            <Link to='/kids' onClick={()=>handleShow('kids')} className={show==='kids'?'active':''}>Kids</Link>
           
        </nav>

        <div className="buttons">
            <Link to='/login'><button>Login</button></Link>
            <div className="cart_icon">
              <Link to='/cart'><img src={cart_icon} alt="" /></Link>
              <div className="counter">{getTotalQuantity()}</div>

            </div>
            
        </div>
      
    </div>
  )
}

export default Navbar
