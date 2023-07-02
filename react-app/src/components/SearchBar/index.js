import React, { useState, useEffect, useRef } from "react";
import { NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";
import SearchIcon from '@mui/icons-material/Search';
import './index.css'
function SearchBar({}){

    return (
        <div className = 'search'>

            <div className="searchInputs">

            <img className = 'searchIcon'src = 'https://cdn.discordapp.com/attachments/1117931108747722862/1125180197411495946/searchicon-removebg-preview.png'></img>

            <input
            type='search'
            placeholder = 'Search for brand... color...etc'
            className = 'searchNav'
            onClick={(e)=>(alert('Feature Coming Soon!'))}
            />
            </div>

            <div className="='dataResult">

            </div>
        </div>
    )
}

export default SearchBar;
