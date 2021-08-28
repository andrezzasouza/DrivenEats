export default function Dish (props) {

  const {dishImg, dishAlt, dishName, description, price} = props;
  
  return (
    <button class="food-box" onclick="selectFood(this);">
      <img src={dishImg} alt={dishAlt} />
      <p className="name-dish">{dishName}</p>
      <p className="description">{description}</p>
      <div className="price-and-check">
        <p>R$ <span className="price">{price}</span></p>
        <ion-icon name="checkmark-circle" className="check"></ion-icon>
      </div>
    </button>
  );
}