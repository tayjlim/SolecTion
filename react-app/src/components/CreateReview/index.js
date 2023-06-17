import React, {useEffect,useState} from 'react'
import './index.css'

function CreateReview () {

    const [cover_picture, setcover_picture] = useState()
    const [desc, setdesc] = useState()
    const [price, setprice] = useState()


    return(
        <div className = 'createReviewModalDiv'>
            <h3>Post a Picture!</h3>
                <form className = 'createReviewForm'>

                <label>thoughts on review?

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
                filename={cover_picture&&cover_picture.name}
                onChange={(e)=>setcover_picture(e.target.files[0])}
                />


                <button>Submit</button>
                </form>
        </div>
    )

}

export default CreateReview;
