import classes from "./App.module.css";
import Meals from "./Components/Meals/Meals";
function App() {
  return (
    <div className={classes.App}>
      <Meals/>
    </div>
  );
}

export default App;
