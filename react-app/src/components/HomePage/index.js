import React, { useState, useEffect} from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllItemsThunk } from '../../store/items';
import ItemTile from './ItemTile.js'
import Loading from '../Loading';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './index.css'



function HomePage(){

    function randomKeys(obj){
        const keys = Object.keys(obj)
        const randomKeys = []
                while (randomKeys.length<5) {
                const randomIndex = Math.floor(Math.random() * keys.length);
                const randomObj= obj[randomIndex];
                    if (!randomKeys.includes(randomObj) && randomObj){
                    randomKeys.push(randomObj);
                    }
                }
                return (randomKeys);
    }

    const dispatch = useDispatch()
    const [loaded,setloaded] = useState(false)
    const items = useSelector((state)=> state.items)

    // console.log('calling the randomKeysfunction------',randomKeys(items))


    const itemsArr = Object.values(items)
    console.log(itemsArr)

    useEffect(async()=>{
        await dispatch(getAllItemsThunk())
        await setloaded(true)

    },[dispatch])

    if(!loaded) return (<Loading></Loading>)

    else
    return(
        <div className = 'homePageEntireDiv'>

        <div className = 'carouselDiv-not-package'>


            <a className = 'aTagStockXLink'href= 'https://stockx.com/'>
            </a>
            <Carousel infiniteLoop={true} showArrows={false} showThumbs={false} showStatus={false} autoPlay={true} interval={1700}>
            <img className = 'homePageLinkThang' src ='https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt2461bd2e4c3de3c4/6489bcb5cc30bb66ecb05a96/Mystery_ReStockX2Primary_Desktop-EN.jpg?quality=80&auto=webp&format=pjpg&dpr=1&trim=0,0,80,0&width=1246'/>
            <img className = 'homePageLinkThang' src ='https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt6e43389cbe22a4cf/649310c7359ef016e760f3ec/GoSkateDay_Primary_Desktop.jpg?quality=80&auto=webp&format=pjpg&dpr=1&trim=0,0,80,0&width=1246'></img>
            <img className = 'homePageLinkThang' src = 'https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt0f92b134530e3b58/6492aa5983c7fb7da05f5978/Banner_Template_(1)Primary_Desktop.jpg?quality=80&auto=webp&format=pjpg&dpr=1&trim=0,0,80,0&width=1246'></img>
            <img className = 'homePageLinkThang' src = 'https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt4ef57789f3159fd1/64905e51d40ad01e99681e77/FOGEssentials_TheBlackCollection_Primary_Desktop.jpg?quality=80&auto=webp&format=pjpg&dpr=1&trim=0,0,80,0&width=1246'></img>
            <img className = 'simpsons' src= 'https://cdn.discordapp.com/attachments/1118210959077556414/1121489244041519245/newonept1.jpeg'></img>
            </Carousel>


        </div>

        <h2 className = 'reccomended'>Recommended For You</h2>
                <div className = 'itemsMapOfShoesContainer'>
                        {randomKeys(items).map(item=>(
                            <ItemTile key = {item.id} item = {item}></ItemTile>
                        ))}
                        
                </div>

                <h2 className = 'reccomended'>All Shoes</h2>

                <div className='itemsMapOfShoesContainer'>
                {itemsArr.map(item=>(
                    <ItemTile key = {item.id} item = {item}></ItemTile>
                ))}
                </div>
        </div>
    )

}

export default HomePage;
