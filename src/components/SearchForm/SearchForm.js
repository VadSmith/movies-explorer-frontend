import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import('./SearchForm.css');
import('../Main/Main');
function SearchForm() {
  return (
    <section className="main__section search-form">
      <form className="search-form__form">
        <div className="search-form__container">
          <input className="search-form__input" type="text" required placeholder="Фильм">
          </input>
          <button className="search-form__button" type="button" />
        </div>
        {/* <label className="search-form__input-label">
        </label> */}

      </form>
      <FilterCheckbox />
    </section>
  )
}
export default SearchForm;