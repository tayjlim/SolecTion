import { useParams, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useModal } from "../../context/Modal";
import { editReviewThunk,getReviewsThunk } from "../../store/reviews";

function EditReview ({review}){

    //console.log('----------',review,'-----inside of edit?')
    const [picture_aws_link, setPicture_aws_link] = useState(undefined)
    const [desc, setDesc] = useState(review?.desc)
    const dispatch = useDispatch();
    const {closeModal} = useModal()


    const onSubmit = async (e) =>{
        e.preventDefault()

        const formData = new FormData()
        formData.append('desc', desc)

        if(picture_aws_link)
        formData.append('picture_aws_link',picture_aws_link)

        const res = await dispatch(editReviewThunk(review.id,formData))
        await dispatch(getReviewsThunk(review.itemId))
        closeModal();
    }

    return(
        <div >
            <form className = 'editReview'onSubmit={onSubmit}>
                <h2> Edit your post!</h2>
                <label>Description </label>

                <textarea className = 'description'
                value={desc}
                rows = '4'
                onChange = {(e)=>(setDesc(e.target.value))}
                />

                <input
                placeholder="insert a file here "
                type="file"
                accept='image/*'
                filename={picture_aws_link && picture_aws_link.name}
                onChange={(e) => setPicture_aws_link(e.target.files[0])}
                />

            <button className = 'allButton'>Submit</button>
            </form>
        </div>

    )



}

export default EditReview;
