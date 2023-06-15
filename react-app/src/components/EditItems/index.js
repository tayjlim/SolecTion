import { useParams, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

function EditItems ({item}){
    const dispatch = useDispatch();
    const {itemId} = useParams();
    const singleItem = useSelector(state=> state.items)[itemId]

    console.log(item)
    const [name, setName] = useState(item.name)
    const [description, setDescription] = useState(item.desc)
    const [picture_aws_link, setPicture_aws_link] = useState()
    const [price,setPrice] = useState(item.price)
    

    return(
        <div>
            <form>
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
            value = {description}
            onChange = {(e) => setDescription(e.target.value)}
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
