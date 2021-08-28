export default function Dish (props) {

  console.log("dish", props)

  // const {dishImg, dishAlt, dishName, description, price} = props;
  
  return (
    <button class="food-box" onclick="selectFood(this);">
      <img src={props.dishImg} alt={props.dishAlt} />
      <p className="name-dish">{props.dishName}</p>
      <p className="description">{props.description}</p>
      <div className="price-and-check">
        <p>R$ <span class="price">{props.price}</span></p>
        <ion-icon name="checkmark-circle" class="check"></ion-icon>
      </div>
    </button>
  );
}