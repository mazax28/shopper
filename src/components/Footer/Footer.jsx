import React from 'react'
import './Footer.css'
import logo from '../../assets/logo_big.png'
import {Link} from 'react-router-dom'
import whatsapp from '../../assets/whatsapp_icon.png'
import pinterest from '../../assets/pintester_icon.png'
import instagram from '../../assets/instagram_icon.png'
function Footer() {
  return (
    <div className='footer'>
      <div className="footer_content">

        <div className="left">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <div className="center">

            <Link>Company</Link>
            <Link>Products</Link>
            <Link>Offices</Link>
            <Link>About</Link>
            <Link>Contact</Link>
        </div>
        

          
        <div className="right">
            <img src={instagram} alt="" />
            <img src={pinterest} alt="" />
            <img src={whatsapp} alt="" />

        </div>
      </div>
      <hr />
      <div className="footer_bottom">
        <p>© 2024 Shopper. All rights</p>
      </div>
    </div>
  )
}

export default Footer