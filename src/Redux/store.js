import { legacy_createStore as createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { reducer } from "./AppReducer/reducer";


import { reducer as AuthReducer} from "../Redux/AuthReducer/reducer"

const rootreducer=combineReducers({
    auth:AuthReducer,
    reducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootreducer, composeEnhancers(applyMiddleware(thunk)))