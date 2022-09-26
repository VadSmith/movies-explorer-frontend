import React, { useEffect, useCallback, useState } from 'react';
import "./FilterCheckbox.css";

function FilterCheckbox({ isShortChecked, setIsShortChecked, checkBoxChange }) {
  // debugger
  // const checkBox = document.querySelector(".filter-checkbox__input");
  // checkBox.defaultChecked = isShortChecked;
  // const [isShort, setIsShort] = useState(isShortChecked);
  // useEffect(() => {
  //   setIsShortChecked = localStorage.getItem('isShortChecked')
  // }, [])

  console.log('isShortChecked', isShortChecked)
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
