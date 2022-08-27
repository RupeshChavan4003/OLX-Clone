import { legacy_createStore, applyMiddleware, combineReducers,compose} from "redux";

import thunk from "redux-thunk";

import { reducer as AuthReducer } from "./AuthReducer/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer= combineReducers({auth:AuthReducer})

const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export { store };
