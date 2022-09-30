// Первый файл будет содержать описание запросов к нашему Api.
export const BACKEND_API_URL = 'https://vad-movies-explorer.nomoredomains.sbs';
const MOVIES_API_URL = 'https://api.nomoreparties.co';

// export const BACKEND_API_URL = 'http://localhost:3000';

export const checkResponse = (response) => {
  // если статус 200 или 204, вернем объект ответа
  if (response.ok) {
    return response.json()
  }

  // если статус ответа не 200, то выкидываем ошибку
  return response.json().then((data) => {
    // console.log(data);
    const { statusCode } = data;
    const { message } = data;
    const error = new Error(message || 'Что-то пошло не так');
    error.status = statusCode;
    throw error;
  })
}

export const postMovie = (movie) => {
  return fetch(`${BACKEND_API_URL}/movies`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `${MOVIES_API_URL}${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `${MOVIES_API_URL}${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    })
  })
    .then(checkResponse)
}

export const deleteMovie = (movie) => {
  return fetch(`${BACKEND_API_URL}/movies/${movie._id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
  })
    .then(checkResponse)

}

export const getSavedMovies = () => {
  return fetch(`${BACKEND_API_URL}/movies`, {
    // method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
  })
    .then(checkResponse)
}

// регистрация пользователя
export const register = ({ name, email, password }) => {
  return fetch(`${BACKEND_API_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ name, email, password })
    // body: JSON.stringify({ email, password })
  })
    .then(checkResponse)
}

// авторизация пользователя
export const login = (email, password) => {
  return fetch(`${BACKEND_API_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ email, password })
  })
    .then(checkResponse)
};

// разлогинивание пользователя
export const logout = () => {
  return fetch(`${BACKEND_API_URL}/signout`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
    .then(checkResponse);
}

// получение информации о пользователе
export const getMyInfo = () => {
  return fetch(`${BACKEND_API_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
    .then(checkResponse)
}

export const setUserInfo = (user) => {
  return fetch(`${BACKEND_API_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      name: user.name,
      email: user.email
    })
  })
    .then(checkResponse);
}

  // 1. Функция, которая проверяет наличие куки
  // взятая с https://stackoverflow.com/a/46957815
  // function doesHttpOnlyCookieExist(cookiename) {
  //   var d = new Date();
  //   d.setTime(d.getTime() + (1000));
  //   var expires = "expires=" + d.toUTCString();

  //   document.cookie = cookiename + "=new_value;path=/;" + expires;
  //   return document.cookie.indexOf(cookiename + '=') === -1;
  // }
