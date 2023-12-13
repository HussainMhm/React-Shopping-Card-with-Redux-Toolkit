import { useDispatch, useSelector } from "react-redux";
import { actions } from "./store/index";
import "./App.css";

function App() {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);

    const incrementHandler = () => {
        dispatch(actions.increment());
    };

    const decrementHandler = () => {
        dispatch(actions.decrement());
    };

    return (
        <div className="App">
            <h1>Counter</h1>
            <h2>{counter}</h2>

            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
        </div>
    );
}

export default App;
