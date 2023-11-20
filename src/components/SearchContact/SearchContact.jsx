import { useSelector, useDispatch } from 'react-redux';
import { filterContactList } from 'redux/contacts/contacts.reducer';

import css from './SearchContact.module.css';

export const SearchContact = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.contactsStore.filter);

  const findContatct = e => {
    filterContact(e.target.value);
  };

  const filterContact = searchWords => {
    dispatch(filterContactList(searchWords));
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
};
