import React, { useState, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getAllItemsThunk } from '../../store/items';
import ItemTile from './ItemTile.js'

import './index.css'

function HomePage(){

    const dispatch = useDispatch()

    const items = useSelector((state)=> state.items)

    const itemsArr = Object.values(items)
    console.log(itemsArr)

    useEffect(()=>{
        dispatch(getAllItemsThunk())
    },[dispatch])

    return(
        <div>
            <h2>Recommended For You</h2>
                <div className = 'itemsMapOfShoesContainer'>
            {
                    itemsArr.map(item=>(
                        <ItemTile key = {item.id} item = {item}></ItemTile>
                    ))
            }
            </div>
        </div>
    )

}

export default HomePage;
