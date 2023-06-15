import { useParams, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useModal } from "../../context/Modal";
import { editItemsThunk,getAllItemsThunk } from "../../store/items";

function EditItems ({item}){
    const dispatch = useDispatch();
    const { closeModal } = useModal()
    console.log(item)


    // console.log(singleItem, '------ undefined? ------')
    // const singleItem = useSelector(state=> state.items)[itemId]

    const [name, setName] = useState(item.name)
    const [desc, setDesc] = useState(item.desc)
    const [picture_aws_link, setPicture_aws_link] = useState()
    const [price,setPrice] = useState(item.price)

    const tienkissesDudes = async(tien) =>{
        tien.preventDefault()

        const formData = new FormData()
        formData.append('name',name)
        formData.append('desc',desc)
        formData.append('picture_aws_link',picture_aws_link)
        formData.append('price',price)

        const res = await dispatch(editItemsThunk(item.id,formData))
        await dispatch(getAllItemsThunk())
        return closeModal()

    }

    return(
        <div>
            <form onSubmit={tienkissesDudes}>
            <h2>Edit your Listing!</h2>
            <label>
                Name
            </label>

            <input
            placeholder="name"
            type = 'text'
            value = {name}
            onChange = {(e)=>setName(e.target.value)}
            />

            <label>
                Description
            </label>


            <input
            placeholder = 'write a product description'
            type = 'text'
            value = {desc}
            onChange = {(e) => setDesc(e.target.value)}
            />

            <label>
            Current Photo:
            <img className = 'shoePicTile' src = {item.picture_aws_link}></img>
            </label>

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

export default EditItems;
