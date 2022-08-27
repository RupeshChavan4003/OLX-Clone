import * as types from "./actionTypes";

const getProductRequest =()=>{
    return {type:types.GET_PRODUCTS_REQUEST};
}

const getProductSuccess =(payload)=>{
    return {type:types.GET_PRODUCTS_SUCCESS,payload};
}
const getProductFailure =()=>{
    return {type:types.GET_PRODUCTS_FAILURE};
}

export {
  
    getProductRequest,
    getProductSuccess,
    getProductFailure}