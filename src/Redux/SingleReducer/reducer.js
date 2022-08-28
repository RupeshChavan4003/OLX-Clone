import {GET_SINGLEPRODUCTS_REQUEST,GET_SINGLEPRODUCTS_SUCCESS,GET_SINGLEPRODUCTS_FAILURE} from "./actionType"

const initialState = {
    singledata: [],
    isLoading: false,
    isError: false,
  };
  
  export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_SINGLEPRODUCTS_REQUEST: {
        return {
          ...state,
          isLoading: true,
        };
      }
  
      case GET_SINGLEPRODUCTS_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          singledata: payload,
        };
      }
  
      case GET_SINGLEPRODUCTS_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      }
      default: {
        return state;
      }
    }
  };