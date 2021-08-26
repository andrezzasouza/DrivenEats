export default function ConfirmOrder () {
  return (
    <div class="confirm hidden">
      <div class="order-box">
        <p class="order-title">Confirme seu pedido</p>
        <div class="placeholders">
          <p class="desired-food">placeholder</p>
          <p class="food-cost">value</p>
        </div>
        <div class="placeholders">
          <p class="desired-drink">placeholder</p>
          <p class="drink-cost">value</p>
        </div>
        <div class="placeholders">
          <p class="desired-dessert">placeholder</p>
          <p class="dessert-cost">value</p>
        </div>
        <div class="placeholders total">
          <p>TOTAL</p>
          <p class="total-cost">value</p>
        </div>
        <button class="confirm-button" onclick="placeOrder();">
          <p>Tudo certo, pode pedir!</p>
        </button>
        <button class="cancel" onclick="cancelOrder();">
          <p>Cancelar</p>
        </button>
      </div>
    </div>
  )
}