import React, { useState } from "react";
import './Main.css';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import Header from '../Header/Header';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Main(props) {
  return (
    <>
      <Header
        isLoggedIn={props.isLoggedIn}
        mixinClass="main__header"
      />
      <main>
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>

  )
}

export default Main;
// Promo — компонент с вёрсткой баннера страницы «О проекте».
// NavTab — компонент с навигацией по странице «О проекте».
// AboutProject — компонент с описанием дипломного проекта.
//   Techs — компонент с использованными технологиями.
//     AboutMe — компонент с информацией о студенте.
//       Portfolio — компонент со ссылками на другие проекты.