import { NavLink } from "react-router-dom";
import './BurgerMenu.css';
import '../Navigation/Navigation.css';

function BurgerMenu({ isOpen, closeBurger }) {
  return (
    <div className={`burger-menu__popup ${isOpen && 'burger-menu__popup_opened'}`}>
      {/* <div class="burger-menu__overlay"></div> */}
      <div className="burger-menu__container">
        <button type="button" className="burger-menu__close-button" onClick={closeBurger} />
        <nav className="burger-menu__navigation">
          <div className="burger-menu__links">
            <NavLink
              to='/'
              className={({ isActive }) => isActive ? "navigation__movie-link burger-link_active " : "navigation__movie-link "}
            >Главная
            </NavLink>
            <NavLink
              to='/movies'
              className={({ isActive }) => isActive ? "navigation__movie-link burger-link_active " : "navigation__movie-link "}
            >Фильмы
            </NavLink>
            <NavLink
              to='/saved-movies'
              className={({ isActive }) => isActive ? "navigation__movie-link burger-link_active " : "navigation__movie-link "}
            >Сохранённые фильмы
            </NavLink>
          </div>
        </nav>
        <button type="button" className="navigation__profile-button">
          <NavLink
            to='/profile'
            className="navigation__profile-link "
          >Аккаунт</NavLink>
        </button>
      </div>
    </div>
  )
}

export default BurgerMenu;