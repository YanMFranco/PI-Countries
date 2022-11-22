import React from "react";
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { orderAlphabetical, orderP , orderContinet } from "../redux/action";

const Ordenamiento = () => {

    const dispatch = useDispatch();
    const [filtrarA_Z, setFiltrar] = useState('');
    const [filtrarP, setFiltrarP] = useState('');
    const [filtrarCo, setFiltrarCo] = useState('');
    //const countries = useSelector((state) => state.countries);

    const handleOrderAlphabetical = (e) => {
        e.preventDefault();
        setFiltrar(e.target.value)
    }

    function handleOrderPopulation(e) {
        e.preventDefault();
        setFiltrarP(e.target.value)
    }

    function handleOrderContinet(e) {
        e.preventDefault();
        setFiltrarCo(e.target.value)
    }


    const handleFilterA_Z = (e) => {
        e.preventDefault();
        console.log(filtrarA_Z);
        if (!filtrarA_Z) {
            alert("Debes indicar el orden a realizar");
            return
        }
        dispatch(orderAlphabetical(filtrarA_Z));
    }


    const handleFilterP = (e) => {
        e.preventDefault();
        if (!filtrarP) {
            alert("Debes indicar el orden a realizar");
            return
        }
        dispatch(orderP(filtrarP));
    }

    const handleFilterCo = (e) => {
        e.preventDefault();
        if (!filtrarCo) {
            alert("Debes indicar el orden a realizar");
            return
        }
        dispatch(orderContinet(filtrarCo));
    }


    return (
        <div>
            <span ><h2>Orden Alfabetico</h2></span>
            <select onChange={handleOrderAlphabetical}>
                <option value="">---Selecciona---</option>
                <option value="ascendente">A-Z</option>
                <option value="descendente">Z-A</option>
            </select><input type="submit" value="Filtrar" onClick={handleFilterA_Z} />


            <span><h2>Poblacion</h2></span>
            <select onChange={handleOrderPopulation}>
                <option value="">---Selecciona---</option>
                <option value="ascendente">Mayor poblacion</option>
                <option value="descendente">Menor poblacion</option>
            </select><input type="submit" value="Filtrar" onClick={handleFilterP} />

            <span><h2>Continente</h2></span>
            <select onChange={handleOrderContinet}>
                <option value="">---Selecciona---</option>
                <option value='todos'>Todos los continentes</option>
                <option value='Africa'>Africa</option>
                <option value='Antarctica'>Antarctica</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europe</option>
                <option value='North America'>North America</option>
                <option value='Oceania' >Oceania</option>
                <option value='South America'>South America</option>
            </select><input type="submit" value="Filtrar" onClick={handleFilterCo} />
        </div>
    )

};

export default Ordenamiento;