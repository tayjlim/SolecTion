import './index.css'

function Reviews({itemId,reviews}){
    console.log('reviews component variable : reviews---', reviews)
    const reviewsArr = Object.values(reviews)
    console.log(reviewsArr)

    //When clicking on the image the a modal will open to view the image in full resolution!

    if (!reviewsArr[0]) return(null)

    else
    return(
        <div className ='mappingReviews'>
        {reviewsArr.map((review) => (
            <div id = {review.id}>

            <img className = 'onFeetPictureTag'src = {review.picture_aws_link}/>

            </div>
            ))}
        </div>
        )
}

export default Reviews;
