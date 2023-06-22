import React, {useEffect,useState} from 'react'
import './index.css'
import OpenModalButton from '../OpenModalButton'
import DeleteReview from '../DeleteReview'
import EditReview from '../EditReview'
function ReviewPhotoModal({review,user}){

// console.log(review)
// <h2>
// //    {review.desc}
//    </h2>
// console.log(user,'user inside of the modeal')
return(

    <div className = 'reviewPictureBlownup'>

    <img src = {review.picture_aws_link} className = 'imageInModalReview'></img>

    { (user && user.id ===review.userId) ?
        <div className = 'editandDeleteReviewRender'>
                <OpenModalButton
                buttonText = 'Edit Post'
                modalComponent={
                    <EditReview review= {review}/>
                }
                />

                <OpenModalButton
                buttonText = 'Delete Post'
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
