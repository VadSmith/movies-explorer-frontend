import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="filter-checkbox__container">
      <p className="filter-checkbox__text">Короткометражки</p>
      <input
        className="filter-checkbox__input opacity"
        type="checkbox"
      />
    </div>
  );
}

export default FilterCheckbox;
