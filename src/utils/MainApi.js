// Первый файл будет содержать описание запросов к нашему Api.
export const BACKEND_API_URL = 'https://vad-movies-explorer.nomoredomains.sbs';

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
      // 'Authorization': `Bearer ${jwt}`,
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