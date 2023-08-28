import React from 'react';
import './style.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../ContextApi/ContextApi';
import { getCartTotal } from '../Reducer/Reducer';
function SubTotal() {
    const [{cart}, dispatch] = useStateValue()
    return (
        <>
            <div className="subTotal">
                
                <CurrencyFormat 
                renderText={(value)=>{
                    return <>
                    <p>
                        SubTotal ({cart.length} item): <strong>{`${value}`}</strong>
                    </p>
                    <small className='subGift'>
                        <input type="checkbox" name="gift" id="" />This order contain a gift.
                    </small>
                    </>
                }}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={'text'}
                thousandSeparator={true}
                prefix='$' />
                <button>Proceed to Order</button>
            </div>
        </>
    )
}

export default SubTotal
