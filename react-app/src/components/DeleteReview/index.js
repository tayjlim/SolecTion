
import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom"

import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";

import { deleteReviewThunk,getReviewsThunk } from "../../store/reviews";

function DeleteReview ({review}) {
    const dispatch=useDispatch();
    const {closeModal} = useModal();

    // console.log(review)
    const handleClick = async (e) =>{
        e.preventDefault()

        const res = await dispatch(deleteReviewThunk(review.id))
        await dispatch(getReviewsThunk(review.itemId))
        closeModal()

    }

return(
    <div className='delete-modal-container'>

    <div>
      <div className="random-text">Are you sure you want to remove this Item?</div>
      </div>
      <div className="delete-two-buttons">
        <button className='buttons-in-modal' onClick={(e) => handleClick(e)}>Yes </button>
        <button className='buttons-in-modal' onClick={(e) => closeModal()}>No</button>
      </div>
    </div>
 )
}

export default  DeleteReview;
