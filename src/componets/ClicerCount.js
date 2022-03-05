import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, reset} from './../store';

export default function ClicerCount() {
    return (
        <div>
            <h1>Counter:</h1>
            <Counter/>
        </div>
    )
}

const Counter = () => {
    const {counter} = useSelector((state) => state);
    console.log(counter)
    const dispatch = useDispatch();

    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={() => dispatch(decrement)}>-</button>
            <button onClick={() => dispatch(increment)}>+</button>
            <button onClick={() => dispatch(reset)}>reset</button>
        </div>
    );
};
