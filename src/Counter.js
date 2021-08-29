export default function Counter (props) {

    return (
        <div className="counter">
            <button className="minus" onClick={props.decreaseAmount}>-</button>
            <div className="value">{props.counter}</div>
            <button className="plus" onClick={props.increaseAmount}>+</button>
        </div>
    );
}