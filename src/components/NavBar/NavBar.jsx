import CartWidget from "./CartWidget";
import "./navbar.css";

const NavBar = () => {

    return(
        <div className="nav-bar">
            <div>
            
            </div>
            <ul>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contactos</li>
            </ul>
            <CartWidget/>
        </div>
        
    )
}
    export default NavBar
