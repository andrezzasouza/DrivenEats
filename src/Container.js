import Options from "./Options";

const categories = ["Primeiro, seu prato", "Agora, sua bebida", "Por fim, sua sobremesa"]

// const type = ["food-scroll", "drink-scroll", "dessert-scroll"]

export default function Container () {
  return (
    <div class="container">
      {categories.map(category => <Options category={category} />)}
    </div>
  );
}