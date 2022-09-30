import { useLocation } from 'react-router-dom';
import getReadableDuration from '../../utils/duration';
import './MoviesCard.css';

const mainApiUrl = 'https://api.nomoreparties.co/';

function MoviesCard({
  movie,
  savedMovies,
  handleSaveMovie,
  handleDeleteMovie
}) {

  let isSaved = false;
  const location = useLocation();

  if (location.pathname === '/movies') {

    isSaved = savedMovies.some(m => {
      return parseInt(m.movieId, 10) === movie.id
    });
  }
  function handleSaveClick() {
    if (location.pathname === '/movies') {
      const savedMovie = savedMovies.filter((m) => parseInt(m.movieId, 10) === movie.id)[0];
      console.log('savedMovie', savedMovie);

      if (isSaved) {
        console.log('Удаляю, isSaved:', isSaved, 'deleteMovie', movie);
        handleDeleteMovie(savedMovie);
      } else {
        console.log('Сохраняю, isSaved:', isSaved, 'saveMovie', movie);
        handleSaveMovie(movie);
      }
    }

    if (location.pathname === '/saved-movies') {
      console.log('Удаляю, isSaved:', isSaved, movie);
      handleDeleteMovie(movie);
    }
  }

  return (
    <li className="movies-card">
      <div className="movies-card__header">
        <h2 className="movies-card__title">{movie.nameRU}</h2>
        <p className="movies-card__duration">{getReadableDuration(movie.duration)}</p>
        <button
          onClick={handleSaveClick}
          className={
            location.pathname === '/movies'
              ? (isSaved
                ? 'movies-card__bookmark opacity movies-card__bookmark_active'
                : 'movies-card__bookmark opacity movies-card__bookmark_inactive'
              )
              : 'movies-card__bookmark opacity movies-card__bookmark_delete'
          }>
        </button>
      </div>

      <div className="movies-card__thumbnail-wrapper">
        {
          location.pathname === '/movies' && (
            <a
              href={movie.trailerLink}
              target='_blank'
              rel="noreferrer"
            >
              <img className="movies-card__thumbnail"
                src={`${mainApiUrl}${movie.image.formats.thumbnail.url}`}
                alt={movie.nameRU} />
            </a>
          )
        }

        {location.pathname === '/saved-movies' && (
          <a
            href={movie.trailerLink}
            target='_blank'
            rel="noreferrer"
          >
            <img className="movies-card__thumbnail"
              src={movie.thumbnail}
              alt={movie.nameRU} />
          </a>
        )}
      </div>

    </li >
  )
}
export default MoviesCard;