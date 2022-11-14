const CrearActividad = () => {
    return (
        <div>
            <h1>Crear actividad turistica</h1>
            <form action="">
                <label htmlFor="id">ID del país</label>
                <input type='text' value={input.id} name='id' onChange={e => changeHandler(e)} /><br />

                <label htmlFor="name">Nombre de actividad</label>
                <input type='text' value={input.name} name='name' onChange={e => changeHandler(e)} /><br />

                <label htmlFor="dificulty">Dificultad</label>
                <input type='text' value={input.dificulty} name='dificulty' onChange={e => changeHandler(e)} /><br />

                <label htmlFor="duration">Duracion</label>
                <input type='text' value={input.duration} name='duration' onChange={e => changeHandler(e)} /><br />

                <label htmlFor="season">Epoca del año</label>
                <input type='text' value={input.season} name='season' onChange={e => changeHandler(e)} /><br />
            </form>
        </div>
    )
}

export default CrearActividad;