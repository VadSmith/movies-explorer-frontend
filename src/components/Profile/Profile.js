import { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/useFormValidation';
import './Profile.css';

function Profile({ handleLogout, isLoggedIn, infoMessage, setInfoMessage, handleUpdateUserProfile }) {
  const currentUser = useContext(CurrentUserContext);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation({});

  const { email, name } = values;

  useEffect(() => {

  })
  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateUserProfile(values);
    resetForm();
  };

  const handleFocus = (e) => {
    setInfoMessage('');
    e.target.select();
  };

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [currentUser, resetForm]);

  useEffect(() => {
    if ((name !== currentUser.name || email !== currentUser.email) && isValid) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [email, isValid, name, currentUser.email, currentUser.name]);

  const logout = (e) => {
    e.preventDefault();
    handleLogout();
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn}
        mixinClass="profile__header"
      />
      <section className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <form className="profile__form" id="profile__form" onSubmit={handleSubmit}>
          <label className="profile__label" htmlFor="profile__input-name">
            Имя
            <input className="profile__input profile__input_type_name"
              value={name || ""}
              onChange={handleChange}
              onFocus={handleFocus}
              placeholder="Имя"
              name="name"
              autoComplete="name"
              type="text"
              minLength="2"
              required
            >
            </input>
          </label>
          <span
            className={`profile__input-error ${!isValid && "profile__input-error_active"}`}>
            {errors.name}
          </span>

          <label className="profile__label" htmlFor="profile__input-email">
            E-mail
            <input className="profile__input profile__input_type_email"
              value={email || ""}
              onChange={handleChange}
              onFocus={handleFocus}
              pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
              placeholder="E-mail"
              name="email"
              autoComplete="email"
              type="email"
              required
            >
            </input>
          </label>
          <span
            className={`profile__input-error ${!isValid && "profile__input-error_active"}`}>
            {errors.email}
          </span>
        </form>
        <span className="profile__info-message">{infoMessage}</span>

        <div className="profile__buttons-container">
          <button
            type="submit"
            className={`profile__form-button opacity ${isButtonDisabled && " profile__form-button_disabled"}`}
            form="profile__form"
            disabled={isButtonDisabled}
          >Редактировать</button>
          <button onClick={logout} type="button" className="profile__signout-button opacity">Выйти из аккаунта</button>
        </div>
      </section>
    </>
  )
}

export default Profile;