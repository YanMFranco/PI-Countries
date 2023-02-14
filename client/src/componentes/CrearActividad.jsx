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

    /*if(!input.name){
        error.nombre = "El nombre es requerido"
    } else if (/[0-9]/.test(input.name)){
        error.nombre = "Nombre invalido"
    }

    if(!input.duration){
        error.duration = "Debe ingresar una duracion"
    } else if(!/\d/.test(input.duration)){
        error.duration = "Debe ser un numero"
    } else if(input.duration < 1 || input.duration > 24){
        error.duration = "Debe ser un numero entre 1 y 24"
    }*/
        

    const submitHandler = (evento) => {
        evento.preventDefault();
        console.log(input.id);
        input.id = input.id.split(",");
        dispatch(crear_Actividad({ input }));
        console.log(input.id);
        alert('Actividad creada correctamente');
        setInput({
            "id": [],
            "name": "",
            "dificulty": "",
            "duration": "",
            "season": "",

        });
    };

    const myEnterFunction = () =>{
        alert(`RECUERDA: Si deseas agregar esta actividad en más paises, debes seperar su ID por una COMA(",")`)
    }

    return (
        <div className='crear-actividad'>
            <div>
                <h1>Crear actividad turistica</h1>
            </div>
            <div className='contenedor-form'>
                <form>
                    <div>
                        <label htmlFor="id">ID del país</label>
                        <input type='text' value={input.id} name='id' onChange={e => changeHandler(e)} /> <div onMouseEnter={myEnterFunction}>INFO+</div><br /> 
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
                        <button type="submit" className='hola' onClick={submitHandler}>SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CrearActividad;