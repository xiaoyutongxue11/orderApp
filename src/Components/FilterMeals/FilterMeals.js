import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classes from "./FilterMeals.module.css";
const FilterMeals = (props) => {
  const inputKeyWord = (e) => {
    props.onFilter(e.target.value.trim());
  };
  return (
    <div className={classes.FilterMeals}>
      <div className={classes.SearchOuter}>
        <FontAwesomeIcon
          className={classes.SearchIcon}
          icon={faSearch}
        ></FontAwesomeIcon>
        <input
          onChange={inputKeyWord}
          className={classes.SearchInput}
          type="text"
          placeholder="请输入关键字"
        />
      </div>
    </div>
  );
};

export default FilterMeals;
