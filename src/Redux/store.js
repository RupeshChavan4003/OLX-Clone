import { legacy_createStore , compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { reducer as AppReducer } from "./AppReducer/reducer";
import { reducer as ProductsReducer } from "./ProductsReducer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import {reducer as SingleReducer} from "./SingleReducer/reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer=combineReducers({
    auth:AuthReducer,
    AppReducer,
    ProductsReducer,
    SingleReducer
})


const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export { store };
