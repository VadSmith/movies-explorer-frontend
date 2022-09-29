import React, { useEffect, useState } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import('./SavedMovies.css');

function SavedMovies({
  isLoggedIn,
  savedMovies,
  setIsShortChecked,
  handleDeleteMovie,
  filterShortMovies
}) {
  const [savedMoviesKeyword, setSavedMoviesKeyword] = useState('');
  console.log('savedMovies в начале', savedMovies);
  const [isShortCheckedSaved, setIsShortCheckedSaved] = useState(false);
  const [savedMoviesToShow, setSavedMoviesToShow] = useState(savedMovies);

  const checkBoxChangeSave = () => {
    setIsShortCheckedSaved(!isShortCheckedSaved);
  }

  useEffect(() => {
    if (!savedMoviesKeyword) setSavedMoviesToShow(savedMovies);
  }, [savedMoviesKeyword, savedMovies])

  const getSavedMoviesToShow = ((savedMoviesKeyword) => {
    setSavedMoviesToShow((savedMovies.filter(
      (movie) => movie.nameRU.toLowerCase().includes(savedMoviesKeyword.toLowerCase())
    )
    ));
  })

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        mixinClass="saved-movies__header"
      />
      <main>
        <SearchForm
          handleSearchFormSubmit={setSavedMoviesKeyword}
          getSavedMoviesToShow={getSavedMoviesToShow}
          savedMovies={savedMoviesToShow}
          keyword={savedMoviesKeyword}
          setKeyword={setSavedMoviesKeyword}
          checkBoxChange={checkBoxChangeSave}
          isShortChecked={isShortCheckedSaved}
          setIsShortChecked={setIsShortChecked}
        />
        <MoviesCardList
          savedMovies={
            isShortCheckedSaved
              ? filterShortMovies(savedMoviesToShow)
              : savedMoviesToShow
          }
          handleDeleteMovie={handleDeleteMovie}
        />
      </main>
      <Footer />
    </>
  )
}
export default SavedMovies;