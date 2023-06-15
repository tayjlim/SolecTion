import { getAllItemsThunk } from "../../store/items.js";
import { useParams, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem.js";
import DeleteItems from '../DeleteItems'
import EditItems from "../EditItems";
import './index.css'


function ItemsDetail(){

    const dispatch = useDispatch();
    const {itemId} = useParams();
    const singleItem = useSelector(state=> state.items)[itemId]
    console.log(singleItem)
    const user = useSelector((state) => state.session.user);
    console.log(user)


    useEffect(()=>{
    dispatch(getAllItemsThunk());

    },[dispatch])

    if (!singleItem) return null

    else
    return(
        <div>this is a detail page
            <div className = 'headerShoePriceButton'>

            <div className = 'columnLeft'>
            <h2>
            {singleItem.name}
            </h2>
            <img src = {singleItem.picture_aws_link}></img>
            </div>

            <div className = 'columnRight'>
            
            <div className ='clockDivandText'>
                <img className ='miniClock'src ='https://stockx-assets.imgix.net/dynamic/LowInventoryBadgeV3.gif?auto=format,compress&w=150&h=150&gif-q=50'/>
                <p>Only a Couple Left!</p>
            </div>
            <button className = 'buyNowButton'>Buy Now for {singleItem.price}</button>
            </div>
            </div>


            {(user.id === singleItem.owner_id)
               ? <div>

                <button>
                    <OpenModalMenuItem
                    className="delete-button"
                    itemText="Delete this Item"
                    modalComponent={<DeleteItems item={singleItem} key={`${singleItem.id}-items`} />}
                    />
                </button>

                <button>
                    <OpenModalMenuItem
                    className="edit-button"
                    itemText="Edit this Item"
                    modalComponent={<EditItems item={singleItem} key={`${singleItem.id}-items`} />}
                    />
                </button>



                </div> : null}



        </div>
        )
}


export default ItemsDetail;
