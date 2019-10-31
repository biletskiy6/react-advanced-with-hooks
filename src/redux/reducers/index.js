
import { combineReducers } from "redux";


import postsReducer from './postsReducer';
import postDetailsReducer from "./postDetailsReducer";
import todosReducer from "./todosReducer";

export default combineReducers({
    posts: postsReducer,
    postDetails: postDetailsReducer,
    todos: todosReducer
});