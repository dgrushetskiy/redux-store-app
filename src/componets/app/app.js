import "./app.css";
import ClicerCount from "../clicer-count/clicer-count";
import TodoListItem from "../todo-list-item/todo-list-item";

export default function App() {
    return (
        <div className="App">
            <h1>Hello Redux </h1>
            <ClicerCount/>
            <TodoListItem/>
        </div>
    );
}


