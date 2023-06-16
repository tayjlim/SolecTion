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

                <input
                type='textarea'
                />

                <input
                />


                <button>Submit</button>
                </form>
        </div>
    )

}

export default CreateReview;
