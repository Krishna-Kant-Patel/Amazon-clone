import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../ContextApi/ContextApi';


function Navbar() {
  const[{cart,login,user, allProduct}, dispatch] = useStateValue();

  const signOut =()=>{
    dispatch({
      type:"Auth"
    })
  }
  const searchProduct = (e)=>{
    const filteredData = allProduct.filter((task) =>
    task.title.toLowerCase().includes(e.target.value.toLowerCase()));
    console.log(filteredData);
    if(filteredData.length>0){
      dispatch({
      type:"search",
      item: filteredData 
    })}
    else{
      dispatch({
        type:"search",
        item: null
      })
    }
  }
  
  return (
    <>
      <nav className='navbar' >
        <div className="logoContainer">
        <Link to='/' >
          <img src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-symbol-png-logo-vector-9.png" alt="" className="logo" />
        </Link>
        </div>
        <div className="searchContainer">
          <input type="text" placeholder='Search Product ' onChange={searchProduct} />
          <Link to="/search" className='searchButton' ><img className='searchLogo' src="https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-23.png" alt="" /></Link>
        </div>
        <div className="menu">
          <Link className='menuLink' to='/'> 
          <div className="subMenu" onClick={signOut}>
            <span className='line1' >{user.name}</span>
            <span className='line2' >SignOut</span>

          </div> 
          </Link>
          <Link className='menuLink'> <div className="subMenu">
          <span className='line1' >Return </span>
            <span className='line2'> & Order</span>

          </div> </Link>
          <Link className='menuLink'> <div className="subMenu">
          <span className='line1' >Your</span>
            <span className='line2'>Prime</span>

          </div> </Link>
          <Link className='menuLink' to="/cart"> <div className="Cart">
            <img className='cartIcon' src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-royal-brites-poster-foam-board-photo-paper-royal-lace-19.png" alt="" />

            <p className='cartCount'>{cart?.length}</p>

          </div> </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
