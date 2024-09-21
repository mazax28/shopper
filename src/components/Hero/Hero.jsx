import React from 'react'
import './Hero.css'
import hand_icon from '../../assets/hand_icon.png'
import hero_image from '../../assets/hero_image.png'
function Hero() {
  return (
    <div className='hero'>
      <div className="hero_left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="hand_icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
          
            </div>

            <p>collections</p>
            <p>for everyone</p>
        </div>
        <button>Latest Collection</button>
      </div>

      <div className="hero_right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
