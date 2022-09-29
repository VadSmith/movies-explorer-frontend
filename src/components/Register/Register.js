import React from "react";
import './Register.css';
import Logo from '../../images/logo.svg';
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../hooks/useFormValidation";

function Register({ isLoggedIn, handleRegister, infoMessage, setInfoMessage }) {
  // const emailPattern = "/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i";
  // const emailPattern = "/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/";
  const emailPattern = "^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation({});
  const { name, email, password } = values;

  const handleFocus = (e) => {
    e.preventDefault();
    e.target.select();
    setInfoMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(values);
    resetForm(values);
    setInfoMessage('');
  };

  return (
    <section className="register">
      <Link to="/">
        <img className="register__logo" src={Logo} alt="Logo" />
      </Link>
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form"
        id="register"
        onSubmit={handleSubmit}>
        <label className="register__label">
          Имя
          <input className="register__input register__input_type_name"
            type="text"
            name="name"
            minLength="2"
            required
            value={name || ""}
            onChange={handleChange}
            onFocus={handleFocus}
            autoComplete="name"
          >
          </input>
          <span
            className={`register__input-error ${!isValid && "register__input-error_active"}`}>
            {errors.name}
          </span>
        </label>
        <label className="register__label">
          E-mail
          <input className="register__input register__input_type_email"
            type="email"
            name="email"
            value={email || ""}
            pattern={emailPattern}
            onChange={handleChange}
            onFocus={handleFocus}
            autoComplete="email"
            required
          >
          </input>
          <span
            className={`register__input-error ${!isValid && "register__input-error_active"}`}>
            {errors.email}
          </span>
        </label>
        <label className="register__label">
          Пароль
          <input className="register__input register__input_type_password"
            type="password"
            name="password"
            minLength="2"
            value={password || ""}
            autoComplete="current-password"
            onChange={handleChange}
            onFocus={handleFocus}
            required
          >
          </input>
          <span
            className={`register__input-error ${!isValid && "register__input-error_active"}`}>
            {errors.password}
          </span>
        </label>
        <span className="register__info-message">{infoMessage}</span>
      </form>
      <div className="register__links-container">
        <button
          form="register"
          type="submit"
          className={`register__button ${!isValid && 'register__button_disabled'}`}
          disabled={!isValid}
        >Зарегистрироваться</button>
        <p className="register__login-container">Уже зарегистрированы? <Link className="register__login-link" to="/signin">Войти</Link></p>
      </div>
    </section >
  )
}

export default Register;