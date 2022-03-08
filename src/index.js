import ReactDOM from "react-dom";
import { cofigureStore } from "./store/index";
import {Root} from "./root";

const store = cofigureStore();

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Root store={store} />,
    rootElement
);
