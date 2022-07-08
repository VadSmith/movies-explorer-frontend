import React from "react";
import "./MoviesCardList.css";
import "../Main/Main";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies }) {
  return (
    <section className="main__section">
      <ul className="movies-card__list">
        {movies.map((movie) => {
          return (<MoviesCard
            key={movie.id}
            movie={movie} />)
        })}
      </ul>
      <button type="button" className="movies-list__more-button">
        Еще
      </button>
    </section>
  )
}

export default MoviesCardList;
