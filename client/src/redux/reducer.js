import { GET_COUNTRIES, GET_COUNTRIESDETALLE, GET_BYNAME, ORDER_ALPHABETICAL, ORDER_POPULATION, ORDER_CONTINET } from './action';

const initialState = {
    countries: [],
    countriesCopy: [],
    countryDetalle: {},
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
            };
        case GET_COUNTRIESDETALLE:
            return {
                ...state,
                countryDetalle: action.payload,
            }
        case GET_BYNAME:
            return {
                ...state,
                countries: action.payload,
            }
        case ORDER_ALPHABETICAL:
            let orderedCountries = [...state.countries]
            orderedCountries = orderedCountries.sort((a, b) => {
                if (a.name < b.name){
                    return action.payload === "ascendente" ? -1 : 1;
                }
                if(a.name > b.name){
                    return action.payload === "ascendente" ? 1 : -1;
                }
                return 0
            })
            return {
                ...state,
                countries: orderedCountries,
            }
        case ORDER_POPULATION:
            let orderedPopulation = [...state.countries]
            orderedPopulation = orderedPopulation.sort((a, b) => {
                if(a.population < b.population) {
                    return action.payload === "ascendente" ? 1 : -1;
                }
                if(a.population > b.population){
                    return action.payload === "ascendente" ? -1 : 1;
                }
                return 0
            })
            return {
                ...state,
                countries: orderedPopulation,
            }
        case ORDER_CONTINET:
            let allCountries = [...state.countries]
            let filteredContinents = action.payload === "todos" ? allCountries :
            allCountries.filter((p) => p.continet === action.payload)
            return {
                ...state,
                countries: filteredContinents
            }
        default:
            return { ...state };

    }
}

export default rootReducer;