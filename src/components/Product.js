/* eslint-disable no-unused-vars */
import React from "react";
import './Product.css';
import {useStateValue} from '../StateProvider';
function Home(props){
// send data to layerData to use it after that in any component
    const [{basket}, dispatch] = useStateValue(); // static code for member
    const addToBasket = ()=>{
        dispatch({ // dispatch send action to reducer
            type:'ADD_TO_BASKET', // same type of reducer to implement the reducer
            item: {id:props.id,  
              title:props.title,
              image:props.image,
              price:props.price,
              rating:props.rating,
            }
        })
        }
        return(
            <div className="product">
                <div className="product_info">
                    <p>{props.title}</p>
                    <p className="product_price">
                        <small>$</small>
                        <strong>{props.price}</strong>
                    </p>
                    <div className="product_rating">
                        {Array(props.rating).fill().map((_,i)=>(
                        <p>{'\u2B50'}</p>
                        ))}
                    </div>
                </div>

                <img src={props.image} alt="product"></img>
                {/*implement addToBasket when click on Add to Basket*/}
                <button className="product_button" onClick={addToBasket}>Add to Basket</button>
            </div>
        )
}

export default Home