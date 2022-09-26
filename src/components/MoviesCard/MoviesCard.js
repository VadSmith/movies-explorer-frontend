import { useLocation } from 'react-router-dom';
import getReadableDuration from '../../utils/duration';
import './MoviesCard.css';
const mainApiUrl = 'https://api.nomoreparties.co/';

function MoviesCard({
  movie,
  isLoading,
  setIsLoading,
  mixinClass,
  savedMovies,
  handleSaveMovie,
  handleDeleteMovie
}) {

  let isSaved = false;
  const location = useLocation();

  if (location.pathname === '/movies') {

    isSaved = savedMovies.some(m => {
      // console.log('m.movieId - ', m.movieId, 'movie.id', movie.id);
      // debugger
      return parseInt(m.movieId, 10) === movie.id
    });
  }
  //  onDelete(savedMovies.filter((m) => m.movieId === movie.id)[0]);
  // console.log(handleDeleteMovie);
  function handleSaveClick() {
    // setIsLoading(true);
    if (location.pathname === '/movies') {

      const savedMovie = savedMovies.filter((m) => parseInt(m.movieId, 10) === movie.id)[0];
      console.log('savedMovie', savedMovie);

      if (isSaved) {
        // удалить
        // debugger
        console.log('Удаляю, isSaved:', isSaved, 'deleteMovie', movie);
        handleDeleteMovie(savedMovie);
      } else {
        // сохранить
        console.log('Сохраняю, isSaved:', isSaved, 'saveMovie', movie);
        handleSaveMovie(movie);
      }
    }

    if (location.pathname === '/saved-movies') {
      console.log('Удаляю, isSaved:', isSaved, movie);

      handleDeleteMovie(movie);
    }

    // if (isSaved) {
    //   // onDelete(savedMovies.filter((m) => m.movieId === movie.id)[0]);
    //   console.log('удаляю фильм')
    // } else {
    //   handleSaveMovie(movie);
    // }

    // setIsLoading(false);
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
        {/* <button type="button" className={`movies-card__bookmark opacity ${mixinClass}`} /> */}
      </div>
      {/* <div className="movies-card__thumbnail"> */}
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
        {/* <div className="movies-card__thumbnail-wrapper">
        <img className="movies-card__thumbnail" src={thumbnail} alt={nameRU} />
      </div> */}
      </div>

    </li >
  )
}
export default MoviesCard;