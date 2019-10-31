import { SET_POSTS, LIKE_POST, UNLIKE_POST } from "../types";

const initialState = {
    posts: [],
    loading: true,
    error: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_POSTS: {
            return {
                posts: action.payload,
                loading: false,
                errors: false
            }
        }
        default:
            return state;
    }
}