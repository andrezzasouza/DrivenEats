import Options from "./Options";

export default function Container (props) {
  return (
    <div className="container">
      {props.categories.map((category, index) => 
        <Options 
        category={category} 
        array={props.typeOfDish[index]} 
        key={index} 
        type={props.type[index]} 
        setSelectedDishes = {props.setSelectedDishes}
        selectedDishes= {props.selectedDishes}
        enableButton={props.enableButton}
      />)}
    </div>
  );
}