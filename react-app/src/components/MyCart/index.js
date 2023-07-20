import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { authenticate, deleteFromCart } from "../../store/session";
import CartTile from "../CartTile";
import Loading from '../Loading';
import './index.css'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function MyCart ({}){
    const history = useHistory()
    const dispatch = useDispatch();
    const [loaded,setloaded] = useState(false)
    const user = useSelector((state)=> state.session.user)

    let totalPrice = 0;
    if(user){
     totalPrice = user.item_cart.reduce((accumulator,item_cart)=>accumulator + item_cart.price,0)
    }
    const checkout =  async(e) =>{
      e.preventDefault();
      for(let item of user.item_cart){
        console.log(item)
        await dispatch(deleteFromCart(item.id))
        await dispatch(authenticate())
        // console.log('dispatch success ---- ')
      }
      await history.push('/thankyou')

    }

    // console.log(totalPrice)
    // console.log('can we store it here -----', user.item_cart)
    useEffect(async()=>{

      setTimeout(async ()=>{
          await setloaded(true)
      },1000)


  },[dispatch])

  if(!loaded) return (<Loading></Loading>)

if(!user) return (<h2>Please Log in to see cart!</h2>)

else
return (
  <div className="totalAndCartDiv">
    <div className="mapofCartItems">
      {user && user.item_cart.length > 0 ? (
        user.item_cart.map((item) => (
          <CartTile item={item} />
        ))
      ) : (
        <h2>NO ITEMS IN CART</h2>
      )}
    </div>
    {user ? (
      <div className="totalBox">
        <div className="boxRow">
          <h2>Total:</h2>
          <h2>${totalPrice}</h2>
        </div>

        <div id="shippingContainer" className="boxRow">
          <h2>Shipping:</h2>
          <h2>Free</h2>
        </div>

        <div className = 'subTotalCheckout'>
        <div className="boxRow">
          <h2>SubTotal:</h2>
          <h2>${totalPrice}</h2>
        </div>

        <button id="checkoutButton" className="allButton" onClick={checkout}>Checkout Now!</button>
        </div>
      </div>
    ) : <h2>Please Log in To See cart!</h2>}
  </div>
);
    }



export default MyCart;
