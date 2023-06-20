import React, { useState, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getAllItemsThunk } from '../../store/items';
import ItemTile from './ItemTile.js'
import Loading from '../Loading';
import {randomKeys} from '../helperfunctions'
import './index.css'

function HomePage(){

    function randomKeys(obj){
        const keys = Object.keys(obj)
        const randomKeys = []
        const remainder = [];

                while (randomKeys.length<5) {
                const randomIndex = Math.floor(Math.random() * keys.length);
                const randomObj= obj[randomIndex];
                    console.log(randomObj)
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
    return(
        <div className = 'homePageEntireDiv'>

        <img className = 'homePageLinkThang' src ='https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt2461bd2e4c3de3c4/6489bcb5cc30bb66ecb05a96/Mystery_ReStockX2Primary_Desktop-EN.jpg?quality=80&auto=webp&format=pjpg&dpr=1&trim=0,0,80,0&width=1246'/>
        <h2 className = 'reccomended'>Recommended For You</h2>
                <div className = 'itemsMapOfShoesContainer'>

                        {randomKeys(items).map(item=>(
                            <ItemTile key = {item.id} item = {item}></ItemTile>
                        ))
                }
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
