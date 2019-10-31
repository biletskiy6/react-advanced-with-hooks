import { SET_POST_DETAILS, LOADING_POST_DETAILS, FETCH_POST_DETAILS_ERROR, RESET_POST_DETAILS_LOADING } from '../types';
export const setPostDetailsAction = (details) => ({ type: SET_POST_DETAILS, payload: details })
export const loadingPostDetails = () => ({ type: LOADING_POST_DETAILS })
export const fetchPostDetailsError = (error) => ({ type: FETCH_POST_DETAILS_ERROR, payload: error })
export const resetPostDetailsLoadingAction = () => ({ type: RESET_POST_DETAILS_LOADING })
