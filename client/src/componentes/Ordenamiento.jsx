import React from "react";
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { orderAlphabetical} from "../redux/action";

const Ordenamiento = () => {

    const dispatch = useDispatch();
    const [filtrar, setFiltrar] = useState('');
    //const countries = useSelector((state) => state.countries);

    const handleOrderAlphabetical= (e)=> {
        e.preventDefault();
        setFiltrar(e.target.value)
    }
    

    const handleFilterA_Z=(e)=> {
        e.preventDefault();
        console.log(filtrar);
        if (!filtrar) {
            alert("Debes indicar el orden a realizar");
            return
        }
        dispatch(orderAlphabetical(filtrar));
    }

    console.log(filtrar);


    return (
        <div>
            <span ><h2>Orden Alfabetico</h2></span>
            <select onChange={handleOrderAlphabetical}>
                <option value="">---Selecciona---</option>
                <option value="ascendente">A-Z</option>
                <option value="descendente">Z-A</option>
            </select><input  type="submit" value="Filtrar" onClick={handleFilterA_Z}/>


            <span><h2>Poblacion</h2></span>
            <select>
                <option value="">---Selecciona---</option>
                <option value="ascendente">Mayor poblacion</option>
                <option value="descendente">Menor poblacion</option>
            </select><input  type="submit" value="Filtrar"/>
        </div>
    )

};

export default Ordenamiento;