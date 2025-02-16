import { combineReducers, createStore } from "redux";
import profileReducer from "./profilePage-reducer";
import dialogsReducer from "./dialogsPage-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    users: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);


export default store;