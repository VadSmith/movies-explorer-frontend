import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
// import { useFormWithValidation } from "../../hooks/useFormValidation";
import('./SearchForm.css');
import('../Main/Main');

function SearchForm({
  isLoggedIn,
  handleSearchFormSubmit,
  keyword, setKeyword,
  isShortChecked,
  checkBoxChange,
  getSavedMoviesToShow
}
) {
  const [isValid, setIsValid] = useState(keyword ?? false);
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const location = useLocation();
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      setKeyword();
    }
  }, [isLoggedIn])

  useEffect(() => {
    setIsValid(keyword ?? false);
  }, [keyword])

  const handleFocus = (e) => {
    e.preventDefault();
    e.target.select();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      setIsErrorVisible(false);
      handleSearchFormSubmit(keyword);
    } else {
      setIsErrorVisible(true);
    }
  }

  const handleSubmitSaved = (e) => {
    e.preventDefault();
    if (keyword) {
      setIsErrorVisible(false);
      getSavedMoviesToShow(keyword);
    } else {
      setIsErrorVisible(true);
    }
  };

  return (
    <section className="main__section search-form">
      <form className="search-form__form"
        onSubmit={location.pathname === '/saved-movies' ? handleSubmitSaved : handleSubmit}
        noValidate
      >
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
          className={`search-form__input-error ${!isValid && isErrorVisible && "search-form__input-error_active"}`}>
          Нужно ввести ключевое слово
        </span>

      </form>
      <FilterCheckbox
        isShortChecked={isShortChecked}
        checkBoxChange={checkBoxChange}
      />
    </section >
  )
}
export default SearchForm;