import { SET_TODOS, LOADING_TODOS, FETCH_TODOS_ERROR } from '../types';
export const setTodosAction = (todos) => ({ type: SET_TODOS, payload: todos })
export const loadingTodos = () => ({ type: LOADING_TODOS })
export const fetchTodosError = (error) => ({ type: FETCH_TODOS_ERROR, payload: error })