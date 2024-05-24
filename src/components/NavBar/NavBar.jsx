import logoJoye from "../../assets/logo-joyeria.jpg"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

import "./navbar.css"

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="brand">
                <img className="logo" src={logoJoye} alt="logo joye"/>
            </div>
            <ul className="categorias">
                <Link to="/category/inicio" className="categoria">Inicio</Link>
                <Link to="/category/productos" className="categoria">Productos</Link>
                <Link to="/category/contactos" className="categoria">Contactos</Link>
            </ul>
            <CartWidget />
        </nav>
    )
}
export default NavBar
