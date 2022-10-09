import React from 'react'
import './style/Nav.css'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div>
       <nav>
           <h1 className='logo'>WebSite_Name</h1>
            <ul className='navList'>
              <Link to={'/'}><li>Home</li></Link>
              <Link to={'/about'} ><li>About</li></Link>
              <Link to={'/contact'} ><li>Contact</li></Link>
            </ul>
       </nav>
    </div>
  )
}

export default Nav