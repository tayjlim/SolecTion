const GET_ALL_ITEMS = 'items/getAllItems'
const DELETE_ITEMS = 'items/deleteItems'
const POST_ITEMS = 'items/postItems'
const EDIT_ITEMS = 'items/editItems'

const editItems = (items) =>{
    return{
        type: EDIT_ITEMS,
        body:items
    }
}
export const editItemsThunk =(itemsId, items) => async (dispatch) =>{
    // console.log(items,'--------------inside thunk-------')
    const res = await fetch (`/api/items/${itemsId}/edit`,{
        method:'PUT',
        body: items
    })
    const data = await res.json()
    if(res.ok){
        dispatch(editItems(data))
        return data
    }
}

const postItems = (items) =>{
    return{
        type: POST_ITEMS,
        payload: items
    }
}
export const postItemsThunk =(items) => async(dispatch) =>{
    const response = await fetch('/api/items/new',{
        method:'POST',
        body: items
    })
    const data = await response.json()
    if(response.ok){
        dispatch(postItems(data))
        return data
    }
}

const deleteItems = (itemsId) => {
    return{
        type: DELETE_ITEMS,
        itemsId
    }
}
export const deleteItemsThunk = (itemsId)=> async (dispatch) =>{
    // console.log('inside thunk - -----------------------------')
    const response = await fetch(`/api/items/${itemsId}`,{
        method:'DELETE'
    })
    if(response.ok){
        dispatch(deleteItems(itemsId))
    }else{
        return false
    }
}


const getAllItems = (items) =>{
    return{
        type:GET_ALL_ITEMS,
        payload:items
    }
}
export const getAllItemsThunk =() => async (dispatch) =>{
    const response = await fetch('/api/items')
    const data = await response.json()

    if(response.ok){
        const items = {}
        data.items.forEach((item)=>{
            items[item.id] = item
        })

        dispatch(getAllItems(items))
        return items
    }

    return {error: 'Error'}
}

const initialState = {}
const itemsReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_ALL_ITEMS:{
            let newState = { ...state }
            newState = { ...action.payload }
            return newState
        }
        case DELETE_ITEMS: {
            let newState = { ...state }
            delete newState[action.animeId]
            return newState
        }
        case POST_ITEMS:{
            let newState = {...state}
            newState[action.payload.id] = action.payload
            return newState
        }

        // case EDIT_ITEMS: {
        //     let newState = { ...state }
        //     newState[action.payload.id] = action.payload
        //     return newState
        // }

        default:
            return state
    }
}


export default itemsReducer
