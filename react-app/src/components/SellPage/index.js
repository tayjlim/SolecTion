import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './index.css'
function SellPage() {
 function handleSubmit() {

    }
return(
    <div className = 'createItemFormContainer'>
        <form className = 'createItemFormContainer' onSubmit={handleSubmit}>
                <label>Item</label>
                <input></input>

                <label>description</label>
                <input></input>

                <label>Picture</label>
                <input></input>

                <label>Price</label>
                <input></input>

                <button>submit</button>




        </form>
    </div>
    )
}

export default SellPage
