import { getAllItemsThunk } from "../../store/items.js";
import { useParams, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Reviews from '../Reviews'
import CreateReview from "../CreateReview/index.js";
import Loading from "../Loading/index.js";
import LoginFormModal from "../LoginFormModal/index.js";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem.js";
import { getReviewsThunk } from "../../store/reviews.js";
import DeleteItems from '../DeleteItems'
import EditItems from "../EditItems";
import { addToCart } from "../../store/session.js";
import './index.css'


function ItemsDetail(){


    const dispatch = useDispatch();
    const {itemId} = useParams();
    const [loaded, setLoaded] = useState(false)
    const [isAdded, setIsAdded] = useState(false);



    const singleItem = useSelector(state=> state.items)[itemId]
    console.log(singleItem)


    const user = useSelector((state) => state.session.user);
    // console.log(user.item_cart, singleItem)
    // console.log(user.item_cart.some(item => item.id === singleItem.id))
    let itemInCart =[];
    if(user){
    itemInCart = user.item_cart.some(item => item.id === singleItem.id);
    }


    const reviewsObj = useSelector((state) => state.reviews)
    // console.log(reviewsObj, 'reviews obj is this one --------')

    // console.log('TOTAL REVIEWS =========',reviewsObj)
    function getRandomNumber() {
        // Generate a random decimal number between 0 and 1
        const random = Math.random();
        // Round the decimal number to the nearest whole number (0 or 1)
        const randomNumber = Math.round(random);
        // Add 1 to the rounded number to get a result between 1 and 2
        const finalNumber = randomNumber + 1;
        return finalNumber;
        }

    const handleAddToCart = async (e) =>{
        // console.log(itemId)
        setIsAdded(true);
        e.preventDefault();
        await dispatch(addToCart(singleItem.id))
    }

    const clockFireBag ={
        1:{
            url:'https://stockx-assets.imgix.net/dynamic/LowInventoryBadgeV3.gif?auto=format,compress&w=150&h=150&gif-q=50',
            text: 'Only a Couple Left!'
        },
        2:{
            url:'https://stockx-assets.imgix.net/dynamic/PriceDropBadgeV3.gif?auto=format,compress&w=150&h=150&gif-q=50',
            text:'Now On Sale!'
        }

    }

    useEffect(async ()=>{

        if(loaded)setLoaded(false)

        setTimeout(async ()=>{
            await dispatch(getAllItemsThunk());
            await dispatch(getReviewsThunk(itemId))
            await setLoaded(true)
        },1000)

    },[dispatch,itemId])

    if (!loaded || !singleItem) return(<Loading></Loading>)

    else
    return(
        <div className="entireShoeDetail">
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


                {!user ? (
                    <button className="allButton">
                      <OpenModalMenuItem
                        className="onFeetButton"
                        itemText="Log in to purchase!"
                        modalComponent={<LoginFormModal />}
                      />
                    </button>
                  ) : (singleItem.owner_id == user.id) ?(
                    <button
                      className={`buyNowButton ${isAdded || itemInCart ? 'fade-out' : ''}`}
                      onClick={handleAddToCart}
                      disabled={isAdded || itemInCart}
                    >
                      {isAdded || itemInCart ? 'Added to Cart' : `Add to Cart $${singleItem.price}`}
                    </button>
                  ): <button className = 'buyNowButton itemInCart fade-out'
                        disabled={true}>
                    You own this item
                  </button>}


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
               ? <div className = 'deleteEditItemButtonDiv'>

                <button className = 'allButton'>
                    <OpenModalMenuItem
                    className="delete-button"
                    itemText="Delete this Item"
                    modalComponent={<DeleteItems item={singleItem} key={`${singleItem.id}-items`} />}
                    />
                </button>

                <button className = 'allButton'>
                    <OpenModalMenuItem
                    className="edit-button"
                    itemText="Edit this Item"
                    modalComponent={<EditItems item={singleItem} key={`${singleItem.id}-items`} />}
                    />
                </button>



                </div> : null}
           <div className = 'reviewsDivContainer'>



            <h2>On Feet Pictures</h2>

            {(!user) ?

                <button className = 'allButton'>

                    <OpenModalMenuItem
                    className ='onFeetButton'
                    itemText ='Log In to Post a Picture'
                    modalComponent={<LoginFormModal/>}
                    />

                </button>

                :(user.id != singleItem.owner_id) ?
                <button className = 'allButton'>
                    <OpenModalMenuItem
                    className ='onFeetButton'
                    itemText='Post a Picture'
                    modalComponent={<CreateReview item = {singleItem} />}
                    />
                </button>
                :
                null

            }


           <Reviews reviews={reviewsObj} user = {user}></Reviews>
           </div>

        </div>
        )
}


export default ItemsDetail;
