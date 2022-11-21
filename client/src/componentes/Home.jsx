import React, { useState } from "react";
import { getCountries , getBy_Name} from "../redux/action";
import CountriesCard from "./CountriesCard";
import '../css/home.css'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paginado from "./Paginado";

const Home = (props) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);

    const itemPag = 10;
    
    const countriesD = useSelector((state) => state.countries);
    
    const [paginaActual, setPaginaActual] = useState(0)

    var paisesActuales = [...countriesD].splice(paginaActual, itemPag);
    
    const nextHandler = () => {
        console.log("next");
        const totalElementos = countriesD.length;
        console.log(totalElementos);
        const nextPage = paginaActual + itemPag;
        console.log(nextPage);
        if (nextPage === totalElementos) { return }
        setPaginaActual(nextPage);
    }

    const prevHandler = () => {
        console.log("prev");
        const prevPage = paginaActual - itemPag;
        if (prevPage < 0) { return }
        console.log(prevPage);
        setPaginaActual(prevPage);
    }


    const [search, setSearch] = useState('');

    const handleSubmit=(e)=> {
        e.preventDefault();
        dispatch(getBy_Name(search));
        setSearch("");
    }

    const handleChange=(e)=> {
        e.preventDefault();
        setSearch(e.target.value)
    }
    console.log(countriesD);

    return (

        <div className={paisesActuales.length?"contenedor-home":"contenedor-cargando"}>
            <div className="search">
                <input  type="text" onChange={handleChange} value={search} placeholder="Nombre del pais" />
                <input  type="submit" value="Buscar" onClick={handleSubmit}/>
            </div>

            <div className="botones">
                <Paginado  nextHandler={nextHandler} prevHandler={prevHandler}/>
            </div>

            <div className="load">
                <h1>Cargando</h1>
            </div>

            <div className="contenedor-cardHome">
                {
                    paisesActuales.map(
                        (country) => <CountriesCard
                            key={country.id}
                            id={country.id}
                            name={country.name}
                            image={country.image}
                            continet={country.continet}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default (Home);