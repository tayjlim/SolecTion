import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './index.css'
function SellPage() {

    const [coverPicture, setCoverPicture] = useState(undefined)
    const [name,setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(1)

 function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData()

    formData.append('')
    formData.append('')
    formData.append('')
    }


return(
    <div className = 'createItemFormContainer'>
        <form className = 'createItemFormContainer' onSubmit={handleSubmit}>
                <label>Item</label>
                <input
                placeholder = 'name'
                type = 'text'
                value = {name}
                onChange = {(e) => setName(e.target.value)}
                />

                <label>description</label>
                <input
                placeholder = 'write a product description'
                type = 'text'
                value = {description}
                onChange = {(e) => setDescription(e.target.value)}
                />

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
