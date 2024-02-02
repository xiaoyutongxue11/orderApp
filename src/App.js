import { useState } from "react";
import classes from "./App.module.css";
import Meals from "./Components/Meals/Meals";
import data from "./Data";
function App() {
  const [mealsData, setMealsData] = useState(data);
  const [foodsData, setFoodsData] = useState({
    foods: [],
    totalAmount: 0,
    totalPrice: 0,
  });
  const addMealHandler = (meal) => {
    const newFoodsData = { ...foodsData };
    if (newFoodsData.foods.indexOf(meal) === -1) {
      newFoodsData.foods.push(meal);
      meal.amount = 1;
    } else {
      meal.amount += 1;
    }
    newFoodsData.totalAmount += 1;
    newFoodsData.totalPrice += meal.price;
    setFoodsData(newFoodsData);
    console.log(mealsData);
  };
  const subMealHandler = (meal) => {
    const newFoodsData = { ...foodsData };
    meal.amount -= 1;
    if (meal.amount === 0) {
      newFoodsData.foods.splice(newFoodsData.foods.indexOf(meal), 1);
    }
    newFoodsData.totalAmount -= 1;
    newFoodsData.totalPrice -= meal.price;
    setFoodsData(newFoodsData);
  };
  return (
    <div className={classes.App}>
      <Meals mealsData={mealsData} onAddMeal={addMealHandler} onSubMeal={subMealHandler}/>
    </div>
  );
}

export default App;
