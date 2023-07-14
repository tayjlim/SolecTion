import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import CartTile from "../CartTile";
import './index.css'
function MyCart ({}){

    const dispatch = useDispatch();

    const user = useSelector((state)=> state.session.user)

    console.log('can we store it here -----', user.item_cart)
if(!user) return null

else


return(
    <div className='mapofCartItems'>
    {user.item_cart.length > 0 ? (
      user.item_cart.map((item) => (

        <CartTile item = {item}/>

      ))
    ) : (
      <h2>NO ITEMS IN CART</h2>
    )}
  </div>)
}

export default MyCart;
