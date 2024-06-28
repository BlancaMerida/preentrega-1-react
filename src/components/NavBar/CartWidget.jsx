import { RiShoppingCartLine } from "react-icons/ri";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import "./cartwidget.css"

const CartWidget = () => {
    const {cantidadTotal}= useContext(CartContext)
    let cantidad = cantidadTotal()
    return(
        <Link to="/cart" className={ cantidad >= 1 ? "cartwidget cart-black":"cartwidget cart-pink" }>
            <RiShoppingCartLine size= {35}/>
            <p className="number">{cantidad >=1 && cantidad}</p>
        </Link>
    )
}
export default CartWidget