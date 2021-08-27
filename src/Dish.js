export default function Dish (props) {

  const {dishImg, dishAlt, dishName, description, price} = props;
  
  return (
    <button class="food-box" onclick="selectFood(this);">
      <img src={dishImg} alt={dishAlt} />
      <p class="name-dish">{dishName}</p>
      <p class="description">{description}</p>
      <div class="price-and-check">
        <p>R$ <span class="price">{price}</span></p>
        <ion-icon name="checkmark-circle" class="check"></ion-icon>
      </div>
    </button>
  );
}