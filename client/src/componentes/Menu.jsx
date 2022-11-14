import React from "react";
import "../css/home.css";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getBy_Name } from '../redux/action'

const Menu = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState("");

    const changeHandler = (e) => {
        e.preventDefault();
        setName(e.target.value);
    };

    const submitHandler = (evento) => {
        evento.preventDefault();
        dispatch(getBy_Name(name))
        setName('')
    };

    return (
        <div>
            <h1>Busca por nombre: </h1><input type="text" name="name" placeholder="Pais" value={name} onChange={e => changeHandler(e)} />
            <input type='submit' onClick={e=>submitHandler(e)} />
        </div>
    )
}

export default Menu;