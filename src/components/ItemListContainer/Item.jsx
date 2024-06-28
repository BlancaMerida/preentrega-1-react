import { Link } from "react-router-dom";

const Item = ({ product }) => {
    return (
        <Link className="item" to={"/detail/" + product.id} >
            <img className="image-item" src={product.image} />
            <p className="title-name">{product.name}</p>
            <p className="butoon-price">Precio:{product.price}</p>
        </Link>
        )
};
export default Item;