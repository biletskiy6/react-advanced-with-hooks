import { SET_POSTS, FETCH_POSTS_ERROR, SET_SELECTED_POST_ID, SET_POST_DETAILS, FETCH_POST_DETAILS_ERROR, RESET_POST_DETAILS_LOADING } from "../types";

const initialState = {
    data: null,
    loading: true,
    error: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_POST_DETAILS: {
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: false
            }
        }
        case FETCH_POST_DETAILS_ERROR: {
            return {
                ...state,
                data: null,
                loading: false,
                error: true
            }
        }
        case RESET_POST_DETAILS_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        default:
            return state;
    }
}