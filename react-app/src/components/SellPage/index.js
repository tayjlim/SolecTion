import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './index.css'
function SellPage() {

    const [coverPicture, setCoverPicture] = useState(undefined)
    const [price, setPrice] = useState(0)

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

                <input
                placeholder="insert a file here "
                type="file"
                accept='image/*'
                filename={coverPicture && coverPicture.name}
                onChange={(e) => setCoverPicture(e.target.files[0])}
                />

                <label>Price</label>
                
                <input
                        placeholder=""
                        type="number"
                        min="1"
                        max="99"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />

                <button>submit</button>




        </form>
    </div>
    )
}

export default SellPage
