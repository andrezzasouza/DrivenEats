export default function Dish () {
  return (
    <button class="food-box" onclick="selectFood(this);">
      <img src="./img/atleta.jpg" alt="" />
      <p class="name-dish">Salada Atleta</p>
      <p class="description">Frango, espinafre e batata doce</p>
      <div class="price-and-check">
        <p>R$ <span class="price">22,90</span></p>
        <ion-icon name="checkmark-circle" class="check"></ion-icon>
      </div>
    </button>
  );
}