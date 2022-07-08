import getReadableDuration from '../../utils/duration';
import './MoviesCard.css';
const mainApiUrl = 'https://api.nomoreparties.co/';

function MoviesCard({ movie }) {
  return (
    <li className="movies-card">
      <div className="movies-card__header">
        <h2 className="movies-card__title">{movie.nameRU}</h2>
        <p className="movies-card__duration">{getReadableDuration(movie.duration)}</p>
        <button
          className={
            movie.deleteButton
              ? 'movies-card__bookmark movies-card__bookmark_delete'
              : movie.isSaved
                ? 'movies-card__bookmark movies-card__bookmark_active'
                : 'movies-card__bookmark movies-card__bookmark_inactive'
          }>
        </button>
      </div>
      <div >
        <img className="movies-card__thumbnail"
          src={`${mainApiUrl}${movie.image.formats.thumbnail.url}`}
          alt={movie.nameRU} />
      </div>

    </li>
  )
}
export default MoviesCard;