import React, { useState, useEffect } from "react";
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
// import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import * as moviesApi from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';
import filterShortMovies from '../../utils/filterShorts'

function Movies({
  isLoggedIn,
  allMovies, setAllMovies,
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