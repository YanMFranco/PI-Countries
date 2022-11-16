import React from 'react';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { crear_Actividad } from '../redux/action';

const CrearActividad = () => {

    const dispatch = useDispatch();

    const [input, setInput] = useState({
        "id": [],
        "name": "",
        "dificulty": "",
        "duration": "",
        "season": "",
        
    })

    const changeHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    const submitHandler = (evento) => {
        evento.preventDefault();
        dispatch(crear_Actividad({input}))
        alert('Actividad creada correctamente');
        setInput({
            "id": [],
            "name": "",
            "dificulty": "",
            "duration": "",
            "season": "",

        });
    };

    return (
        <div>
            <h1>Crear actividad turistica</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor="id">ID del país</label>
                <input type='text' value={input.id} name='id' onChange={e => changeHandler(e)} /><br />

                <label htmlFor="name">Nombre de actividad</label>
                <input type='text' value={input.name} name='name' onChange={e => changeHandler(e)} /><br />

                <label htmlFor="dificulty">Dificultad</label>
                <input type='number' value={input.dificulty} min="1" max="5" name='dificulty' onChange={e => changeHandler(e)} /><br />

                <label htmlFor="duration">Duracion</label>
                <input type='number' value={input.duration} name='duration' onChange={e => changeHandler(e)} /><br />

                <label htmlFor="season">Epoca del año</label>
                <input type='text' value={input.season} name='season' onChange={e => changeHandler(e)} /><br />

                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default CrearActividad;