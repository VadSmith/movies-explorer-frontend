import './NavTab.css';

function NavTab() {
  return (
    <section className="navtab">
      <ul className="navtab__list">
        <li className="navtab__list-item"><a href="#about-project" className="navtab__link opacity">О проекте</a></li>
        <li className="navtab__list-item"><a href="#techs" className="navtab__link opacity">Технологии</a></li>
        <li className="navtab__list-item"><a href="#about-me" className="navtab__link opacity">Студент</a></li>
      </ul>
    </section>)
}

export default NavTab;