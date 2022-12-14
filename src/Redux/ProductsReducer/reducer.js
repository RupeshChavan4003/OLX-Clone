import {
  GET_ALLPRODUCTS_FAILURE,
  GET_ALLPRODUCTS_REQUEST,
  GET_ALLPRODUCTS_SUCCESS,
} from "./actionType";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALLPRODUCTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case GET_ALLPRODUCTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    }

    case GET_ALLPRODUCTS_FAILURE: {
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
