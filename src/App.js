import { useState } from "react";
import classes from "./App.module.css";
import Meals from "./Components/Meals/Meals";
import data from "./data";
import ShopCarContext from "./store/shopCarContext.js";
import FilterMeals from "./Components/FilterMeals/FilterMeals.js";
import ShoppingCar from "./Components/ShoppingCar/ShoppingCar.js";
function App() {
  //商品列表
  const [mealsData, setMealsData] = useState(data);
  //购物车商品列表
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
  const filterMeals = (keyWord) => {
    const filterData = data.filter(
      (item) => item.title.indexOf(keyWord) !== -1
    );
    setMealsData(filterData);
  };
  const clearMealHandler = () => {
    const newFoodsData = { ...foodsData };
    newFoodsData.foods.forEach((item) => delete item.amount);
    newFoodsData.foods = [];
    newFoodsData.totalAmount = 0;
    newFoodsData.totalPrice = 0;
    setFoodsData(newFoodsData);
  };
  return (
    <ShopCarContext.Provider
      value={{ ...foodsData, addMealHandler, subMealHandler, clearMealHandler }}
    >
      <div className={classes.App}>
        <FilterMeals onFilter={filterMeals} />
        <Meals mealsData={mealsData} />
        <ShoppingCar />
      </div>
    </ShopCarContext.Provider>
  );
}

export default App;
