import { React, useEffect } from "react";
import './Login.css';
import Logo from '../../images/logo.svg';
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../hooks/useFormValidation";


function Login({ handleLogin, infoMessage, setInfoMessage }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation({});

  const { email, password } = values;

  const handleFocus = (e) => {
    e.preventDefault();
    e.target.select();
    setInfoMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    resetForm(values);
    // resetForm();
    setInfoMessage('');

  };

  return (
    <section className="login">
      <Link to="/" className="login__logo-link">
        <img className="login__logo" src={Logo} alt="Logo" />
      </Link>
      <h1 className="login__title">Рады видеть!</h1>
      <form
        className="login__form"
        id="login"
        onSubmit={handleSubmit}
      >
        <label className="login__label">
          E-mail
          <input
            className="login__input login__input_type_email"
            value={email || ""}
            onChange={handleChange}
            onFocus={handleFocus}
            placeholder="E-mail"
            name="email"
            autoComplete="email"
            type="email"
            required
          >
          </input>
          <span
            className={`login__input-error ${!isValid && "login__input-error_active"}`}>
            {errors.email}
          </span>
        </label>
        <label className="login__label">
          Пароль
          <input
            className="login__input login__input_type_password"
            value={password || ""}
            onChange={handleChange}
            onFocus={handleFocus}
            name="password"
            placeholder="Пароль"
            minLength="2"
            autoComplete="current-password"
            required
            type="password">
          </input>
          <span
            className={`login__input-error ${!isValid && "login__input-error_active"}`}>
            {errors.password}
          </span>
        </label>
        <span className="login__info-message">{infoMessage}</span>
      </form>
      <div className="login__links-container">
        <button
          form="login"
          type="submit"
          className={`login__button ${!isValid && 'login__button_disabled'}`}
          disabled={!isValid}
        >Войти</button>
        <p className="login__register-container">
          Ещё не зарегистрированы? <Link className="login__register-link" to="/signup">
            Регистрация
          </Link></p>
      </div>
    </section>
  )
}

export default Login;