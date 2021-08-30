export default function Counter (props) {

    return (
        <div className="counter">
            <button className="minus" onClick={(action) => props.decreaseAmount(action)}>-</button>
            <div className="value">{props.counter}</div>
            <button className="plus" onClick={(action) => props.increaseAmount(action)}>+</button>
        </div>
    );
}