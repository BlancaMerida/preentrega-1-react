import { useState } from "react";
import Formulary from "./Formulary.jsx";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc, setDoc, } from "firebase/firestore";
import db from "../../db/db.js";
import validateForm from "../utils/validationYup.js";
import { toast } from "react-toastify";

import "./checkout.css"

const Checkout = () => {
    const [datosForm, setDatosForm] = useState({
        nombre: "",
        telefono: "",
        email: "",
        repeatEmail:"",
    });

    const [idOrden, setIdOrden] = useState(null);
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleChangeInput = (event) => {
        setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
    };

    const handleSubmitForm = async(event) => {
        event.preventDefault();
        const orden = {
            comprador: { ...datosForm },
            productos: [...carrito],
            total: precioTotal(),
        };
        try {

            const response = await validateForm(datosForm)
            if(response.status === "success"){
            generateOrder(orden);
            }else{
            toast.warning(response.message)
            }
        } catch (error) {
                console.log(error)
                }
            };


    const generateOrder = (orden) => {
        const ordenesRef = collection(db, "ordenes");
        addDoc(ordenesRef, orden)
            .then((respuesta) => setIdOrden(respuesta.id))
            .catch((error)=> toast(error))
            .finally(()=> {
                //reducir stock
                updateStock()
                //vaciar carito
                vaciarCarrito()
                })
            };
    const updateStock = () => {
        carrito.map((productoCarrito)=> {
            let quantity = productoCarrito.quantity
            //borar el campo quantity
            delete productoCarrito.quantity

            const productoRef = doc(db, "products", productoCarrito.id)
            setDoc(productoRef, { ...productoCarrito, stock: productoCarrito.stock - quantity })
            .then(()=> console.log("stock actualizado correctamente"))
            .catch((error)=> console.log(error))
        })
    }

    return (
        <div className="checkout">
            {idOrden ? (
            <div className="order-generated">
                <h2>Orden generada con exito!</h2>
                <p> guarde el id de su orden: {idOrden} </p>
            </div>
    ) : (
        <Formulary
            datosForm={datosForm}
            handleChangeInput={handleChangeInput}
            handleSubmitForm={handleSubmitForm}/>
            )}
        </div>
    );
};
export default Checkout;