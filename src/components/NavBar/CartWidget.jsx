import { RiShoppingCartLine } from "react-icons/ri";

import "./cartwidget.css"

const CartWidget = () => {
    return(
        <div className="cartwidget">
            <RiShoppingCartLine color="blue" size= {35}/>
            <p className="number">1</p>
        </div>
    )
}
export default CartWidget