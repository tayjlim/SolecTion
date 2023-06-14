const GET_ALL_ITEMS = 'items/getAllItems'
const DELETE_ITEMS = 'items/deleteItems'
const POST_ITEMS = 'items/postItems'
const EDIT_ITEMS = 'items/editItems'

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
        case POST_ITEMS:{
            let newState = {...state}
            newState[action.payload.id] = action.payload
            return newState
        }

        default:
            return state
    }
}


export default itemsReducer
