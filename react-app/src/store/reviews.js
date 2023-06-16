const GET_ALL_REVIEWS ='reviews/getALLReviews'

const getReviews = (reviews) =>{

    return{
        type: GET_ALL_REVIEWS,
        payload:reviews
    }
}

export const getReviewsThunk = (itemId) => async(dispatch) =>{
    const response = await fetch(`/api/items/${itemId}/reviews`)
    const data = response.json()

    if(response.ok){
        
    }
}
