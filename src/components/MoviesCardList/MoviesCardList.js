import React from "react";
import "./MoviesCardList.css";
import "../Main/Main";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, deleteButton }) {
  return (
    <section className="main__section">
      {/* <ul className="movies-card__list">
        {movies.map((movie) => {
          return (<MoviesCard
            key={movie.id}
            movie={movie} />)
        })}
      </ul> */}
      <ul className="movies-card__list">
        <MoviesCard
          nameRU="«Роллинг Стоунз» в изгнании"
          duration={65}
          thumbnail="https://api.nomoreparties.co/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg"
          // mixinClass="movies-card__bookmark_active"
          mixinClass={deleteButton
            ? 'movies-card__bookmark_delete'
            : 'movies-card__bookmark_inactive'
          }
        />
        <MoviesCard
          nameRU="«Роллинг Стоунз» в изгнании"
          duration={61}
          thumbnail="https://api.nomoreparties.co/uploads/thumbnail_taqwacore2_2f487d2e74.jpeg"
          mixinClass={deleteButton
            ? 'movies-card__bookmark_delete'
            : 'movies-card__bookmark_active'
          } />
        <MoviesCard
          nameRU="«Роллинг Стоунз» в изгнании"
          duration={123}
          thumbnail="https://api.nomoreparties.co/uploads/thumbnail_881707734_640_d6a3a43358.jpeg"
          mixinClass={deleteButton
            ? 'movies-card__bookmark_delete'
            : 'movies-card__bookmark_active'
          } />
        <MoviesCard
          nameRU="«Роллинг Стоунз» в изгнании"
          duration={125}
          thumbnail="https://api.nomoreparties.co/uploads/thumbnail_881707734_640_d6a3a43358.jpeg"
          mixinClass={deleteButton
            ? 'movies-card__bookmark_delete'
            : 'movies-card__bookmark_inactive'
          } />
        <MoviesCard
          nameRU="«Роллинг Стоунз» в изгнании"
          duration={15}
          thumbnail="https://api.nomoreparties.co/uploads/thumbnail_images_244e1fd56f.jpeg"
          mixinClass={deleteButton
            ? 'movies-card__bookmark_delete'
            : 'movies-card__bookmark_active'
          } />
        <MoviesCard
          nameRU="«Роллинг Стоунз» в изгнании"
          duration={123}
          thumbnail="https://api.nomoreparties.co/uploads/thumbnail_posters_came_from_the_walls_2009_001_posters_180fe1a19f.jpeg"
          mixinClass={deleteButton
            ? 'movies-card__bookmark_delete'
            : 'movies-card__bookmark_inactive'
          } />
        <MoviesCard
          nameRU="«Роллинг Стоунз» в изгнании"
          duration={145}
          thumbnail="https://api.nomoreparties.co/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg"
          mixinClass={deleteButton
            ? 'movies-card__bookmark_delete'
            : 'movies-card__bookmark_active'
          } />
        <MoviesCard
          nameRU="«Роллинг Стоунз» в изгнании"
          duration={54}
          thumbnail="https://api.nomoreparties.co/uploads/thumbnail_posters_came_from_the_walls_2009_001_posters_180fe1a19f.jpeg"
          mixinClass={deleteButton
            ? 'movies-card__bookmark_delete'
            : 'movies-card__bookmark_inactive'
          } />
        <MoviesCard
          nameRU="«Роллинг Стоунз» в изгнании"
          duration={36}
          thumbnail="https://api.nomoreparties.co/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg"
          mixinClass={deleteButton
            ? 'movies-card__bookmark_delete'
            : 'movies-card__bookmark_active'
          } />
        <MoviesCard
          nameRU="«Роллинг Стоунз» в изгнании"
          duration={76}
          thumbnail="https://api.nomoreparties.co/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg"
          mixinClass={deleteButton
            ? 'movies-card__bookmark_delete'
            : 'movies-card__bookmark_inactive'
          } />
        <MoviesCard
          nameRU="«Роллинг Стоунз» в изгнании"
          duration={78}
          thumbnail="https://api.nomoreparties.co/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg"
          mixinClass={deleteButton
            ? 'movies-card__bookmark_delete'
            : 'movies-card__bookmark_inactive'
          } />
        <MoviesCard
          nameRU="«Роллинг Стоунз» в изгнании"
          duration={135}
          thumbnail="https://api.nomoreparties.co/uploads/thumbnail_881707734_640_d6a3a43358.jpeg"
          mixinClass={deleteButton
            ? 'movies-card__bookmark_delete'
            : 'movies-card__bookmark_inactive'
          } />
      </ul>
      <button type="button" className="movies-list__more-button opacity">
        Еще
      </button>
    </section>
  )
}

export default MoviesCardList;
