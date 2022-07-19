import './Footer.css';
import '../Main/Main.css';
import '../NavTab/NavTab.css';
function Footer() {
  return (
    <footer className="main__section footer">
      <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__copy-nav-wrapper">
        <div className="footer__copyright">&copy;2022 Вадим А.</div>
        <nav className="">
          <ul className="navtab__list footer__nav-list">
            <li className="footer__nav-list-item"><a href="https://practicum.yandex.ru/" className="navtab__link footer__navtab-link ">Яндекс.Практикум</a></li>
            <li className="footer__nav-list-item"><a href="https://github.com/VadSmith" className="navtab__link footer__navtab-link ">Github</a></li>
            <li className="footer__nav-list-item"><a href="https://facebook.com" className="navtab__link footer__navtab-link ">Facebook</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;