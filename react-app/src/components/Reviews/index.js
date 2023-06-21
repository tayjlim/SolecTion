import './index.css'
import ReviewPhotoModal from '../OpenReviewModal'
import OpenModalImage from '../OpenModalImage'


function Reviews({reviews, user}){
    // console.log('reviews component variable : reviews---', reviews)
    const reviewsArr = Object.values(reviews)
    // console.log(reviewsArr)

    //When clicking on the image the a modal will open to view the image in full resolution!

    if (!reviewsArr[0]) return(null)

    else
    return(
        <div className ='mappingReviews'>

        {reviewsArr.map((review) => (

            <div id = {`review${review.id}`} className = 'singleMappedReview'>


                <OpenModalImage
                review = {review}
                className = 'onFeetPictureTag'
                modalComponent={<ReviewPhotoModal user = {user} review = {review}/>}
                />


            </div>
            ))}

        </div>
        )
}

export default Reviews;
