import React, { useState } from 'react'
import './Login.css'
import  'boxicons/css/boxicons.min.css'
function Login() {
const [isactive,setIsactive]=useState(false)
  return (
    <div className="login-total-container2">
    <div className="login-total-container">
    <div className={`container ${isactive?"active":""}`}>
       <div className="form-box">
        <form >
          <h1>{isactive?"SignUp":"Login"}</h1>
          {isactive &&(
            <>
            <div className="input-box">
                <input type='text' placeholder='Username'/>
                <i className='bx bxs-user'></i>
                </div>
                 <div className="input-box">
                    <input type="email" placeholder='Email' />
                <i className='bx bxs-envelope'></i>
                 </div>
                   <div className="input-box">
                      <input type='Password' placeholder='Password'/>
                <i className='bx bxs-lock-alt'></i>
                 </div>
            </>
          )}
          {!isactive&&(
            <>
            <div className="input-box">
                <input type='text' placeholder='Username'/>
                <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
                <input type='Password' placeholder='Password'/>
                <i className='bx bxs-lock-alt'></i>
            </div>
            <div className="forgot-link">
                <a href="#">Forgot Password?</a>
            </div>

          </>)}
          <button className='login-btn'>{isactive?"Register":"Login"}</button>
        </form>
       </div>
             <div className="toggle-boxes">
               <div className="toggle-box">
                <h1>{isactive?"Hello Welcome!":"Welcome Back!"}</h1>
                <p>{isactive?"Already have an account?":"Don't have an account?"}</p>
                <button className='login-btn' onClick={()=>setIsactive(!isactive)}>{isactive?"Login":"Register"}</button>
               </div>
             </div>
    </div>
    </div>
    </div>
  )
}
export default Login;