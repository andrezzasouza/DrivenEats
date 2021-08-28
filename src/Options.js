import Dish from "./Dish";

export default function Options (props) {

  return(
    <div class="options">
      <h2>{props.category}</h2>
      <div className={props.type}>
      {props.array.map(dish => <Dish dishImg={dish.dishImg} dishAlt={dish.dishAlt} dishName={dish.dishName} description={dish.description} price={dish.price} />)}
      </div>
    </div>
  );
}