import React from "react";
import { connect } from "react-redux";
import { getCountries } from "../redux/action";
import CountriesCard from "./CountriesCard";
import Menu from "./Menu";
import '../css/home.css'

class Home extends React.Component {

    //Ejecuta accion que hace dispatch
    componentDidMount() {//signicia que se ejecute cuando el componente se monta
        this.props.getCountries()//esta en this.props porque al hacer dispatch lo enviamos a props en mapDispatchToProps
    }


    render() {
        return (
            <div className="contenedor-home">
                <div>
                    <Menu />
                </div>

                <div className="contenedor-cardHome">
                    {
                        this.props.countries?.map(
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
        )
    }
}


//Toma el estado goblal y lo manda a las props
const mapStateToProps = (state) => {
    return {
        countries: state.countries//retorna un objeti con lo que tenga el estado videogames
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCountries: () => dispatch(getCountries())//Despachamos la accion a realizar para obetener las props
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)