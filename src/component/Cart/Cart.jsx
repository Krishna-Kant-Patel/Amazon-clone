import React from 'react';
import './style.css';
import { useStateValue } from '../ContextApi/ContextApi';
import SubTotal from './SubTotal';

function Cart() {
    const [{ cart }, dispatch] = useStateValue();

const removeItem =(id)=>{
    dispatch({
        type:'Remove',
        item:id
    })
    console.log(cart);
}

    return (
        <>
            <div className="ProductBox">
                <div className="cartItems">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="Add" />
            {cart?.length === 0 ? (
                <div>
                    <h1>Your Cart is empty</h1>
                </div>
            ) : (
                <div className="cartContainer">
                    {
                        cart.map((ele) => {
                            return <>
                                <div className="subContainer">
                                <img src={ele.image} alt="" className="cardImage" />
                                <div className="info">
                                    <p className='title'>{ele.title}</p>
                                    <p>
                                        <small>$ </small>
                                        <strong>{ele.price}</strong>
                                    </p>
                                    <div className="rating">
                                        {
                                            Array(ele.rating)
                                                .fill()
                                                .map((ele) => <p>⭐</p>)
                                        }
                                    </div>
                                    <button onClick={(()=> removeItem(ele.id) )}>Remove from cart</button>
                                </div>
                                </div>
                            </>
                        })
                    }

                </div>
            )
            }
            </div>
                {cart.length>0 &&
                <SubTotal/>
                }
            </div>
            
        </>
    )
}

export default Cart
