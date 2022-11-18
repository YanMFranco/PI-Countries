import React from 'react';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { crear_Actividad } from '../redux/action';
import "../css/crearActividad.css";

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
        dispatch(crear_Actividad({ input }))
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
        <div className='crear-actividad'>
            <div>
                <h1>Crear actividad turistica</h1>
            </div>
            <div className='contenedor-form'>
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="id">ID del país</label>
                        <input type='text' value={input.id} name='id' onChange={e => changeHandler(e)} /><br />
                    </div>
                    <div>
                        <label htmlFor="name">Nombre de actividad</label>
                        <input type='text' value={input.name} name='name' onChange={e => changeHandler(e)} /><br />
                    </div>
                    <div>
                        <label htmlFor="dificulty">Dificultad</label>
                        <input type='number' value={input.dificulty} min="1" max="5" name='dificulty' onChange={e => changeHandler(e)} /><br />
                    </div>
                    <div>
                        <label htmlFor="duration">Duracion</label>
                        <input type='number' value={input.duration} name='duration' onChange={e => changeHandler(e)} /><br />
                    </div>
                    <label htmlFor="season">Epoca del año</label>
                    <select name="season">
                        <option name="vacio" value={input.season=" "} onChange={e => changeHandler(e)}> </option>
                        <option name="season" value={input.season="primavera"} onChange={e => changeHandler(e)}>Primavera</option>
                        <option name="season" value={input.season="verano"} onChange={e => changeHandler(e)}>Verano</option>
                        <option name="season" value={input.season="otoño"}  onChange={e => changeHandler(e)}>Otoño</option>
                        <option name="season" value={input.season="invierno"}  onChange={e => changeHandler(e)}>Invierno</option>
                    </select>
                    <br />
                    <div>
                        <button type="submit">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CrearActividad;