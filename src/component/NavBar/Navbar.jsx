import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <>
      <nav className='navbar' >
        <Link to='/'>
        <img src="https://www.pngmart.com/files/Amazon-Logo-PNG-Photo.png" alt="" className="logo" />
        </Link>
        <div className="searchContainer">
        <input type="text" placeholder='Search Product ' />
        <button className='searchButton'><img className='searchLogo' src="https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-23.png" alt="" /></button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
