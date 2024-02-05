import { useState } from "react";
import classes from "./App.module.css";
import Meals from "./Components/Meals/Meals";
import data from "./data";
import ShopCarContext from "./store/shopCarContext.js";
import FilterMeals from "./Components/FilterMeals/FilterMeals.js";
import ShoppingCar from "./Components/ShoppingCar/ShoppingCar.js";
function App() {
  const [mealsData, setMealsData] = useState(data);
  const [foodsData, setFoodsData] = useState({
    foods: [
      {
        id: "765",
        title: "汉堡鸡柳",
        desc: "高峰时段的客户法律手段火箭分离的考生供奉的是",
        price: 44,
        img: "/img/meals/3.jpg",
      },
      {
        id: "425",
        title: "奶油双层汉堡",
        desc: "发生的夫斯基的老客户介绍的了",
        price: 65,
        img: "/img/meals/4.jpg",
      },
      {
        id: "969",
        title: "夹肉汉堡",
        desc: "官方的解释就开始大量几乎是快乐和付款了时间",
        price: 14,
        img: "/img/meals/5.jpg",
      },
      {
        id: "143",
        title: "芝士汉堡",
        desc: "昆仑山地方就会考虑时间很快和军事对抗联合开发",
        price: 32,
        img: "/img/meals/6.jpg",
      },
      {
        id: "986",
        title: "汉堡包全家桶",
        desc: "今天有空未来软件园了我竟然用了结婚礼服款式和技术弗兰克回馈积分",
        price: 123,
        img: "/img/meals/7.jpg",
      },
    ],
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
  return (
    <ShopCarContext.Provider
      value={{ ...foodsData, addMealHandler, subMealHandler }}
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
