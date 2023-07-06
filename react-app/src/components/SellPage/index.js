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
    const [error, setError] = useState({})

    const dispatch = useDispatch()
    const history = useHistory();


    async function handleSubmit (e) {
    e.preventDefault()
    const errors ={}
    if(!name){
        errors.name = 'Name of product is required!'
    }

    if(!description){
        errors.description = 'Description of product is required!'
    }else if(description.length < 100 ){
        errors.description = 'Description of product must be atleast 100 characters long!'
    }

    if(!picture_aws_link){
        errors.picture_aws_link = 'Picture of product is required!'
    }
    if(!price){
        errors.price = 'Price of product is required!'
    }

    if(Object.values(errors).length > 0){
        setError(errors)
    }

    else{
        const formData = new FormData()
        formData.append('name',name)
        formData.append('desc',description)
        formData.append('price',price)
        formData.append('picture_aws_link',picture_aws_link)
        const res = await dispatch(postItemsThunk(formData))
        return history.push(`/items`)
    }
    }


return(
    <div className='outdivCreate'>
        <form className = 'createItemFormContainer' onSubmit={handleSubmit}>
                <label>Item</label>
                <input
                placeholder = 'name'
                type = 'text'
                value = {name}
                onChange = {(e) => setName(e.target.value)}
                />

                <p className='pErrors'>{error.name}</p>

                <label>description</label>
                <input
                placeholder = 'write a product description'
                type = 'text'
                value = {description}
                onChange = {(e) => setDescription(e.target.value)}
                />

                <p className='pErrors'>{error.description}</p>

                <label>Picture</label>
                <input
                placeholder="insert a file here "
                type="file"
                accept='image/*'
                filename={picture_aws_link && picture_aws_link.name}
                onChange={(e) => setPicture_aws_link(e.target.files[0])}
                />

                <p className='pErrors'>{error.picture_aws_link}</p>

                <label>Price</label>
                <input
                        placeholder=""
                        type="number"
                        min="1"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                 <p className='pErrors'>{error.price}</p>

                <button className = 'allButton'>submit</button>

        </form>
    </div>
    )
}

export default SellPage
