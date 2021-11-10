import { IoMdBasket } from "react-icons/io";
import './NavBar.css';

export const NavBar = () => {
    
    return (
        <header className="mi-app">
        <h1>Fudo</h1>
        <nav>
            <ul className="nav">
                <li><a href="">Home</a></li>
                <li><a href="">Tienda</a></li>
                <li><a href="">Informacion</a></li>
                <li>
                    <a className="icon">
                        <IoMdBasket/>
                    </a>
                </li>
            </ul>
        </nav>
    </header>
    )
}
