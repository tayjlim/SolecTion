import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { postItemsThunk } from '../../store/items'
import './index.css'

function SellPage() {

    const [picture_aws_link, setPicture_aws_link] = useState(undefined);
    const [name,setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(1);
    const dispatch = useDispatch()
    const history = useHistory();


    async function handleSubmit (e) {
    e.preventDefault()
    const formData = new FormData()

    formData.append('name',name)
    formData.append('desc',description)
    formData.append('price',price)
    formData.append('picture_aws_link',picture_aws_link)
    const res = await dispatch(postItemsThunk(formData))

    return history.push(`/items`)

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
                filename={picture_aws_link && picture_aws_link.name}
                onChange={(e) => setPicture_aws_link(e.target.files[0])}
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
