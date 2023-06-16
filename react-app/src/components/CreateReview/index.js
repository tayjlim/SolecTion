import React, {useEffect,useState} from 'react'


function CreateReview () {

    const [cover_picture, setcover_picture] = useState()
    const [desc, setdesc] = useState()
    const [price, setprice] = useState()


    return(
        <div className = 'createReviewModalDiv'>
            <h3>Post a Picture!</h3>
                <form>
                <label>How do they feel?</label>

                <button>Submit</button>
                </form>
        </div>
    )

}

export default CreateReview;
