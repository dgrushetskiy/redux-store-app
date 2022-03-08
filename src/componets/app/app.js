import "./app.css";
import NewTodo from "../new-todo/new-todo";
import Filters from "../filters";
import TodoList from "../todo-list/todo-list";

export default function App() {
    return (
        <div className="App">
            <h1>Hello Redux Todo</h1>
            <NewTodo/>
            <Filters/>
            <TodoList/>
        </div>
    );
}


