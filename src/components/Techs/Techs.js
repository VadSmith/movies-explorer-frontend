import('./Techs.css');

function Techs() {
  return (
    <section className="main__section techs" id="techs">
      <h2 className="main__section-name techs__name">Технологии</h2>
      <h3 className="main__section-title techs__title">7 технологий</h3>
      <p className="main__paragraph techs__paragraph">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="techs__list">
        <li className="techs__list-item">HTML</li>
        <li className="techs__list-item">CSS</li>
        <li className="techs__list-item">JS</li>
        <li className="techs__list-item">React</li>
        <li className="techs__list-item">Git</li>
        <li className="techs__list-item">Express.js</li>
        <li className="techs__list-item">mongoDB</li>
      </ul>
    </section>
  )
}
export default Techs;