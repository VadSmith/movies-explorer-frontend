// Фильрация короткометражек
export default function filterShortMovies(movies) {
  return movies.filter((movie) => movie.duration <= 40)
}