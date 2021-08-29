import Dish from "./Dish";

export default function Options (props) {

  return(
    <div className="options">
      <h2>{props.category}</h2>
      <div className={props.type}>
      {props.array.map((dish, index) => 
        <Dish 
          dishImg={dish.dishImg} 
          dishAlt={dish.dishAlt} 
          dishName={dish.dishName} 
          description={dish.description} 
          price={dish.price} 
          key={index}
          index={index}
          type={props.type}
          setSelectedDishes = {props.setSelectedDishes}
          selectedDishes= {props.selectedDishes}
          enableButton={props.enableButton}
          // counter={props.counter} 
          // increaseAmount={props.increaseAmount} 
          // decreaseAmount={props.decreaseAmount}
          // select={props.select}
          // dish={props.dish}
        />
      )}
      </div>
    </div>
  );
}