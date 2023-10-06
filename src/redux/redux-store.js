import { applyMiddleware, compose, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer.js";
import dialogsReducer from "./dialogs-reducer.js";
import sidebarReducer from "./sidebar-reducer.js";
import usersReducer from "./users-reducer.js";
import authReducer from "./auth-reducer.js";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer.js";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    navPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


window.store = store;

export default store;