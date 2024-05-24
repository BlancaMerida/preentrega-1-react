
const ItemDetail = ({ product }) => {

    return (
        <div> 
            <p>{product.name}</p>
            <p>Precio:{product.price}</p>
        </div>
    );
};
export default ItemDetail;