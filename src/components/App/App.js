// [ ]: УБРАТЬ ЗАГРУЗКУ ФИЛЬМОВ
// [ ]: найти, где формируется "Validation failed"
// [ ]: убрать стандартное предупреждение в формах
// [ ]: в Register включить кастомные ошибки
// [ ]: кнопки на формах сделать ___дизэйбл___


import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import * as mainApi from '../../utils/MainApi';
import * as moviesApi from '../../utils/MoviesApi';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [infoMessage, setInfoMessage] = useState('');
  const [allMovies, setAllMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [keyword, setKeyword] = useState(localStorage.getItem("keyword") || "");
  const [filteredMovies, setFilteredMovies] = useState(localStorage.getItem('filteredMovies') ? JSON.parse(localStorage.getItem('filteredMovies')) : []);
  const location = useLocation();
  const navigate = useNavigate();

  const [isShortChecked, setIsShortChecked] = useState(JSON.parse(localStorage.getItem('isShortChecked')) || false);

  const checkBoxChange = () => {
    setIsShortChecked(!isShortChecked)
  }

  useEffect(() => {
    localStorage.setItem('isShortChecked', isShortChecked)
  }, [isShortChecked])

  useEffect(() => {
    setIsShortChecked(JSON.parse(localStorage.getItem('isShortChecked')));
  }, [])

  useEffect(() => {
    tokenCheck()
  }, [])

  useEffect(() => {
    setInfoMessage('');
  }, [navigate])

  useEffect(() => {
    localStorage.setItem('keyword', keyword)
  }, [keyword])

  useEffect(() => {
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
  }, [savedMovies])

  useEffect(() => {
    if (localStorage.filteredMovies) {
      localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
    }
  }, [filteredMovies])

  useEffect(() => {
    if (isLoggedIn) {
      mainApi.getMyInfo()
        .then((userInfo) => {
          setCurrentUser(userInfo);
        })
        .catch((error) => {
          console.log('useEffect: Ошибка получения профиля из API', error);
        })

      mainApi.getSavedMovies()
        .then((savedMovies) => {
          localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
          setSavedMovies(savedMovies);
        })
        .catch((error) => {
          console.log('useEffect: Ошибка загрузки сохраненных фильмов', error);
        })

      moviesApi.getAllMovies()
        .then((res) => {
          localStorage.setItem('allMovies', JSON.stringify(res));
          setAllMovies(res);
        })
        .catch((err) => {
          console.log('Ошибка загрузки фильмов', err);
        })
    }
  }, [isLoggedIn])

  // Проверка токена и загрузка данных пользователя
  function tokenCheck() {
    mainApi.getMyInfo()
      .then((res) => {
        setIsLoggedIn(true);
        setCurrentUser(res);
        navigate(location.pathname);
      })
      .catch((err) => {
        console.log('tokenCheck error, isLoggedIn:', isLoggedIn);
        localStorage.clear();
        // handleLogout();
      });
  }

  // Обработка Регистрации
  function handleRegister({ name, email, password }) {
    return mainApi.register({ name, email, password })
      .then((res) => {
        handleLogin(email, password);
      })
      .catch((error) => {
        setInfoMessage(error.message);
      })
  }

  // Обработка Логина
  function handleLogin(email, password) {
    return mainApi.login(email, password)
      .then((res) => {
        setIsLoggedIn(true);
        setInfoMessage('');
        navigate('/movies');
      })
      .catch((error) => {
        setInfoMessage(error.message);
      })
  }

  // Обработка Logout
  function handleLogout() {
    console.log('enter handlelogout',);
    mainApi.logout().then(() => {
      setCurrentUser({});
      setIsLoggedIn(false);
      setFilteredMovies([]);
      setSavedMovies([]);
      setAllMovies([]);
      setKeyword('');
      navigate('/signin');
      localStorage.clear();
    }).catch(error => console.log);
  }

  // Фильрация короткометражек
  function filterShortMovies(movies) {
    return movies.filter((movie) => movie.duration <= 40)
  }

  // Обновление Профиля пользователя
  function handleUpdateUserProfile(user) {
    mainApi
      .setUserInfo(user)
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .catch((err) => {
        setInfoMessage(err.message);
        console.log(`Ошибка: ${err.message}`)
      })
  };

  // Обработка формы поиска на странице Movies
  function handleSearchFormSubmit(keyword) {
    setIsLoading(true);
    const foundMovies = searchMovies(allMovies, keyword);
    localStorage.setItem("filteredMovies", JSON.stringify(foundMovies));
    setFilteredMovies(foundMovies);
    setTimeout(() => setIsLoading(false), 1000);

  }


  // Обработка формы поиска на странице SavedMovies
  function handleSearchFormSubmitSaved(keyword) {
    setIsLoading(true);
    const foundMovies = searchMovies(savedMovies, keyword);
    // localStorage.setItem("filteredMovies", JSON.stringify(foundMovies));
    setFilteredMovies(foundMovies);
    setTimeout(() => setIsLoading(false), 1000);

  }

  // Массив результатов поиска по всем фильмам
  function searchMovies(movies, keyword) {
    return movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  function handleSaveMovie(movie) {
    mainApi
      .postMovie(movie)
      .then((data) => {
        setSavedMovies([data, ...savedMovies]);
        localStorage.setItem(
          "savedMovies",
          JSON.stringify([data, ...savedMovies])
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Удаление сохраненного фильма
  function handleDeleteMovie(savedMovie) {
    mainApi
      .deleteMovie(savedMovie)
      .then(() => {
        const newSavedMovies = savedMovies.filter(
          (item) => item._id !== savedMovie._id
        );
        setSavedMovies(newSavedMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>

      <div className="page">
        <Routes>

          {/*     Главная страница     */}
          <Route path="/"
            element={<Main isLoggedIn={isLoggedIn} />}
          />

          {/*     Фильмы     */}
          <Route path="/movies"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Movies
                  isLoggedIn={isLoggedIn}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}

                  handleSearchFormSubmit={handleSearchFormSubmit}
                  handleDeleteMovie={handleDeleteMovie}
                  handleSaveMovie={handleSaveMovie}
                  filterShortMovies={filterShortMovies}
                  isShortChecked={isShortChecked}
                  checkBoxChange={checkBoxChange}
                  keyword={keyword}
                  setKeyword={setKeyword}
                  allMovies={allMovies}
                  movies={filteredMovies}
                  savedMovies={savedMovies}
                />
              </ProtectedRoute>
            }
          />

          {/*     Сохраненные фильмы     */}
          <Route path="/saved-movies" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <SavedMovies
                isLoggedIn={isLoggedIn}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                savedMovies={savedMovies}

                checkBoxChange={checkBoxChange}
                isShortChecked={isShortChecked}
                setIsShortChecked={setIsShortChecked}

                handleSearchFormSubmit={handleSearchFormSubmit}
                handleDeleteMovie={handleDeleteMovie}
                filterShortMovies={filterShortMovies}

                keyword={keyword}
                setKeyword={setKeyword}
                allMovies={allMovies}
                movies={filteredMovies}
              />
            </ProtectedRoute>
          }
          />

          {/*     Профиль     */}
          <Route path="/profile" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Profile isLoggedIn={isLoggedIn}
                handleUpdateUserProfile={handleUpdateUserProfile}
                handleLogout={handleLogout}
                infoMessage={infoMessage}
                setInfoMessage={setInfoMessage}
              />
            </ProtectedRoute>
          }
          />

          {/*     Регистрация     */}
          <Route path="/signup"
            element={
              <Register
                handleRegister={handleRegister}
                infoMessage={infoMessage}
                setInfoMessage={setInfoMessage}
              />} />


          {/*     Логин     */}
          <Route path="/signin"
            element={
              <Login
                handleLogin={handleLogin}
                infoMessage={infoMessage}
                setInfoMessage={setInfoMessage}
              />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div >
    </CurrentUserContext.Provider>
  );
}

export default App;