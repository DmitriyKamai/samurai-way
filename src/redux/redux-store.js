import { combineReducers, createStore } from "redux";
import postsReducer from "./profilePage-reducer";
import messagesReducer from "./dialogsPage-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    postsReducer,
    messagesReducer,
    sidebarReducer
});

let store = createStore();

export default store;