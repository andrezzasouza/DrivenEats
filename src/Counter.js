// import React, {useState} from "react";


export default function Counter (props) {

    console.log(props)

    // const [counter, setCounter] = useState(1);
    return (
        <div className="counter">
            <button className="minus" onClick={props.decreaseAmount}>-</button>
            <div className="value">{props.counter}</div>
            <button className="plus" onClick={props.increaseAmount}>+</button>
        </div>
    );
}