import axios from "axios";
import {GET_SINGLEPRODUCTS_REQUEST,GET_SINGLEPRODUCTS_SUCCESS,GET_SINGLEPRODUCTS_FAILURE} from "./actionType"

export const getSingleProducts = (category, id) => (dispatch) => {
    dispatch({ type: GET_SINGLEPRODUCTS_REQUEST });
  
    return axios
  
      .get(`https://aberranttexturemasai.herokuapp.com/${category}/${id}`)
    .then((res) => {
        // console.log(res.data);
        dispatch({ type: GET_SINGLEPRODUCTS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: GET_SINGLEPRODUCTS_FAILURE });
      });
  };
  