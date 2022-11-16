import { GET_COUNTRIES, GET_COUNTRIESDETALLE, GET_BYNAME, CREATE_ACTIVITY } from './action';

const initialState = {
    countries: [],
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
                countries: action.payload,
            }
        case CREATE_ACTIVITY:
            return {
                ...state,
                countries: [...state.countries, action.payload],
            }
        default:
            return { ...state };

    }
}

export default rootReducer;