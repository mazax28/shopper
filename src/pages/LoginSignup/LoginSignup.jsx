import React from 'react'
import './LoginSignup.css'
import { useState } from 'react'
function LoginSignup() {
  const [login, setLogin] = useState(true)
  return (
    <div className='login_signup'>

        {
          
          login ? (
            <div className='login_signup_content'>
              <h1>Login</h1>
              <input type="email" placeholder='Email' />
              <input type="password" placeholder='Password' />
              <button>Login</button>
              <p>Don't have an account? <span onClick={() => setLogin(false)}>Signup</span></p>
            </div>
          ) : (
            <div className='login_signup_content'>
              <h1>Signup</h1>
              <input type="text" placeholder='Name' />
              <input type="email" placeholder='Email' />
              <input type="password" placeholder='Password' />
              <button>Signup</button>
              <p>Already have an account? <span onClick={() => setLogin(true)}>Login</span></p>
            </div>
          )
        }
      </div>
  
  )
}

export default LoginSignup
