import React from "react";
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({
  isLoggedIn,
  allMovies,
  isLoading, setIsLoading,
  handleSearchFormSubmit,
  keyword, setKeyword,
  movies, savedMovies,
  handleSaveMovie,
  isShortChecked, checkBoxChange,
  filterShortMovies,
  handleDeleteMovie
}) {

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        mixinClass="movies__header"
      />
      <main>
        <SearchForm
          handleSearchFormSubmit={handleSearchFormSubmit}

          checkBoxChange={checkBoxChange}
          isShortChecked={isShortChecked}

          isLoggedIn={isLoggedIn}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          keyword={keyword}
          setKeyword={setKeyword}
          allMovies={allMovies}
        />

        {/* Показываем прелоадер, если есть ожидание загрузки */}
        {isLoading && <Preloader />}

        <MoviesCardList
          mixinClass="movies__list"
          movies={isShortChecked ? filterShortMovies(movies) : movies}
          savedMovies={savedMovies}
          isShortChecked={isShortChecked}
          isLoading={isLoading}
          handleSaveMovie={handleSaveMovie}
          handleDeleteMovie={handleDeleteMovie}
        />
      </main>
      <Footer />
    </>

  )
}

export default Movies;