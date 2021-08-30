import Counter from "./Counter";
import React, {useState} from "react";

export default function Dish (props) {
  const {dishImg, dishAlt, dishName, description, price, index, type, setSelectedDishes, selectedDishes, enableButton} = props;

  const [dish, setDish] = useState("");
  const [status, setStatus] = useState(false);
  const [counter, setCounter] = useState(1);

  let infos;

  function select () {
    if (dish === "") {
      setDish("highlight");
      setCounter(1);
      setStatus(() => true);
      let newPrice = Number(price.replace(/,/g, '.'));
      infos = {dishName, newPrice, counter, status, index, type};
      setSelectedDishes([...selectedDishes, infos]);
      enableButton([...selectedDishes, infos]);
    }
  }

  function removeCurrentDish (thisDish) {
    if(thisDish.dishName === dishName) {
      thisDish.counter = counter - 1
      let newPrice = Number(price.replace(/,/g, '.')).toFixed(2);
      thisDish.newPrice -= newPrice
    }
  }

  function decreaseAmount (event) {
    event.stopPropagation();
    setCounter(counter - 1);
    if (counter === 1) {
      setDish("");
      setStatus(() => false);
      const newArray = selectedDishes.filter(function (e) {
        return e.dishName !==  dishName
      })
      setSelectedDishes(newArray);
      enableButton(newArray);
    }

    if (counter >= 2) {
      selectedDishes.forEach(removeCurrentDish)
      setSelectedDishes([...selectedDishes]);
      enableButton([...selectedDishes]);
    }
  }

  function addCurrentDish (thisDish) {
    if (thisDish.dishName === dishName) {
      thisDish.counter = counter + 1;
      let newPrice = Number(price.replace(/,/g, '.'));
      thisDish.newPrice += newPrice;
    }
  }

  function increaseAmount (event) {
    event.stopPropagation();
    setCounter(counter + 1);
    selectedDishes.forEach(addCurrentDish)
    setSelectedDishes([...selectedDishes])
    enableButton([...selectedDishes], infos);
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