import React from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../redux/action";
import Ordenamiento from "./Ordenamiento";

const Paginado = ({prevHandler,nextHandler}) => {
    
    const dispatch = useDispatch();

    const countrisRefresh = (e) =>{
        e.preventDefault();
        dispatch(getCountries());
    }

    return (
        <div>
            <div><button onClick={prevHandler}>PREV</button></div>

            <div className="mundo" > <button type="submit" onClick={countrisRefresh}>🌍</button></div>

            <div><button onClick={nextHandler}>NEXT</button></div>

            <div><Ordenamiento /></div>
        </div>
        
    )
}

export default Paginado;