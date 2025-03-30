import { useState } from 'react';

function MyHook() {
    const [count, setCount] = useState(0);

    const increament = () => {
        setCount(count + 1);
    }
    const decreament = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0)
    }
    return (
        <div className="countContainer">
            <div className="countDisplay">
                <p>{count}</p>
            </div>
            <div className="btnContainer">
                <button type="button" onClick={increament}>Increament</button>
                <button type="button" onClick={reset}>Reset </button>
                <button type="button" onClick={decreament}>Decreament</button>
            </div>
        </div>
    );
};

export default MyHook