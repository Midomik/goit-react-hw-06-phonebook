import { useDispatch } from 'react-redux';

import { removeContact } from 'redux/contacts/contacts.reducer';

import css from './ContactItem.module.css';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const removeItem = id => {
    console.log('delete');

    dispatch(removeContact(id));
  };

  return (
    <li key_id={id} className={css.contact_item}>
      {name}: {number}
      <button
        onClick={() => removeItem(id)}
        name="delete"
        className={css.delete_item}
      >
        Delete
      </button>
    </li>
  );
};
