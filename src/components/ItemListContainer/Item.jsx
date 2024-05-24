import { Link } from "react-router-dom";

const Item = ({ product }) => {
    return (
        <div className="Item" >
            <img className="image-item" src={product.image} alt="" />
            <p>{product.name}</p>
            <p>Precio:{product.price}</p>
            <Link to={"/detail/" + product.id}> Ver detalles </Link>
        </div>
        
    
    );
};
export default Item;