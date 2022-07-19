import { Link } from "react-router-dom";

import './Header.css';
import Logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import '../Logo/Logo.css';

function Header({ mixinClass, isLoggedIn }) {
  return (
    <header className={mixinClass ? `${mixinClass} header` : `header`}>
      <Link to="/">
        <img className="logo" src={Logo} alt="Логотип" />
      </Link>
      {!isLoggedIn ? (
        <>
          <div className="navigation__auth-container">
            <Link
              to="/signup"
              className="navigation__signup-link ">
              Регистрация
            </Link>
            <Link
              to="/signin"
              className="">
              <button
                className="navigation__login-button ">
                Войти
              </button>
            </Link>
          </div>
        </>

      ) : (
        <Navigation
          isLoggedIn={isLoggedIn}
        // mixinClass={props.mixinClass}
        />


      )}
    </header>
  )
}

export default Header;