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
      infos = {dishName, price, counter, status, index, type};
      setSelectedDishes([...selectedDishes, infos]);
    }
    
    enableButton();
  }

  console.log("sD out", selectedDishes)

  function removeCurrentDish (thisDish) {
    console.log("tD", thisDish);
    if(thisDish.dishName === dishName) {
      thisDish.counter = counter - 1
    }
  }

  function decreaseAmount (event) {
    event.stopPropagation();
    setCounter(counter - 1);
    if (counter === 1) {
      setDish("");
      setStatus(() => false);
      setSelectedDishes(selectedDishes.filter(function (e) {
        return e.dishName !==  dishName
      })
      )  
      console.log("sD in", selectedDishes)
    }

    if (counter >= 2) {
      selectedDishes.forEach(removeCurrentDish)
      setSelectedDishes([...selectedDishes])
    }
    enableButton();
  }

  function addCurrentDish (thisDish) {
    console.log("tD", thisDish);
    if (thisDish.dishName === dishName) {
      thisDish.counter = counter + 1;
    }
  }

  function increaseAmount (event) {
    event.stopPropagation();
    setCounter(counter + 1);
    console.log("here")
    selectedDishes.forEach(addCurrentDish)
    setSelectedDishes([...selectedDishes])
    enableButton();
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