import Photo from "../../images/about_photo.jpg";
import './AboutMe.css';
function AboutMe() {
  return (
    <section className="main__section about-me" id="about-me">
      <h2 className="main__section-name">Студент</h2>
      <div className="about-me__student">
        <h3 className="about-me__name">Виталий</h3>
        <p className="about-me__job">Фронтенд-разработчик, 30 лет</p>
        <p className="main__paragraph about-me__bio">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
          и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
        </p>
        <div className="about-me__links">
          <a href="http://facebook.com" target="_blank" rel="noopener noreferrer" className="about-me__link">Facebook</a>
          <a href="https://github.com/VadSmith" target="_blank" rel="noopener noreferrer" className="about-me__link">Github</a>
        </div>
        <img className="about-me__photo" src={Photo} alt="Фото разработчика" />
      </div>
    </section>)
}

export default AboutMe;