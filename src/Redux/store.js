import { legacy_createStore, applyMiddleware, combineReducers,compose} from "redux";
import { reducer as ProductsReducer } from "./ProductsReducer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import thunk from "redux-thunk";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer= combineReducers({AuthReducer , ProductsReducer})

const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export { store };

