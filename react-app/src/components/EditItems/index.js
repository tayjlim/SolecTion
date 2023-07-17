import { useParams, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useModal } from "../../context/Modal";
import { editItemsThunk,getAllItemsThunk } from "../../store/items";
import './index.css'
function EditItems ({item}){
    const dispatch = useDispatch();
    const { closeModal } = useModal()
    console.log(item)


    // console.log(singleItem, '------ undefined? ------')
    // const singleItem = useSelector(state=> state.items)[itemId]

    const [name, setName] = useState(item.name)
    const [desc, setDesc] = useState(item.desc)
    const [picture_aws_link, setPicture_aws_link] = useState(undefined)
    const [price,setPrice] = useState(item.price)
    const [error, setError] = useState({})

    const tienkissesDudes = async(tien) =>{
        tien.preventDefault()
        const errors ={}


        if(!name){
        errors.name = 'Name of product is required!'
        }else if(name.length >65){
            errors.name='Name of product is too long!(less than 65 characters)'
        }

        if(!desc){
            errors.description = 'Description of product is required!'
        }else if(desc.length < 100 ){
            errors.description = 'Description of product must be atleast 100 characters long!'
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
        formData.append('desc',desc)
        formData.append('price',price)

            if(picture_aws_link){
            formData.append('picture_aws_link',picture_aws_link)
            }

        const res = await dispatch(editItemsThunk(item.id,formData))
        await dispatch(getAllItemsThunk())
        return closeModal()
        }
    }

    return(
        <div>
            <form className = 'edithisitemform'onSubmit={tienkissesDudes}>
            <h2>Edit your Listing!</h2>

            <div  className = 'form-row'>
                <input
                className = 'loginInput'
                id = 'nameInput'
                type = 'text'
                value = {name}
                onChange = {(e) => setName(e.target.value)}
                required
                />
                <span className = {(name.length > 0) ? 'staySmall' : 'fieldportion'}>
                Name of Product
                </span>

              </div>

            <p className='pErrors'>{error.name}</p>

            <div  className = 'form-row'>
            <textarea
            className = 'loginInput'
            id = 'inputofedit'
            type = 'text'
            value = {desc}
            rows='60'
            onChange = {(e) => setDesc(e.target.value)}
            />

            <span id = ''className = {(desc.length > 0) ? 'staySmall' : 'fieldportion'}>Description</span>
            </div>

            <h2>
            Current Photo
            </h2>
            <img className = 'editModal' src = {item.picture_aws_link}></img>


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
            max="99"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            />

            <p className='pErrors'>{error.price}</p>


            <button className = 'allButton' >submit</button>


            </form>
        </div>
        )


}

export default EditItems;
