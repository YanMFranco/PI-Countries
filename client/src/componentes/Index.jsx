import React from "react";
import {Link} from "react-router-dom";
import "../css/index.css";

export default function index(){
    return(
        <div className="contenedor">
            <h1>Bienvenido a mi Proyecto</h1>
            <Link to="/home"><button>Click para ingresar</button></Link>
        </div>
    ) 
}