import { useHistory } from "react-router-dom";
import './index.css'
function ItemTile({item}){
    const history = useHistory();

    const handleClick= () =>{
        history.push(`/items/${item.id}`)
    }

    return (
        <div id = {item.id} className="ItemTileContainer" onClick={handleClick}>
            <div className = 'topTile'>
            <img className = 'shoePicTile' src = {item.picture_aws_link}></img>
            </div>
            <div className = 'bottomTile'>
            <p className = 'textDiv'>{item.name}</p>
            <h3 className = 'textDiv'>${item.price}</h3>
            </div>

       </div>

    )
}

export default ItemTile;
