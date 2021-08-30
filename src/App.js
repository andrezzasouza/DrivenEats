import Header from "./Header";
import Container from "./Container";
import FooterMenu from "./FooterMenu";

import React, {useState} from "react";

const categories = ["Primeiro, seu prato", "Agora, sua bebida", "Por fim, sua sobremesa"]

const foodInfo = [
  {
    dishImg: "./img/atleta.jpg",
    dishAlt: "Imagem da salada Atleta",
    dishName: "Salada Atleta",
    description: "Frango, espinafre e batata doce",
    price: "22,90"
  },
  {
    dishImg: "./img/farfalle-salmao.jpg",
    dishAlt: "Imagem do farfalle com salmão",
    dishName: "Farfalle e salmão",
    description:"O nome já diz: farfalle e salmão",
    price: "26,90"
  },
  {
    dishImg: "./img/torta-brocolis.jpg",
    dishAlt: "Imagem da torta de brócolis",
    dishName: "Torta de brócolis",
    description: "Vegana, saudável e deliciosa",
    price: "17,90"
  }
]

const drinkInfo = [
  {
    dishImg: "./img/suco-melancia.jpg",
    dishAlt: "Imagem do suco de melancia",
    dishName: "Suco de melancia",
    description: "Copo 350ml",
    price: "5,90"
  },
  {
    dishImg: "./img/suco-uva.jpg",
    dishAlt: "Imagem do suco de uva",
    dishName: "Suco de uva",
    description: "Copo 350ml",
    price: "8,90"
  },
  {
    dishImg: "./img/suco-acerola.jpg",
    dishAlt: "Imagem do suco de acerola",
    dishName: "Suco de acerola",
    description: "Copo 350ml",
    price: "6,90"
  }
]

const dessertInfo = [
  {
    dishImg: "./img/torta-alema.jpg",
    dishAlt: "Imagem da torta alemã",
    dishName: "Torta alemã",
    description: "Direto da Alemenha pro coração",
    price: "10,90"
  },
  {
    dishImg: "./img/torta-branca.jpg",
    dishAlt: "Imagem da torta branca",
    dishName: "Torta branca",
    description: "Chocolate branco e tudo que há de bom",
    price: "8,90"
  },
  {
    dishImg: "./img/red-velvet.jpg",
    dishAlt: "Image da Red Velvet",
    dishName: "Red Velvet",
    description: "Chocolate e muito cream cheese",
    price: "15,90"
  }
]

const typeOfDish = [foodInfo, drinkInfo, dessertInfo]

const type = ["food-scroll", "drink-scroll", "dessert-scroll"]

export default function App () {

  return (
    <AppContents />
  );
}

let food = false;
let drink = false;
let dessert = false;
 
function AppContents () {

  const [selectedDishes, setSelectedDishes] = useState([]);

  const originalText = "Selecione os 3 itens para fechar o pedido";
  const readyText = "Fechar pedido"

  const [button, setButton] = useState("order-in-progress");
  const [text, setText] = useState(originalText);

  let updatedArray = [...selectedDishes]

  const foodArray = [];
  const drinkArray = [];
  const dessertArray = [];
  const totalPrice = [];
  let foodObject = {}
  let drinkObject = {}
  let dessertObject = {}
  

  function checkCategory(thisDish) {
    if (thisDish === undefined) {
      food = false;
      drink = false;
      dessert = false;
    } else if (thisDish.type === "food-scroll") {
      foodObject = {name: thisDish.dishName, amount: thisDish.counter}
      foodArray.push(foodObject);
      totalPrice.push(thisDish.newPrice);
      food = true;
    } else if (thisDish.type === "drink-scroll") {
      drinkObject = {name: thisDish.dishName, amount: thisDish.counter}
      drinkArray.push(drinkObject);
      totalPrice.push(thisDish.newPrice);
      drink = true;
    } else if (thisDish.type === "dessert-scroll") {
      dessertObject = {name: thisDish.dishName, amount: thisDish.counter}
      dessertArray.push(dessertObject);
      totalPrice.push(thisDish.newPrice);
      dessert = true;
    }
  }

  updatedArray.forEach(checkCategory);
  
  function enableButton (array) {
    array.forEach(checkCategory);
    
    if (food === true && drink === true && dessert === true) {
      setButton("order-in-progress order-ready");
      setText(readyText);
    } else {
      setButton("order-in-progress");
      setText(originalText);
    }
  }

  function placeOrder () {
    
    let msgFood = foodArray.map((e) => (e.amount === 1 ? `\n- Prato: ${e.name}` : `\n- Prato: ${e.name} ${e.amount}x`));
    let msgDrink = drinkArray.map((e) => (e.amount === 1 ? `\n- Prato: ${e.name}` : `\n- Prato: ${e.name} ${e.amount}x`))
    let msgDessert = dessertArray.map((e) => (e.amount === 1 ? `\n- Bebida: ${e.name}` : `\n- Bebida: ${e.name} ${e.amount}x`));
    let total = totalPrice.map((e) => e)
    let sum = 0;

    function sumPrices(e) {
      sum += e;
    }

    total.forEach(sumPrices);

    let messageWpp = `Olá, gostaria de fazer o pedido:${msgFood} ${msgDrink} ${msgDessert}\nTotal: R$ ${sum.toFixed(2)}`;
    messageWpp = messageWpp.replace(/,/g, '');

    const sendMessage = window.encodeURIComponent(messageWpp);
    window.location.href = "https://wa.me/5521982304475?text=" + sendMessage;
  }

  return (
    <>
      <Header />
      <Container 
        typeOfDish={typeOfDish}
        type={type}
        categories={categories}
        foodInfo={foodInfo}
        drinkInfo={drinkInfo}
        dessertInfo={dessertInfo}
        setSelectedDishes= {setSelectedDishes}
        selectedDishes= {selectedDishes}
        enableButton={enableButton}

      />
      <FooterMenu 
        button={button} 
        placeOrder={placeOrder}
        text={text} 
      />
    </>
  );
}