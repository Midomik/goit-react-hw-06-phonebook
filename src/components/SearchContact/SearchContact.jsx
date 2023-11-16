
import css from './SearchContact.module.css';
export const SearchContact=({value, filterContact})=> {
  const findContatct = e => {
    filterContact(e.target.value);
  };
  
    return (
      <div className={css.search_container}>
        <h2 className={css.search_title}>Find contacts by name</h2>
        <input
          className={css.search_input}
          onChange={findContatct}
          type="text"
          name="search"
          value={value}
        />
      </div>
    );
  
}
