import { useHistory } from "react-router-dom";
import './index.css'
function CartTile ({item}) {


    const history = useHistory();
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
                <p id ='removefromCart'>Delete</p>
            </div>

       </div>

)
}

export default CartTile;
