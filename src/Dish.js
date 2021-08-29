import React, {useState} from "react";
import Counter from "./Counter";

export default function Dish (props) {

  const {dishImg, dishAlt, dishName, description, price} = props;

  const [dish, setDish] = useState("");
  const [status, setStatus] = useState(false);
  const [counter, setCounter] = useState(1);

  function select () {
    setStatus(() => !status);

    if (dish === "") {
      setDish("highlight");
      setCounter(1);
    }
  }

  function decreaseAmount () {
    setCounter(counter - 1);
    if (counter === 1) {
      setDish("");
    }
    
  }

  function increaseAmount () {
    setCounter(counter + 1);
  }
  
  return (
    <button className={`food-box ${dish}`} onClick={select}>
      <img src={dishImg} alt={dishAlt} />
      <p className="name-dish">{dishName}</p>
      <p className="description">{description}</p>
      <div className="price-and-check">
        <p>R$ <span className="price">{price}</span></p>
        <Counter counter={counter} decreaseAmount={decreaseAmount} increaseAmount={increaseAmount} />
      </div>
    </button>
  );
}