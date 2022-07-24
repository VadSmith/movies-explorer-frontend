import React, { useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import './Navigation.css';
// import { Link, NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const handleBurgerClick = () => setIsBurgerOpen(!isBurgerOpen);

  return (
    <>
      <nav className="navigation">
        <div className="navigation__movies-container">
          <NavLink
            to='/movies'
            className={({ isActive }) => isActive ? "navigation__movie-link navigation__movie-link_active " : "navigation__movie-link "}
          >Фильмы
          </NavLink>
          <NavLink
            to='/saved-movies'
            className={({ isActive }) => isActive ? "navigation__movie-link navigation__movie-link_active " : "navigation__movie-link "}
          >Сохранённые фильмы
          </NavLink>
        </div>
        <button className="navigation__profile-button" type="button">
          <NavLink
            to='/profile'
            className="navigation__profile-link "
          >Аккаунт</NavLink>
        </button>
        <button className="navigation__burger-button" type="button" onClick={handleBurgerClick} />
      </nav>
      <BurgerMenu
        isOpen={isBurgerOpen}
        closeBurger={handleBurgerClick}
      />

    </>
  )
}
export default Navigation;