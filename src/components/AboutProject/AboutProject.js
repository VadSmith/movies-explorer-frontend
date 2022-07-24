import './AboutProject.css';
function AboutProject() {
  return (
    <>
      <section className="main__section about-project" id="about-project">
        {/* <h2 className="main__section-name about-project__name">О проекте</h2> */}
        <h2 className="main__section-name">О проекте</h2>
        <div className="about-project__description">
          <article>
            <h3 className="about-project__description-title">Дипломный проект включал 5 этапов</h3>
            <p className="main__paragraph about-project__description-content">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </article>
          <article>
            <h3 className="about-project__description-title">На выполнение диплома ушло 5 недель</h3>
            <p className="main__paragraph about-project__description-content">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </article>
        </div>
        <div className="about-project__timeline">
          <div className="about-project__timeline-course">
            <div className="about-project__timeline-time about-project__timeline-time_active">1 неделя</div>
            <div className="about-project__timeline-subject">Back-end</div>
          </div>
          <div className="about-project__timeline-course">
            <div className="about-project__timeline-time">4 недели</div>
            <div className="about-project__timeline-subject">Front-end</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutProject;