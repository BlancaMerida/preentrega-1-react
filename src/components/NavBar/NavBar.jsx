import logoJoye from "../../assets/logo-joyeria.jpg"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

import "./navbar.css"

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="brand">
                <img className="logo" src={logoJoye} alt="logo joye"/>
            </Link>
            <ul className="categorias">
                <Link to="/category/aros" className="categoria">Aros</Link>
                <Link to="/category/cadenas" className="categoria">Cadenas</Link>
                <Link to="/category/anillos" className="categoria">Pulseras/Anillos</Link>
            </ul>
            <CartWidget />
        </nav>
    )
}
export default NavBar
