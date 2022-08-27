import axios from "axios";
import {
  GET_ALLPRODUCTS_FAILURE,
  GET_ALLPRODUCTS_REQUEST,
  GET_ALLPRODUCTS_SUCCESS,
} from "./actionType";

export const getAllProducts = (category, params) => (dispatch) => {
  dispatch({ type: GET_ALLPRODUCTS_REQUEST });

  return axios
    .get(`http://localhost:8080/${category}`, params)
    .then((res) => {
      // console.log(res.data);
      dispatch({ type: GET_ALLPRODUCTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_ALLPRODUCTS_FAILURE });
    });
};
