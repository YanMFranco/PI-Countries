import React from "react";
import {Link} from 'react-router-dom';
import "../css/navBar.css";

const NavBar = () => {
    return (
        <div className="nav-bar">
            <nav><ul>
                <li><Link to={"/home"}>Inicio</Link></li>
                <li><Link to={"/createActivity"}>Crear Actividad</Link></li>
                <li><Link to={"/"}>Salir</Link></li>
                <li><Link to={"/"}>Contacto</Link></li>
            </ul></nav>
        </div>
    )
};

export default (NavBar);