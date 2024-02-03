import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classes from "./FilterMeals.module.css";
const FilterMeals = () => {
  return (
    <div className={classes.FilterMeals}>
      <div className={classes.SearchOuter}>
        <FontAwesomeIcon
          className={classes.SearchIcon}
          icon={faSearch}
        ></FontAwesomeIcon>
        <input
          className={classes.SearchInput}
          type="text"
          placeholder="请输入关键字"
        />
      </div>
    </div>
  );
};

export default FilterMeals;
