import { useEffect,useState } from "react";
import ItemList from "./ItemList";
import getProducts from "../../data/data"
import { useParams } from "react-router-dom";

import "./itemlistcontainer.css"

const ItemListContainer = () =>{
    const[products, setProducts ] = useState ([]);
    const [loading, setLoading]= useState(false)
    const{idCategory} = useParams()

    useEffect(()=>{

        setLoading(true)
        getProducts()
    .then((respuesta)=>{
        if (idCategory){
            const productsFilter = respuesta.filter((productRes)=> productRes.category === idCategory)
            setProducts(productsFilter)
        }else{
            setProducts(respuesta);
        }
        })
    .catch((error)=>{
        console.error(error);
        })
    .finally(()=>{
        setLoading(false)
    });
    }, [idCategory]);

    return(
        <div className="item-list-container"> 
            <h2 className="title-item-list-container">
                {idCategory 
                    ? `Filtrado por categoria: ${idCategory}`
                    :"Bienvenidos a Rose Yojeria"}
                </h2>
        {  
            loading ? <div>Cargando...</div> : <ItemList products = {products} />
        }
        </div>
        
)
}
export default ItemListContainer;