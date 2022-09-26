import React, { useEffect, useCallback, useMemo } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import('./SavedMovies.css');

function SavedMovies({
  isLoggedIn,
  allMovies,
  isLoading, setIsLoading,
  handleSearchFormSubmit,
  keyword, setKeyword,
  // movies,
  savedMovies,
  isShortChecked, setIsShortChecked,
  checkBoxChange,
  handleDeleteMovie,
  filterShortMovies
}) {

  // Мемоизированный результат поиска по сохраненным фильмам
  const filteredSavedMovies = useMemo(
    () =>
      savedMovies.filter((movie) =>
        movie.nameRU.toLowerCase().includes(keyword.toLowerCase())
      ),
    [keyword, savedMovies]
  );

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        mixinClass="saved-movies__header"

      />
      <main>
        <SearchForm
          handleSearchFormSubmit={handleSearchFormSubmit}
          // handleSearchFormSubmitSaved={handleSearchFormSubmitSaved}
          isLoggedIn={isLoggedIn}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          keyword={keyword}
          setKeyword={setKeyword}
          allMovies={allMovies}
          filterShortMovies={filterShortMovies}
          checkBoxChange={checkBoxChange}
          isShortChecked={isShortChecked}
          setIsShortChecked={setIsShortChecked}

        />
        <MoviesCardList
          // savedMovies={savedMovies}
          savedMovies={isShortChecked ? filterShortMovies(filteredSavedMovies) : filteredSavedMovies}
          handleDeleteMovie={handleDeleteMovie}
        />
      </main>
      <Footer />
    </>
  )
}
export default SavedMovies;