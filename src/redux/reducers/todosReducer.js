import { SET_TODOS, FETCH_TODOS_ERROR } from "../types";

const initialState = {
    data: null,
    loading: true,
    error: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_TODOS: {
            return {
                data: action.payload,
                loading: false,
                error: false
            }
        }
        case FETCH_TODOS_ERROR: {
            return {
                data: null,
                loading: false,
                error: true
            }
        }
        default:
            return state;
    }
}