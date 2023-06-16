import { getAllItemsThunk } from "../../store/items.js";
import { useParams, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Reviews from '../Reviews'
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem.js";
import { getReviewsThunk } from "../../store/reviews.js";

import DeleteItems from '../DeleteItems'
import EditItems from "../EditItems";


import './index.css'


function ItemsDetail(){


    const dispatch = useDispatch();
    const {itemId} = useParams();

    const singleItem = useSelector(state=> state.items)[itemId]
    // console.log(singleItem)

    const user = useSelector((state) => state.session.user);
    // console.log(user)

    const reviewsObj = useSelector((state) => state.reviews)

    // console.log('TOTAL REVIEWS =========',reviewsObj)


    useEffect(()=>{
    dispatch(getAllItemsThunk());
    dispatch(getReviewsThunk(itemId))

    },[dispatch])

    if (!singleItem) return(<h3>Loading....</h3>)

    else
    return(
        <div>
            <div className = 'headerShoePriceButton'>

            <div className = 'columnLeft'>
            <h2>
            {singleItem.name}
            </h2>
            <img className = 'shoepic' src = {singleItem.picture_aws_link}></img>
            </div>

            <div className = 'columnRight'>
                <div className ='clockDivandText'>
                    <img className ='miniClock'src ='https://stockx-assets.imgix.net/dynamic/LowInventoryBadgeV3.gif?auto=format,compress&w=150&h=150&gif-q=50'/>
                    <p>Only a Couple Left!</p>
                </div>

            <button className = 'buyNowButton'>Add to Cart ${singleItem.price}</button>

            <div className = 'verifyCondition'>
                <div className='stickerandheading'>
                <img className = 'iconthing' src = 'https://cdn.discordapp.com/attachments/1117931108747722862/1119069429632880660/Screenshot_2023-06-15_at_5.57.13_PM.png'/>

                <h3 className ='stockXVerified'>
                StockX Verified
                </h3>
                </div>

                <p>
                Condition: New
                </p>

            </div>

            <p className ='stockXVerifiedpTag'>StockX Verified is our own designation and means that we inspect every item, every time.</p>

            <div className = 'verifyCondition'>
                <div className='stickerandheading'>
                <img className = 'iconthing' src = 'https://cdn.discordapp.com/attachments/1117931108747722862/1119069429909696582/Screenshot_2023-06-15_at_6.01.43_PM.png'/>
                <h3>
                Our Promise
                </h3>
                </div>


            </div>
            <p>We strive to earn and keep your trust. If we make a mistake, we'll make it right.</p>
            </div>

            </div>

            <div className  ='productDetails'>
                <h2>Product Details</h2>

                    <div className = 'priceDivDetails'>
                    <p>Retail Price: </p>
                    <p> $ 100 </p>
                    </div>
                <div className = 'productDescriptionDiv'>
                    <h3>
                    Product Description
                    </h3>
                    <p>{singleItem.desc}</p>

                </div>
            </div>


            {(user && (user.id === singleItem.owner_id))
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
           <div className = 'reviewsDivContainer'>
           <h2>
           On Feet Pictures
           </h2>
           <Reviews itemId = {itemId} reviews={reviewsObj}></Reviews>
           </div>

        </div>
        )
}


export default ItemsDetail;
