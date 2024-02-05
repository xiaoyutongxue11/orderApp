import React from "react";
const ShopCarContext = React.createContext({
  foods: [],
  totalAmount: 0,
  totalPrice: 0,
  addMealHandler: () => {},
  subMealHandler: () => {},
});
export default ShopCarContext;
