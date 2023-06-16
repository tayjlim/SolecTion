
function Reviews({itemId,reviews}){
    console.log('reviews component variable : reviews---', reviews)
    const reviewsArr = Object.values(reviews)
    console.log(reviewsArr)

    if (!reviewsArr[0]) return(<h3>No Reviews for this listing!</h3>)

    else
    return(
        <div>
        <h3>Reviews Component</h3>

        {}
        </div>
        )
}

export default Reviews;
