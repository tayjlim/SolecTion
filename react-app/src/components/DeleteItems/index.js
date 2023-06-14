import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
// import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import {deleteItemsThunk,getAllItemsThunk} from "../../store/items";

const DeleteItems =  ({item}) => {

    const dispatch=useDispatch();
    const {closeModal} = useModal();
    const history = useHistory();

    const handleClick = async(e) =>{
        e.preventDefault();
        await dispatch(deleteItemsThunk(item.id))
        await dispatch(getAllItemsThunk())
        closeModal()
        history.push('/home')
    }

 return(
    <div className='delete-modal-container'>
      <div>
      <h1>Confirm Delete</h1>
      <div className="random-text">Are you sure you want to remove this Item?</div>
      </div>
      <div className="delete-two-buttons">
        <button className='buttons-in-modal' onClick={(e) => handleClick(e)}>Yes (Delete Anime)</button>
        <button className='buttons-in-modal' onClick={(e) => closeModal()}>No (Keep Anime)</button>
      </div>
    </div>
 )
}


export default DeleteItems;
