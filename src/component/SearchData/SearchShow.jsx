import React from 'react'
import './style.css'
import { useStateValue } from '../ContextApi/ContextApi';


function SearchShow({id, title, image, price, rating}) {

 const [{cart}, dispatch] = useStateValue();

 const addToCart = () => {
  dispatch({
    type:"ADD",
    item: {
      id: id,
    title: title,
    image:image,
    price: price,
    rating: rating
    }
  })
 }

  return (
    <>
    <div className="Card">
      
      <img src={image} alt="" />
      <div className="heads">
      <p>{title}</p>
      <p className="Price">
        <small>$ </small>
        <strong>{price}</strong>
      </p>
      <div className="ratings">
      {
        Array(rating)
        .fill()
        .map((ele)=><p>⭐</p>)
      }
      </div>
      <button onClick={addToCart} className='btn' >Add to Cart</button>
      </div>
      
    </div>
      
    </>
  )
}

export default SearchShow
