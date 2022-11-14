import React from "react";
import '../css/countriesCard.css';
import {Link} from 'react-router-dom';

const countriesCard = ({ id,name, image , continet }) => {
    return (
        <div className="contenedor-card">
            <div>
                <Link to={`/country/${id}`}><img src={image} alt="Img Not Found" /></Link>
                <h3 className="name">{name}</h3>
                <h4>Continente: {continet}</h4>
            </div>
        </div>
    )
}

export default countriesCard;