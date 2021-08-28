// import disthType from "./dishType";
import Dish from "./Dish";

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

// const typeOfDish = [
//   {
//     foodInfo: [
//       {
//         dishImg: "./img/atleta.jpg",
//         dishAlt: "Imagem da salada Atleta",
//         dishName: "Salada Atleta",
//         description: "Frango, espinafre e batata doce",
//         price: "22,90"
//       },
//       {
//         dishImg: "./img/farfalle-salmao.jpg",
//         dishAlt: "Imagem do farfalle com salmão",
//         dishName: "Farfalle e salmão",
//         description:"O nome já diz: farfalle e salmão",
//         price: "26,90"
//       },
//       {
//         dishImg: "./img/torta-brocolis.jpg",
//         dishAlt: "Imagem da torta de brócolis",
//         dishName: "Torta de brócolis",
//         description: "Vegana, saudável e deliciosa",
//         price: "17,90"
//       }
//     ],
//     drinkInfo: [
//       {
//         dishImg: "./img/suco-melancia.jpg",
//         dishAlt: "Imagem do suco de melancia",
//         dishName: "Suco de melancia",
//         description: "Copo 350ml",
//         price: "5,90"
//       },
//       {
//         dishImg: "./img/suco-uva.jpg",
//         dishAlt: "Imagem do suco de uva",
//         dishName: "Suco de uva",
//         description: "Copo 350ml",
//         price: "8,90"
//       },
//       {
//         dishImg: "./img/suco-acerola.jpg",
//         dishAlt: "Imagem do suco de acerola",
//         dishName: "Suco de acerola",
//         description: "Copo 350ml",
//         price: "6,90"
//       }
//     ],
//     dessertInfo: [
//       {
//         dishImg: "./img/torta-alema.jpg",
//         dishAlt: "Imagem da torta alemã",
//         dishName: "Torta alemã",
//         description: "Direto da Alemenha pro coração",
//         price: "10,90"
//       },
//       {
//         dishImg: "./img/torta-branca.jpg",
//         dishAlt: "Imagem da torta branca",
//         dishName: "Torta branca",
//         description: "Chocolate branco e tudo que há de bom",
//         price: "8,90"
//       },
//       {
//         dishImg: "./img/red-velvet.jpg",
//         dishAlt: "Image da Red Velvet",
//         dishName: "Red Velvet",
//         description: "Chocolate e muito cream cheese",
//         price: "15,90"
//       }
//     ]
//   }
// ]


const typeOfDish = [foodInfo, drinkInfo, dessertInfo]

export default function Options (props) {

  // let dishType = "";
  // let type = "food-scroll"

  // if (type === "food-scroll") {
  //   dishType = <Dish dishImg={foodInfo.dishImg} dishAlt={foodInfo.dishAlt} dishName={foodInfo.dishName} description={foodInfo.description} price={foodInfo.price} />;
  // } else if (type === "drink-scroll") {
  //   dishType = <Dish dishImg={drinkInfo.dishImg} dishAlt={drinkInfo.dishAlt} dishName={drinkInfo.dishName} description={drinkInfo.description} price={drinkInfo.price} />
  // } else if (type === "dessert-scroll") {
  //   dishType = <Dish dishImg={dessertInfo.dishImg} dishAlt={dessertInfo.dishAlt} dishName={dessertInfo.dishName} description={dessertInfo.description} price={dessertInfo.price} />
  // }

  return(
    <div class="options">
      <h2>{props.category}</h2>
      <div class="food-scroll">
      {typeOfDish.map(dish => dish.map(catDish => <Dish dishImg={catDish.dishImg} dishAlt={catDish.dishAlt} dishName={catDish.dishName} description={catDish.description} price={catDish.price} />))}
      {/* {typeOfDish.map(food => <Dish dishImg={food.dishImg} dishAlt={typeOfDish.dishAlt} dishName={typeOfDish.dishName} description={typeOfDish.description} price={typeOfDish.price} />)} */}
      </div>
    </div>
  );
}