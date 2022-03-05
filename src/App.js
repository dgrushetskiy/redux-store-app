import "./App.css";
import ClicerCount from "./componets/ClicerCount";
import TodoListItem from "./componets/TodoListItem";

export default function App() {
    return (
        <div className="App">
            <h1>Hello Redux </h1>
            <ClicerCount/>
            <TodoListItem/>
        </div>
    );
}


