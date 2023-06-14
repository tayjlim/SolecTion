
import { useParams, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllItemsThunk } from '../../store/items';
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem.js";
import DeleteItems from '../DeleteItems'


function ItemsDetail(){

    const dispatch = useDispatch();
    const {itemId} = useParams();
    const singleItem = useSelector(state=> state.items)[itemId]
    console.log(singleItem)
    const user = useSelector((state) => state.session.user);
    console.log(user)


    useEffect(()=>{

    })
    if (!singleItem) return null

    else
    return(
        <div>this is a detail page

            <h2>
            {singleItem.name}
            </h2>
            <img src = ''></img>

            {(user.id === singleItem.owner_id)?
                <div>
                <OpenModalMenuItem
                className="delete-button"
                itemText="Delete this episode"
                modalComponent={<DeleteItems item={singleItem} key={`${singleItem.id}-items`} />}
                />



                </div> : null}



        </div>
        )
}


export default ItemsDetail;
