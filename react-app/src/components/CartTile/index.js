import { useHistory } from "react-router-dom";
import './index.css'
import { deleteFromCart } from "../../store/session";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { authenticate } from "../../store/session";
function CartTile ({item}) {


    const history = useHistory();
    const dispatch = useDispatch();
    const handleDelete = async(e)=>{
        e.preventDefault()
        await dispatch(deleteFromCart(item.id))
        await dispatch(authenticate())

    }
    const handleClick= () =>{
        history.push(`/items/${item.id}`)
    }



return (
    <div id = 'cartTileID' className="ItemTileContainer" >
            <div id = 'leftTileID' className = 'topTile' onClick={handleClick}>
            <img className = 'shoePicTile' src = {item.picture_aws_link} ></img>
            </div>
            <div id = 'rightTileID' className = 'bottomTile'>
                <div className="bottomTile">
                    <p className = 'textDiv'>{item.name}</p>
                    <h3 className = 'textDiv'>${item.price}</h3>
                </div>
                <p onClick = {handleDelete} id ='removefromCart'>Delete</p>
            </div>

       </div>

)
}

export default CartTile;
