/* eslint-disable no-unused-vars */
import React from "react";
import CurrencyFormat from 'react-currency-format'
import { useNavigate } from "react-router-dom";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import './subtotal.css'
function Subtotal(){
    const navigate = useNavigate()
    const [{basket},dispatch] = useStateValue()
        return(
           <div className="subtotal">
               <CurrencyFormat
                renderText={(value)=>(
                <>
                    <p>
                        subtotal ({basket?.length} items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type='checkbox' /> this order
                        contains a gift
                    </small>
                </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
               />
               <button onClick={e => navigate('/payment')}>proceed to checkout</button>
           </div>
        )
}

export default Subtotal