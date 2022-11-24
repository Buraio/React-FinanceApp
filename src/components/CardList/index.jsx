import React from "react";
import "./cardList.css";

const CardList = ({ children }) => {
  return <ul id="entryList">{children}</ul>;
};

export default CardList;
