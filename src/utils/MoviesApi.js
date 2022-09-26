// файл будет содержать запросы к сервису beatfilm - movies.

export const MOVIES_API_URL = 'https://api.nomoreparties.co';

export const _checkResponse = (response) => {
  // если статус 200 или 204, вернем объект ответа
  if (response.ok) {
    return response.json()
  }

  // если статус ответа не 200, то выкидываем ошибку
  return response.json().then((data) => {
    const { statusCode } = data;
    const { message } = data;
    const error = new Error(message || 'Что-то пошло не так');
    error.status = statusCode;
    throw error;
  })
}

// получение всех фильмов
export const getAllMovies = () => {
  return fetch(`${MOVIES_API_URL}/beatfilm-movies`, {
  })
    .then(_checkResponse)
}