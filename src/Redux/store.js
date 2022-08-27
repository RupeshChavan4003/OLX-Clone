
import { legacy_createStore as createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { reducer } from "./AppReducer/reducer";
import { reducer as ProductsReducer } from "./ProductsReducer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootreducer=combineReducers({
    auth:AuthReducer,
    reducer,
    ProductsReducer
})

const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


export { store };

