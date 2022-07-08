import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
        <Route path="/movies" element={<Movies isLoggedIn={isLoggedIn} />} />
        <Route path="/saved-movies" element={<SavedMovies isLoggedIn={isLoggedIn} />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/profile" element={<Profile isLoggedIn={isLoggedIn} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div >
  );
}

export default App;