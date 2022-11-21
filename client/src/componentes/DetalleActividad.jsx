import React from "react";

const DetalleActividad = ({ id, name, dificulty, duration, season, }) => {
    return (
        <div className="">
            <div>
                <ul>
                    <h3>Nombre de actividad: {name}</h3>
                    <li><h3>{dificulty}</h3></li>
                    <li><h3>{duration}</h3></li>
                    <li><h3>{season}</h3></li>
                    
                </ul>
                
            </div>
        </div>
    )
}

export default DetalleActividad;