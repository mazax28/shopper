import React from 'react'
import './Offers.css'
import exclusive from '../../assets/exclusive_image.png'
function Offers() {
  return (
    <div className='offers'>
      <div className="offers_left">
        <h1>Exclusive</h1>
        <h1>Offers For you</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers_right">
        <img src={exclusive} alt="" />

      </div>
    </div>
  )
}

export default Offers
