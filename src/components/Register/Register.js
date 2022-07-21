import React from "react";
import './Register.css';
import Logo from '../../images/logo.svg';
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="register">
      <Link to="/">
        <img className="register__logo" src={Logo} alt="Logo" />
      </Link>
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form">
        <label className="register__label">
          Имя
          <input className="register__input register__input_type_name"
            type="text"
            placeholder="Имя"
            required
          >
          </input>
          <span className="register__input-error"></span>
        </label>
        <label className="register__label">
          E-mail
          <input className="register__input register__input_type_email"
            type="email"
            placeholder="E-mail"
            required
          >
          </input>
          <span className="register__input-error"></span>
        </label>
        <label className="register__label">
          Пароль
          <input className="register__input register__input_type_password"
            type="password"
            placeholder="Пароль"
            required
          >
          </input>
          <span className="register__input-error"></span>
        </label>
      </form>
      <div className="register__links-container">
        <button type="button" className="register__button">Зарегистрироваться</button>
        <p className="register__login-container">Уже зарегистрированы? <Link className="register__login-link" to="/signin">Войти</Link></p>
      </div>
    </section>
  )
}

export default Register;