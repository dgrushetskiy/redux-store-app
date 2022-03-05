import {createStore, combineReducers} from "redux";
import {devToolsEnhancer} from "redux-devtools-extension";

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT": {
            return state + 1;
        }
        case "DECREMENT": {
            return state - 1;
        }
        case "RESET": {
            return 0;
        }
        default: {
            return state;
        }
    }
};

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO": {
            return [
                ...state,
                {
                    id: Date.now(),
                    title: action.title,
                    completed: false
                }
            ];
        }
        case "REMOVE_TODO": {
            return state.filter((todo) => todo.id !== action.id);
        }
        case "TOGGLE_TODO": {
            return state.map((todo) =>
                todo.id === action.id ?
                    {...todo, completed: !todo.completed} : todo
            );
        }
        default: {
            return state;
        }
    }
}

const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todosReducer
});

export const store = createStore(
    rootReducer,
    devToolsEnhancer()
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// actions
export const increment = {type: "INCREMENT"};
export const decrement = {type: "DECREMENT"};
export const reset = {type: "RESET"};

// action creators todos
export const addTodo = (title) => ({
    type: "ADD_TODO",
    title
});
export const removeTodo = (id) => ({
    type: "REMOVE_TODO",
    id
});
export const toggleTodo = (id) => ({
    type: "TOGGLE_TODO",
    id
});
