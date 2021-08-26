import Dish from "./Dish";

export default function Options () {
  return(
    <div class="options">
      <h2>Primeiro, seu prato</h2>
      <div class="food-scroll">
        <Dish />
        <button class="food-box" onclick="selectFood(this);">
          <img src="./img/farfalle-salmao.jpg" alt="" />
          <p class="name-dish">Farfalle e salmão</p>
          <p class="description">O nome já diz: farfalle e salmão</p>
          <div class="price-and-check">
            <p>R$ <span class="price">26,90</span></p>
            <ion-icon name="checkmark-circle" class="check"></ion-icon>
          </div>
        </button>
        <button class="food-box" onclick="selectFood(this);">
          <img src="./img/torta-brocolis.jpg" alt="" />
          <p class="name-dish">Torta de brócolis</p>
          <p class="description">Vegana, saudável e deliciosa</p>
          <div class="price-and-check">
            <p>R$ <span class="price">17,90</span></p>
            <ion-icon name="checkmark-circle" class="check"></ion-icon>
          </div>
        </button>
      </div>
    </div>
  );
}