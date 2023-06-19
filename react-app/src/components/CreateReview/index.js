import React, {useEffect,useState} from 'react'

import { postReviewsThunk } from '../../store/reviews';
import { getReviewsThunk } from "../../store/reviews.js";

import './index.css'
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";

function CreateReview ({item}) {
    const dispatch = useDispatch()
    const history = useHistory()
    const {closeModal} = useModal()

    const [picture_aws_link, setpicture_aws_link] = useState()
    const [desc, setdesc] = useState()

    console.log('did the Item pass through ?!--------',item)

    const handleClick = async (e) =>{

        e.preventDefault();
        const formData = new FormData()
        formData.append('desc', desc)
        formData.append('picture_aws_link',picture_aws_link)
        const res = await dispatch(postReviewsThunk(formData,item.id))
        await dispatch(getReviewsThunk(item.id))
    }

    return(
        <div className = 'createReviewModalDiv'>
            <h3>Post a Picture!</h3>
                <form className = 'createReviewForm' onSubmit={handleClick}>

                <label>thoughts on shoe?

                </label>

                <textarea
                className = 'description'
                value={desc}
                onChange = {(e)=>(setdesc(e.target.value))}
                />

                <input
                className='fileinput'
                type = 'file'
                accept='image/*'
                filename={picture_aws_link&&picture_aws_link.name}
                onChange={(e)=>setpicture_aws_link(e.target.files[0])}
                />


                <button>Submit</button>
                </form>
        </div>
    )

}

export default CreateReview;
