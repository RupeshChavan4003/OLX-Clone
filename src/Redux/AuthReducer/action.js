import * as types from "./actionTypes";

import axios from "axios";

const login = (payload) => (dispatch) => {
  dispatch({ type: types.USER_LOGIN_REQUEST });

return axios
    ({
        method: "post",
        url: "/api/login",
        baseURL:"https://reqres.in",
        data: payload,
    })
    .then((res) => dispatch({ type: types.USER_LOGIN_SUCCESS }))
    .catch((e) => dispatch({ type: types.USER_LOGIN_FAILURE }));
};

export {login}
// eve.holt@reqres.in

// cityslicka