
import { useParams, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllItemsThunk } from '../../store/items';

function ItemsDetail(){
    const dispatch = useDispatch();
    const {itemId} = useParams();
    const singleItem = useSelector(state=> state.items)[itemId]
    

    // useEffect(() => {
    //     dispatch(getAllItemsThunk());

    // },[dispatch])
    if (!singleItem) return null

    else
    return(
        <div>this is a detail page

            <h2>
            {singleItem.name}
            </h2>
            <img src = ''></img>

        </div>
        )
}


export default ItemsDetail;
