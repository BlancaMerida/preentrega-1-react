import { useEffect,useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import getProducts from "../../data/data"

const ItemListConteiner = ({saludo}) =>{
    const[products,setProducts ] = useState ([])
    const {idCategory} = useParams()

    useEffect(()=>{
        getProducts()
    .then((respuesta)=>{
        if(idCategory){
            const productsFilter = respuesta.Filter((productRes) =>productRes.category === idCategory)
        setProducts(productsFilter);
        }else{
            setProducts(respuesta);
        }
    })
    .catch((error)=>{
        console.error(error);
    })
    .finally(()=>{
        console.log("final del producto")
    });
    },[idCategory]);

    return(
        <div>{saludo}
        <ItemList products = {products} />
        </div>
        
)
}
export default ItemListConteiner;