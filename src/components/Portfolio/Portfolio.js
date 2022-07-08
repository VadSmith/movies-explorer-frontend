import './Portfolio.css';
import Arrow from "../../images/link-arrow.png";
function Portfolio() {
  return (
    <section className="main__section portfolio">
      <h2 className="main__section-name portfolio__name">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item"><a className="portfolio__link" href="https://github.com/">Статичный сайт</a><img className="portfolio__arrow" src={Arrow} /></li>
        <li className="portfolio__list-item"><a className="portfolio__link" href="https://github.com/">Адаптивный сайт</a><img className="portfolio__arrow" src={Arrow} /></li>
        <li className="portfolio__list-item"><a className="portfolio__link" href="https://github.com/">Одностраничное приложение</a><img className="portfolio__arrow" src={Arrow} /></li>
      </ul>
    </section>
  )
}

export default Portfolio;