import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import '../App/App';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';

function PageNotFound() {
  return (
    <section className="main__section">
      PageNotFound
    </section >
  );
}

export default PageNotFound;