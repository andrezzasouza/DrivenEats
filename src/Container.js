import Options from "./Options";

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

export default function Container () {
  return (
    <div className="container">
      {categories.map((category, index) => <Options category={category} array={typeOfDish[index]} key={index} type={type[index]} />)}
    </div>
  );
}