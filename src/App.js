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
  const foodAmount = [];
  const drinkArray = [];
  const drinkAmount = [];
  const dessertArray = [];
  const dessertAmount = [];
  const totalPrice = [];
  

  function checkCategory(thisDish) {
    // console.log("thisdishapp", thisDish)
    if (thisDish === undefined) {
      food = false;
      drink = false;
      dessert = false;
    } else if (thisDish.type === "food-scroll") {
      foodArray.push(thisDish.dishName);
      foodAmount.push(thisDish.counter);
      totalPrice.push(thisDish.newPrice);
      food = true;
    } else if (thisDish.type === "drink-scroll") {
      drinkArray.push(thisDish.dishName);
      drinkAmount.push(thisDish.counter);
      totalPrice.push(thisDish.newPrice);
      drink = true;
    } else if (thisDish.type === "dessert-scroll") {
      dessertArray.push(thisDish.dishName);
      dessertAmount.push(thisDish.counter);
      totalPrice.push(thisDish.newPrice);
      dessert = true;
    }
  }

  updatedArray.forEach(checkCategory);

  console.log("fA", foodArray);
  console.log("drinkA", drinkArray);
  console.log("dessertA", dessertArray);
  console.log("price", totalPrice)

  console.log("uA", updatedArray)
  console.log("s1", food);
  console.log("s2", drink);
  console.log("s3", dessert);
  
  function enableButton (array) {
    console.log("s4", food);
    console.log("s5", drink);
    console.log("s6", dessert);

    array.forEach(checkCategory);
    console.log("array", array)
    
    if (food === true && drink === true && dessert === true) {
      setButton("order-in-progress order-ready");
      setText(readyText);
    } else {
      setButton("order-in-progress");
      setText(originalText);
    }
  }

  function placeOrder () {
    
    let msgFood = foodArray.map((e) => `- Prato: ${e}`);
    let foodQtt = foodAmount.map((e) => (e === 1 ? `\n` : `${e}x\n`));
    let msgDrink = drinkArray.map((e) => `- Bebida: ${e}`);
    let drinkQtt = drinkAmount.map((e) => (e === 1 ? `\n` : `${e}x\n`));
    let msgDessert = dessertArray.map((e) => `- Sobremesa: ${e}`);
    let dessertQtt = dessertAmount.map((e) => (e === 1 ? `\n` : `${e}x\n`))
    let total = totalPrice.map((e) => e)
    let sum = 0;

    function sumPrices(e) {
      sum += e;
    }

    total.forEach(sumPrices);

    const messageWpp = window.encodeURIComponent(`Olá, gostaria de fazer o pedido:\n${msgFood} ${foodQtt}\n${msgDrink} ${drinkQtt}\n${msgDessert} ${dessertQtt}\nTotal: R$ ${sum.toFixed(2)}`);
    window.location.href = "https://wa.me/5521990867634?text=" + messageWpp;
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
        // counter={counter}
        // decreaseAmount={decreaseAmount}
        // increaseAmount={increaseAmount}
        // select={select}
        // dish={dish}
      />
      <FooterMenu 
        button={button} 
        enableButton={enableButton} 
        placeOrder={placeOrder}
        text={text} 
        // buttonStatus={buttonStatus}
      />
    </>
  );
}