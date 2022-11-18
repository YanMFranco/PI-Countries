import React from "react";
import "../css/home.css";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getBy_Name } from '../redux/action'

const Menu = () => {
    const [search, setSearch] = useState('');
    let dispatch = useDispatch();

    const handleSubmit=(e)=> {
        e.preventDefault();
        setSearch("");
        dispatch(getBy_Name(search));
    }

    const handleChange=(e)=> {
        e.preventDefault();
        setSearch(e.target.value)
    }

    return (
        <div>
                <input  type="text" onChange={handleChange} value={search} placeholder="Nombre del pais" />
                <input  type="submit" value="Buscar" onClick={handleSubmit}/>
        </div>
    )
}

export default Menu;