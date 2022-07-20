import Header from '../Header/Header';

import './Profile.css';

function Profile(props) {
  return (
    <>
      <Header isLoggedIn={props.isLoggedIn}
        mixinClass="profile__header"
      />
      <section className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__form" id="profile__form">
          <label className="profile__label" for="profile__input-name">
            Имя
            <input className="profile__input profile__input_type_name"
              type="text"
              id="profile__input-name"
              placeholder="Имя"
            >
            </input>
          </label>
          <span className="profile__input-error"></span>
          <label className="profile__label" for="profile__input-email">
            E-mail
            <input className="profile__input profile__input_type_email"
              type="email"
              id="profile__input-email"
              placeholder="E-mail"
            >
            </input>
          </label>
          <span className="profile__input-error"></span>
        </form>
        <div className="profile__buttons-container">
          <button className="profile__form-button opacity"
            form="profile__form">Редактировать</button>
          <button className="profile__signout-button opacity">Выйти из аккаунта</button>
        </div>
      </section>
    </>
  )
}

export default Profile;