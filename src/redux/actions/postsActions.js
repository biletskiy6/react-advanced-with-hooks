import { SET_POSTS, LOADING_POSTS, FETCH_POSTS_ERROR, SET_SELECTED_POST_ID } from '../types';
export const setPostsAction = (posts) => ({ type: SET_POSTS, payload: posts })
export const loadingPosts = () => ({ type: LOADING_POSTS })
export const fetchPostsError = (error) => ({ type: FETCH_POSTS_ERROR, payload: error })
export const setSelectedPostIdAction = (selectedId) => ({ type: SET_SELECTED_POST_ID, payload: selectedId })