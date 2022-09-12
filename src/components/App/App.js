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

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [infoMessage, setInfoMessage] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    tokenCheck()
  }, [])

  useEffect(() => {
    setInfoMessage('');
  }, [navigate])


  useEffect(() => {
    if (isLoggedIn) {
      mainApi.getMyInfo()
        .then((userInfo) => {
          setCurrentUser(userInfo);
          console.log('useEffect: данные профиля получены')
        })
        .catch((error) => {
          console.log('useEffect: Ошибка получения профиля из API', error);
        })
    }
  }, [isLoggedIn])

  // const tokenCheck = useCallback(() => {
  //   mainApi.getMyInfo()
  //     .then((res) => {
  //       setIsLoggedIn(true);
  //       setCurrentUser(res);
  //       console.log('tokenCheck: OK');
  //       navigate(location.pathname);
  //     })
  //     .catch((err) => {
  //       console.log('tokenCheck: ', err);
  //     });
  // }, [location.pathname, navigate])

  function tokenCheck() {
    mainApi.getMyInfo()
      .then((res) => {
        setIsLoggedIn(true);
        setCurrentUser(res);
        console.log('tokenCheck: OK');
        navigate(location.pathname);
      })
      .catch((err) => {
        console.log('tokenCheck: ', err);
      });
  }

  function handleRegister(name, email, password) {
    return mainApi.register(name, email, password)
      .then((res) => {
        handleLogin(email, password);
        console.log('register result', res);
      })
      .catch((error) => {
        setInfoMessage(error.message);
      })
  }

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

  function handleLogout() {
    mainApi.logout().then(() => {
      setIsLoggedIn(false);
      setCurrentUser({});
      navigate('/signin');
    }).catch(error => console.log);
  }

  function handleUpdateUserProfile(user) {
    mainApi
      .setUserInfo(user)
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      })
  };

  // 1. Функция, которая проверяет наличие куки
  // взятая с https://stackoverflow.com/a/46957815
  // function doesHttpOnlyCookieExist(cookiename) {
  //   var d = new Date();
  //   d.setTime(d.getTime() + (1000));
  //   var expires = "expires=" + d.toUTCString();

  //   document.cookie = cookiename + "=new_value;path=/;" + expires;
  //   return document.cookie.indexOf(cookiename + '=') === -1;
  // }

  return (
    <CurrentUserContext.Provider value={currentUser}>

      <div className="page">
        <Routes>
          <Route path="/"
            element={<Main isLoggedIn={isLoggedIn} />}
          />
          <Route path="/movies"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Movies
                  isLoggedIn={isLoggedIn}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              </ProtectedRoute>
            }
          />
          <Route path="/saved-movies" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <SavedMovies isLoggedIn={isLoggedIn} />
            </ProtectedRoute>
          }
          />
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
          <Route path="/signup"
            element={
              <Register
                handleRegister={handleRegister}
                infoMessage={infoMessage}
                setInfoMessage={setInfoMessage}
              />} />
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