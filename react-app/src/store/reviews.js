const GET_ALL_REVIEWS ='reviews/getALLReviews'
const POST_REVIEW = 'reviews/postReview'
const DELETE_REVIEW = 'reviews/deleteReview'
const EDIT_REVIEW = 'items/editReview'

const editReview = (review) =>{
    return {
        type: EDIT_REVIEW,
        body:review
    }
}

export const editReviewThunk = (reviewId, review) => async (dispatch) =>{
    const res = await fetch('/api/items/')
    return
}
const getReviews = (reviews) =>{

    return{
        type: GET_ALL_REVIEWS,
        payload:reviews
    }
}

export const getReviewsThunk = (itemId) => async(dispatch) =>{
    const response = await fetch(`/api/items/${itemId}/reviews`)
    const data = await response.json()

    if(response.ok){
        const itemReviews = {}
        data.reviews.forEach((review)=>{
            itemReviews[review.id] = review
        })
        dispatch(getReviews(itemReviews))
        // console.log('--------- item reviews',itemReviews)
        return itemReviews
    }
}

const postReview = (review) =>{
    return {
        type:POST_REVIEW,
        payload:review
    }
}

export const postReviewsThunk = (review,itemId) => async (dispatch) =>{
    const response = await fetch (`/api/items/${itemId}/reviews/new`,{
        method:'POST',
        body:review
    })
    const data = await response.json()

    if(response.ok){
        dispatch(postReview(data))
        return data
    }

    return null
}

const deleteReview = (reviewId) => {
    return {
        type: DELETE_REVIEW,
        reviewId
    }
}

export const deleteReviewThunk = reviewId => async (dispatch) =>{
   const response = await fetch (`/api/items/reviews/${reviewId}/deleteThat`,{
    method:'delete'

    })
    if (response.ok){
        dispatch(deleteReview(reviewId))
    } else{
        return false;
    }
}



const initialState ={}

const itemsReviewReducer = (state = initialState, action) =>{
    switch(action.type){

        case GET_ALL_REVIEWS:{
            let newState = {}
            newState = {...action.payload}
            return newState
        }

        case POST_REVIEW:{
            let newState = {...state}
            newState[action.payload.id] = action.payload
            return newState
        }

        default:
            return state
    }
}

export default itemsReviewReducer
