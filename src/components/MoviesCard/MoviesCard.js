import getReadableDuration from '../../utils/duration';
import './MoviesCard.css';
const mainApiUrl = 'https://api.nomoreparties.co/';

// function MoviesCard({ movie }) {
function MoviesCard({ nameRU, duration, thumbnail, mixinClass }) {
  return (
    <li className="movies-card">
      <div className="movies-card__header">
        <h2 className="movies-card__title">{nameRU}</h2>
        <p className="movies-card__duration">{getReadableDuration(duration)}</p>
        {/* <button
          className={
            movie.deleteButton
              ? 'movies-card__bookmark movies-card__bookmark_delete'
              : movie.isSaved
                ? 'movies-card__bookmark movies-card__bookmark_active'
                : 'movies-card__bookmark movies-card__bookmark_inactive'
          }>
        </button> */}
        <button className={`movies-card__bookmark opacity ${mixinClass}`} />
      </div>
      {/* <div className="movies-card__thumbnail"> */}
      {/* <div> */}
      {/* <img className="movies-card__thumbnail"
          src={`${mainApiUrl}${movie.image.formats.thumbnail.url}`}
          alt={movie.nameRU} /> */}
      <div className="movies-card__thumbnail-wrapper">
        <img className="movies-card__thumbnail" src={thumbnail} alt={nameRU} />
      </div>

    </li>
  )
}
export default MoviesCard;