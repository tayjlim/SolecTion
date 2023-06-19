
import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom"

import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";

import { deleteReviewThunk,getReviewsThunk } from "../../store/reviews";

function DeleteReview ({review}) {
    const dispatch=useDispatch();
    const {closeModal} = useModal();
    const history = useHistory();

    const handleClick = (e) =>{
        e.preventDefault()

    }

return(
    <div className='delete-modal-container'>

    <div>
      <div className="random-text">Are you sure you want to remove this Item?</div>
      </div>
      <div className="delete-two-buttons">
        <button className='buttons-in-modal' onClick={(e) => handleClick(e)}>Yes (Delete Item)</button>
        <button className='buttons-in-modal' onClick={(e) => closeModal()}>No (Keep Item)</button>
      </div>
    </div>
 )
}

export default  DeleteReview;
