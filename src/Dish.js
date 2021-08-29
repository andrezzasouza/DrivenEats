import Counter from "./Counter";
import React, {useState} from "react";

export default function Dish (props) {

  const {dishImg, dishAlt, dishName, description, price, index, type, setSelectedDishes, selectedDishes, enableButton} = props;

  console.log("key", props.index)

  const [dish, setDish] = useState("");
  const [status, setStatus] = useState(false);
  const [counter, setCounter] = useState(1);

  console.log("status", status)
  let infos;

  function select (index) {
    
    console.log(status)

    if (dish === "") {
      setDish("highlight");
      setCounter(1);
      setStatus(() => true);
      console.log("status", status)
    }
    infos = {dishName, price, counter, status, index, type};
    setSelectedDishes([...selectedDishes, infos]);
    enableButton();
  }

  console.log(selectedDishes)

  function decreaseAmount () {
    setCounter(counter - 1);
    if (counter === 1) {
      setDish("");
      setStatus(() => false);
      selectedDishes.filter(function (e) {
        return e.dishName !==  dishName
      }
    )
    }

    if (counter >= 2) {
      // reduce current amount in array
    }
    
  }

  function increaseAmount () {
    setCounter(counter + 1);
    if (counter >= 1) {
      // increase current amount in array
    }
  }

  return (
    <button className={`food-box ${dish}`} onClick={() => select(index)}>
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