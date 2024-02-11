import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classes from "./FilterMeals.module.css";
const FilterMeals = (props) => {
  const [keyword, setKeyword] = useState("");
  const inputKeyWord = (e) => {
    setKeyword(e.target.value.trim());
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      props.onFilter(keyword);
    }, 1000);
    return () => {
      clearTimeout(timer);
    }; 
  }, [keyword,props]);
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
