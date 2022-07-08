import React, { useState } from "react";
// import BurgerMenu from "../BurgerMenu/BurgerMenu";
import './Navigation.css';
// import { Link, NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const handleBurgerMenuClick = () => setIsBurgerMenuOpen(!isBurgerMenuOpen);

  return (
    <nav className="navigation">
      <>
        <div className="navigation__movies-container">
          <NavLink
            to='/movies'
            className={({ isActive }) => isActive ? "navigation__movie-link navigation__movie-link_active opacity" : "navigation__movie-link opacity"}
          >Фильмы
          </NavLink>
          <NavLink
            to='/saved-movies'
            className={({ isActive }) => isActive ? "navigation__movie-link navigation__movie-link_active opacity" : "navigation__movie-link opacity"}
          >Сохранённые фильмы
          </NavLink>
        </div>
        <button className="navigation__profile-button">
          <NavLink
            to='/profile'
            className="navigation__profile-link opacity"
          >Аккаунт</NavLink>
        </button>
      </>
      {/* <BurgerMenu
        isOpen={isBurgerMenuOpen}
        isClose={handleBurgerMenuClick}
      /> */}

    </nav>
  )
}
export default Navigation;