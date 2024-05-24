import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import getProducts from "../../data/data";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});


    useEffect(() => {
        getProducts()
        .then((respuesta)=>{
            const productFind = respuesta.find((productRes)=> product)
            setProduct(productFind);
        })
        .catch((error)=>{
            console.error(error);
        })
        .finally(()=>{
            console.log("final del producto")
        });
    }, []);

    return (
        <ItemDetail product={product} />
    );
};
export default ItemDetailContainer