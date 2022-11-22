import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRIESDETALLE = "GET_COUNTRIESDETALLE";
export const GET_BYNAME = "GET_BYNAME";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const ORDER_ALPHABETICAL = "ORDER_ALPHABETICAL";
export const ORDER_POPULATION = "ORDER_POPULATION";
export const ORDER_CONTINET = "ORDER_CONTINET";


export const getCountries = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/countries")
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_COUNTRIES, payload: data }));
  };
};

export const getContryDetalle = (id) => {
  return function (dispatch) {
    fetch(`http://localhost:3001/countries/${id}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_COUNTRIESDETALLE, payload: data }));
  };
};

export const getBy_Name = (name) => {
  return function (dispatch) {
    fetch(`http://localhost:3001/countries?name=${name}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_BYNAME, payload: data }));
  };
};

export const crear_Actividad = ({ input }) => {
  return async function () {
    console.log(input);
    const res = await axios.post(`http://localhost:3001/activities`, input)
    console.log(res.data);
  }

}

export const orderAlphabetical = (order) => {
  console.log(order);
  return {
    type: ORDER_ALPHABETICAL,
    payload: order,
  }
}

export const orderP = (orderPo) => {
  return {
    type: ORDER_POPULATION,
    payload: orderPo,
  }
}

export const orderContinet = (orderCo) => {
  return {
    type: ORDER_CONTINET,
    payload: orderCo,
  }
}
