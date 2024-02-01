//食物信息
import React from "react";
import classes from "./Meal.module.css";
const Meal = () => {
  return (
    <div className={classes.Meal}>
      <div className={classes.ImgBox}>
        <img alt="" src="/img/meals/1.jpg"></img>
      </div>
      <div>
        <h2 className={classes.Title}>汉堡包</h2>
        <p>电视剧的客户给发的啥金康光哈干哈金康光好的很发达数据库</p>
        <div className={classes.PriceWrap}>
          <span className={classes.Price}>23</span>
          <div>数量</div>
        </div>
      </div>
    </div>
  );
};

export default Meal;
