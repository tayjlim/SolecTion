import React, {useEffect,useState} from 'react'
import './index.css'
import OpenModalButton from '../OpenModalButton'
import DeleteReview from '../DeleteReview'
function ReviewPhotoModal({review,user}){

console.log(review)
console.log(user,'user inside of the modeal')
return(
    <div className = 'reviewPictureBlownup'>
    <h2>{review.desc}</h2>
    <img src = {review.picture_aws_link} className = 'imageInModalReview'></img>

    { (user && user.id ===review.userId) ?
        <div className = 'editandDeleteReviewRender?'>
            <button>Edit Review</button>

                <OpenModalButton
                buttonText = 'Delete Review'
                modalComponent={
                    <DeleteReview review = {review}/>
                }
                />

        </div>
        :
        null
        }

    </div>
)

}


export default ReviewPhotoModal;
