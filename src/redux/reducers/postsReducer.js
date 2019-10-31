import { SET_POSTS, FETCH_POSTS_ERROR, SET_SELECTED_POST_ID } from "../types";

const initialState = {
    data: null,
    loading: true,
    error: false,
    selectedId: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_POSTS: {
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: false
            }
        }
        case FETCH_POSTS_ERROR: {
            return {
                ...state,
                data: null,
                loading: false,
                error: true
            }
        }
        case SET_SELECTED_POST_ID: {
            return {
                ...state,
                selectedId: action.payload
            }
        }
        default:
            return state;
    }
}