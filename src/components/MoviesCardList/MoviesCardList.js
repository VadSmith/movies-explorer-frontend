import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { screens, qtyParams } from '../../utils/constants';

import "./MoviesCardList.css";
import "../Main/Main";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  movies,
  savedMovies,
  isShortChecked,
  handleSaveMovie,
  handleDeleteMovie,
  isLoading, setIsLoading
}) {
  const location = useLocation();
  // массив видимых фильмов
  const [moviesToShow, setMoviesToShow] = useState([]);
  // количество всех фильмов и на добавление
  const [moviesToShowParams, setMoviesToShowParams] = useState(screens.desktop);
  // const [moviesToShowParams, setMoviesToShowParams] = useState({ total: 12, more: 3 });
  const screenWidth = window.innerWidth;

  // изменяем отображаемый массив фильмов в зависимости от ширины экрана
  useEffect(() => {
    if (location.pathname === '/movies') {
      if (movies.length) {
        // берем фильмов в количестве moviesToShowParams.total
        const filtered = movies.filter((item, i) => i < moviesToShowParams.total);
        // записываем в массив показываемых
        setMoviesToShow(filtered);
      }
    }
  }, [isShortChecked, movies, moviesToShowParams.total]);


  useEffect(() => {
    if (location.pathname === '/movies') {
      if (screenWidth >= screens.desktop) {
        setMoviesToShowParams(qtyParams.desktop);
      } else if (screenWidth < screens.desktop && screenWidth >= screens.tablet) {
        setMoviesToShowParams(qtyParams.tablet);
      } else {
        setMoviesToShowParams(qtyParams.oldMobile);
      }
    }
  }, [movies, screenWidth, moviesToShow, location.pathname]);


  // добавление карточек при клике по кнопке "Еще"
  function handleClickShowMoreMovies() {
    const start = moviesToShow.length;
    const end = start + moviesToShowParams.more;
    const additional = movies.length - start;

    if (additional > 0) {
      const additionalMovies = movies.slice(start, end);
      setMoviesToShow([...moviesToShow, ...additionalMovies]);
    }
  }

  return (
    <section className="main__section movies__list">
      <div className="movies-card__line" />
      <ul className="movies-card__list">
        {
          (location.pathname === '/movies' && moviesToShow.length > 0)
            ? (
              moviesToShow.map((movie, i) => {
                return (
                  <MoviesCard
                    key={movie.id}
                    movie={movie}
                    savedMovies={savedMovies}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    handleDeleteMovie={handleDeleteMovie}
                    handleSaveMovie={handleSaveMovie}
                  />)
              }))
            : (
              (location.pathname === "/movies" && localStorage.getItem('filteredMovies') === true) &&
              moviesToShow.length === 0 &&
              <h2 className='movies-list__notfound-message'>Ничего не найдено</h2>

            )
        }

        {location.pathname === "/saved-movies" && savedMovies.length
          ? (
            savedMovies.map(movie => {
              return (
                <MoviesCard
                  key={movie.movieId}
                  movie={movie}
                  savedMovies={savedMovies}
                  handleDeleteMovie={handleDeleteMovie}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />)
            })
          )
          : (
            location.pathname === "/saved-movies" &&
            <h2>Нет сохранённых фильмов</h2>
          )
        }
      </ul>
      {location.pathname === '/movies' && moviesToShow.length >= 5 && moviesToShow.length < movies.length
        ? (
          <button onClick={handleClickShowMoreMovies} type="button" className="movies-list__more-button opacity">
            Ещё
          </button>
        )
        : (
          <button onClick={handleClickShowMoreMovies} type="button" className="movies-list__more-button opacity movies-list__more-button_hidden">
            Ещё
          </button>
        )
      }
    </section>
  )
}

export default MoviesCardList;
