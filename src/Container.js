import Options from "./Options";

export default function Container () {
  return (
    <div class="container">
      <Options />
      <div class="options">
        <h2>Agora, sua bebida</h2>
        
        <div class="drink-scroll">
          <button class="food-box" onclick="selectDrink(this);">
            <img src="./img/suco-melancia.jpg" alt="" />
            <p class="name-dish">Suco de melancia</p>
            <p class="description">Copo 350ml</p>
            <div class="price-and-check">
              <p>R$ <span class="price">5,90</span></p>
              <ion-icon name="checkmark-circle" class="check"></ion-icon>
            </div>
          </button>
          <button class="food-box" onclick="selectDrink(this);">
              <img src="./img/suco-uva.jpg" alt="" />
              <p class="name-dish">Suco de uva</p>
              <p class="description">Copo 350ml</p>
              <div class="price-and-check">
                  <p>R$ <span class="price">8,90</span></p>
                  <ion-icon name="checkmark-circle" class="check"></ion-icon>
              </div>
          </button>
          <button class="food-box" onclick="selectDrink(this);">
              <img src="./img/suco-acerola.jpg" alt="" />
              <p class="name-dish">Suco de acerola</p>
              <p class="description">Copo 350ml</p>
              <div class="price-and-check">
                  <p>R$ <span class="price">6,90</span></p>
                  <ion-icon name="checkmark-circle" class="check"></ion-icon>
              </div>
          </button>
        </div>
      </div>
      <div class="options">
        <h2>Por fim, sua sobremesa</h2>
        <div class="dessert-scroll">
                <button class="food-box" onclick="selectDessert(this);">
                    <img src="./img/torta-alema.jpg" alt="" />
                    <p class="name-dish">Torta alemã</p>
                    <p class="description">Direto da Alemenha pro coração</p>
                    <div class="price-and-check">
                        <p>R$ <span class="price">10,90</span></p>
                        <ion-icon name="checkmark-circle" class="check"></ion-icon>
                    </div>
                </button>
                <button class="food-box" onclick="selectDessert(this);">
                    <img src="./img/torta-branca.jpg" alt="" />
                    <p class="name-dish">Torta branca</p>
                    <p class="description">Chocolate branco e tudo que há de bom</p>
                    <div class="price-and-check">
                        <p>R$ <span class="price">8,90</span></p>
                        <ion-icon name="checkmark-circle" class="check"></ion-icon>
                    </div>
                </button>
                <button class="food-box" onclick="selectDessert(this);">
                    <img src="./img/red-velvet.jpg" alt="" />
                    <p class="name-dish">Red Velvet</p>
                    <p class="description">Chocolate e muito cream cheese</p>
                    <div class="price-and-check">
                        <p>R$ <span class="price">15,90</span></p>
                        <ion-icon name="checkmark-circle" class="check"></ion-icon>
                    </div>
                </button>
            </div>
        </div>
    </div>
  );
}