import React, { useState, useEffect } from "react";


import { useHistory } from "react-router-dom"


import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import {deleteItemsThunk,getAllItemsThunk} from "../../store/items";

const DeleteItems =  ({item}) => {

    const dispatch=useDispatch();
    const {closeModal} = useModal();
    const history = useHistory();
    // console.log(item.id)

    const handleClick = async(e) =>{
        e.preventDefault();
        // console.log(item.id)
        await dispatch(deleteItemsThunk(item.id))
        await dispatch(getAllItemsThunk())
        await history.push('/home')
        await closeModal()
    }

    if(!item) return null

    else{
 return(
    <div className='delete-modal-container'>
      <div>
      <div className="random-text">Are you sure you want to remove this Item?</div>
      </div>
      <div className="delete-two-buttons">
        <button className = 'allButton' id='buttons-in-modal' onClick={(e) => handleClick(e)}>Yes (Delete Item)</button>
        <button  className = 'allButton' id='buttons-in-modal' onClick={(e) => closeModal()}>No (Keep Item)</button>
      </div>
    </div>
 )
    }
}


export default DeleteItems;
