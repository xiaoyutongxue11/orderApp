import { useReducer, useState } from "react";
import classes from "./App.module.css";
import Meals from "./Components/Meals/Meals";
import data from "./data";
import ShopCarContext from "./store/shopCarContext.js";
import FilterMeals from "./Components/FilterMeals/FilterMeals.js";
import ShoppingCar from "./Components/ShoppingCar/ShoppingCar.js";
const carReducer = (carData, action) => {
  const newCarData = { ...carData };
  switch (action.type) {
    default:
      return carData;
    case "ADD":
      if (newCarData.foods.indexOf(action.meal) === -1) {
        newCarData.foods.push(action.meal);
        action.meal.amount = 1;
      } else {
        action.meal.amount += 1;
      }
      newCarData.totalAmount += 1;
      newCarData.totalPrice += action.meal.price;
      return newCarData;
    case "SUB":
      action.meal.amount -= 1;
      if (action.meal.amount === 0) {
        newCarData.foods.splice(newCarData.foods.indexOf(action.meal), 1);
      }
      newCarData.totalAmount -= 1;
      newCarData.totalPrice -= action.meal.price;
      return newCarData;
    case "CLEAR":
      newCarData.foods.forEach((item) => delete item.amount);
      newCarData.foods = [];
      newCarData.totalAmount = 0;
      newCarData.totalPrice = 0;
      return newCarData;
  }
};
function App() {
  //商品数据
  const [mealsData, setMealsData] = useState(data);
  //购物车数据
  const [carData, carDataDispatch] = useReducer(carReducer, {
    foods: [],
    totalAmount: 0,
    totalPrice: 0,
  });
  const filterMeals = (keyWord) => {
    const filterData = data.filter(
      (item) => item.title.indexOf(keyWord) !== -1
    );
    setMealsData(filterData);
  };
  return (
    <ShopCarContext.Provider value={{ ...carData, carDataDispatch }}>
      <div className={classes.App}>
        <FilterMeals onFilter={filterMeals} />
        <Meals mealsData={mealsData} />
        <ShoppingCar />
      </div>
    </ShopCarContext.Provider>
  );
}

export default App;
