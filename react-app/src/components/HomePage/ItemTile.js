import { useHistory } from "react-router-dom";
import './index.css'
function ItemTile({item}){
    const history = useHistory();

    const handleClick= () =>{
        history.push(`/items/${item.id}`)
    }

    return (
        <div id = {item.id} className="ItemTileContainer" onClick={handleClick}>

        <img className = 'shoePicTile' src = {item.picture_aws_link}></img>
        <p>{item.name}</p>
        <h3>${item.price}</h3>

       </div>

    )
}

export default ItemTile;
