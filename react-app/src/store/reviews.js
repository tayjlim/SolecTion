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
        const itemReviews = {}
        data.reviews.forEach((review)=>{
            itemReviews[review.id] = review
        })
        dispatch(getReviews(itemReviews))
        return itemReviews
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

        default:
            return state
    }
}

export default itemsReviewReducer
