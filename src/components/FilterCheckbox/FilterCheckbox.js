import React from 'react';
import "./FilterCheckbox.css";

function FilterCheckbox({ isShortChecked, checkBoxChange }) {
  return (
    <div className="filter-checkbox__container">
      <p className="filter-checkbox__text">Короткометражки</p>
      <input
        className="filter-checkbox__input opacity"
        type="checkbox"
        checked={isShortChecked}
        onChange={checkBoxChange}
      />
    </div>
  );
}

export default FilterCheckbox;
