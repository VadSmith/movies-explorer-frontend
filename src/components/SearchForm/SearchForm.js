import React, { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useFormWithValidation } from "../../hooks/useFormValidation";
import('./SearchForm.css');
import('../Main/Main');

function SearchForm({
  isLoggedIn,
  allMovies, setAllMovies,
  isLoading, setIsLoading,
  handleSearchFormSubmit,
  filterShortMovies,
  keyword, setKeyword,
  isShortChecked,
  setIsShortChecked,
  checkBoxChange
}
) {
  // TODO: исправить валидацию и вернуть поиск
  // console.log('isShortChecked SearchForm:', isShortChecked);

  const [isValid, setIsValid] = useState(keyword.length > 0);
  const handleChange = (e) => {
    setIsValid(e.target.validity.valid);
    setKeyword(e.target.value);
  };

  const handleFocus = (e) => {
    e.preventDefault();
    e.target.select();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchFormSubmit(keyword);
  };

  return (
    <section className="main__section search-form">
      <form className="search-form__form" onSubmit={handleSubmit}>
        <div className="search-form__container">
          <input
            name="keyword"
            value={keyword || ''}
            onChange={handleChange}
            onFocus={handleFocus}
            className="search-form__input"
            type="text"
            required
            placeholder="Фильм">
          </input>
          <button className="search-form__button opacity" type="submit" />
        </div>
        <span
          className={`search-form__input-error ${!isValid && "search-form__input-error_active"}`}>
          Нужно ввести ключевое слово
        </span>

      </form>
      <FilterCheckbox
        isShortChecked={isShortChecked}
        checkBoxChange={checkBoxChange}

      />
    </section>
  )
}
export default SearchForm;