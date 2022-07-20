import React from "react";
import './Login.css';
import Logo from '../../images/logo.svg';
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="login">
      <Link to="/" className="login__logo-link">
        <img className="login__logo" src={Logo} alt="Logo" />
      </Link>
      <h1 className="login__title">Рады видеть!</h1>
      <form className="login__form">
        <label className="login__label">
          E-mail
          <input className="login__input login__input_type_email" required placeholder="E-mail" type="email"></input>
          <span className="login__input-error"></span>
        </label>
        <label className="login__label">
          Пароль
          <input className="login__input login__input_type_password" required placeholder="Пароль" type="password"></input>
          <span className="login__input-error"></span>
        </label>
      </form>
      <div className="login__links-container">
        <button className="login__button">Войти</button>
        <p className="login__register-container">Ещё не зарегистрированы? <Link className="login__register-link" to="/signup">Регистрация</Link></p>
      </div>
    </section>
  )
}

export default Login;