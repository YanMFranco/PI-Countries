import { GET_COUNTRIES, GET_COUNTRIESDETALLE, GET_BYNAME, ORDER_ALPHABETICAL } from './action';

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
            console.log(action.payload);
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
        default:
            return { ...state };

    }
}

export default rootReducer;