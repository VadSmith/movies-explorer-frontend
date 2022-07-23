import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1)
  return (
    <section className="notfound">
      <div className="notfound__container">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-description">Страница не найдена</p>
      </div>
      <button className="notfound-backbutton opacity" type="button" onClick={goBack}>Назад</button>
    </section >
  );
}

export default PageNotFound;