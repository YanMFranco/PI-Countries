import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContryDetalle } from "../redux/action";
import "../css/countriesDetalle.css";
import DetalleActividad from "./DetalleActividad";

const CountriesDetalle = (props) => {
    const dispatch = useDispatch();
    const countryDetalle = useSelector((state) => state.countryDetalle);

    useEffect(() => {
        dispatch(getContryDetalle(props.match.params.id));
    }, [dispatch, props.match.params.id]);

    console.log(countryDetalle.tourisms);
    return (

        <div className="contenedor-detalle">
            <h1>{countryDetalle.name}</h1>
            <h2>ID: {countryDetalle.id}</h2>
            <img src={`${countryDetalle.image}`} alt={`Bandera de ${countryDetalle.name}`} />
            <h2>Continet: {countryDetalle.continet}</h2>
            <h2>Subregion: {countryDetalle.subregion}</h2>
            <h2>Capital: {countryDetalle.capital}</h2>
            <h2>Area: {countryDetalle.area}</h2>
            <h2>Poblacion: {countryDetalle.population}</h2>
            <h2>Actividades turisticas: {
                countryDetalle.tourisms ?
                    countryDetalle.tourisms.length === 0 ? " No hay datos"
                        : countryDetalle.tourisms.map((info) => <DetalleActividad
                            key={info.id}
                            id={info.id}
                            name={info.name}
                            dificulty={info.dificulty}
                            duration={info.duration}
                            season={info.season}
                        />)
                    : "Cargando"}
            </h2>
        </div>
    )
}

export default (CountriesDetalle);