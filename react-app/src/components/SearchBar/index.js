import React, { useState, useEffect, useRef } from "react";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from '@mui/icons-material/Search';
import './index.css'
import { getAllItemsThunk } from "../../store/items";
function SearchBar(){
    const dispatch = useDispatch();
    const itemsObj = useSelector(state => state.items)
    const items = Object.values(itemsObj)
    // console.log('list of items',items)


    const [filtered, setFiltered]  = useState([])
    const [search, setSearch] = useState('')
    console.log('is ths filtered working correctly',filtered)

    const filterSearch = (event) =>{
        const searchWord = event.target.value;
        setSearch(searchWord)
        const filter = items.filter((item) => {
            // console.log('NAME OF ITEM', item.name)
            return item.name.toLowerCase().includes(search.toLowerCase()) || item.desc.toLowerCase().includes(search.toLowerCase())
        })
        // console.log('after the filter function',filter)

        if(searchWord === ''){
            setFiltered([])
        }else{
        setFiltered(filter)
        }
        const clearInput = () =>{
            setFiltered([])
            setSearch('')
        }
    }

    useEffect(async()=>{
        await dispatch(getAllItemsThunk())

    },[dispatch])
    return (
        <div className = 'search'>

            <div className="searchInputs">

            <img className = 'searchIcon'src = 'https://cdn.discordapp.com/attachments/1117931108747722862/1125180197411495946/searchicon-removebg-preview.png'></img>

            <input
            type='search'
            placeholder = 'Search for brand... color...etc'
            className = 'searchNav'
            onChange = {filterSearch}
            />
            </div>

            <div className="dataResult" >
            


            </div>
        </div>
    )
}

export default SearchBar;
