import React from 'react'
import './style.css'
import { useStateValue } from '../ContextApi/ContextApi';


function Product({id, title, image, price, rating}) {

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
    <div className="productCard">
      <div className="head">
      <p>{title}</p>
      <p className="productPrice">
        <small>$ </small>
        <strong>{price}</strong>
      </p>
      <div className="rating">
      {
        Array(rating)
        .fill()
        .map((ele)=><p>⭐</p>)
      }
      </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToCart} >Add to Cart</button>
    </div>
      
    </>
  )
}

export default Product
