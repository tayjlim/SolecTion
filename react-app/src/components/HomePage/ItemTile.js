import './index.css'
function ItemTile({item}){
    console.log(item)

    return (
        <div id = {item.id} className="ItemTileContainer">

        <img className = 'shoePicTile' src = {item.picture_aws_link}></img>
        <h3>{item.name}</h3>
        <h3>{item.price}</h3>

       </div>

    )
}

export default ItemTile;
