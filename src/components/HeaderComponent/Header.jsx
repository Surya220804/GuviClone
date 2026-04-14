import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='header-container'>
            <ul className='header'>
                <li>For individuals</li>
                <li>For University</li>
                <li>For Government</li>
                <li>For Business</li>
            </ul>
        <div className="header-below">
            <div className="button">
            <div className='search-box-container'>
                            <div className="search-box">
                                 <input type="text" className="search-input" placeholder="search......"></input>
                            </div>   
                         </div>
                     <Link to='/home' style={{color:'black', textDecoration:"none"}}>Home</Link>    
                      <Link to='/login'style={{color:'black', textDecoration:"none"}}>Login</Link>
                    <Link to="/online"style={{color:'black', textDecoration:"none"}}>Online Degree</Link>
                    <Link to='/careers'style={{color:'black', textDecoration:"none"}}>Careers</Link>
            </div>
        </div>
        <hr></hr>
    </div>
  )
}

export default Header