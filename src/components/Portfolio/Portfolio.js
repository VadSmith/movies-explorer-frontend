import './Portfolio.css';
import Arrow from "../../images/link-arrow.svg";
function Portfolio() {
  return (
    <section className="main__section portfolio">
      <h2 className="main__section-name portfolio__name">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item"><a className="portfolio__link" target="_blank" rel="noopener noreferrer" href="https://github.com/VadSmith/how-to-learn">Статичный сайт<img className="portfolio__arrow" src={Arrow} /></a></li>
        <li className="portfolio__list-item"><a className="portfolio__link" target="_blank" rel="noopener noreferrer" href="https://vadsmith.github.io/russian-travel/">Адаптивный сайт<img className="portfolio__arrow" src={Arrow} /></a></li>
        <li className="portfolio__list-item"><a className="portfolio__link" target="_blank" rel="noopener noreferrer" href="https://github.com/VadSmith/react-mesto-api-full">Одностраничное приложение<img className="portfolio__arrow" src={Arrow} /></a></li>
      </ul>
    </section>
  )
}

export default Portfolio;