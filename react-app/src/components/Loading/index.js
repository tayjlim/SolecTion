import { useState, CSSProperties } from "react";
import HashLoader from 'react-spinners/HashLoader';
import './index.css'

function Loading () {

    return(
    <div className = 'loadingDiv'>
    <HashLoader
    color="#006340"
    size={150}/>
    </div>)
}

export default Loading;
