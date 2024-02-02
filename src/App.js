import { useState } from "react";
import classes from "./App.module.css";
import Meals from "./Components/Meals/Meals";
import data from "./Data";
function App() {
  const [mealsData, setMealsData] = useState(data);
  return (
    <div className={classes.App}>
      <Meals mealsData={mealsData} />
    </div>
  );
}

export default App;
