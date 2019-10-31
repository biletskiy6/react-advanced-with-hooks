
import { combineReducers } from "redux";


import postsReducer from './postsReducer';
import todosReducer from "./todosReducer";

export default combineReducers({
    posts: postsReducer,
    todos: todosReducer
});