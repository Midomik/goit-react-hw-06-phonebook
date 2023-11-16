import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { SearchContact } from './SearchContact/SearchContact';

import css from './App.module.css';

import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  filterContactList,
  removeContact,
} from 'redux/contacts/contacts.reducer';

export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contactsStore.contacts);
  const filter = useSelector(state => state.contactsStore.filter);
  console.log(contacts);
  console.log(filter);

  const addToContact = item => {
    let isInList = contacts.some(
      itemContact =>
        itemContact.name.toLocaleLowerCase() === item.name.toLocaleLowerCase()
    );

    isInList
      ? alert(`${item.name} is already in contacts!`)
      : dispatch(addContact(item));
  };

  const filterContact = searchWords => {
    dispatch(filterContactList(searchWords));
  };

  const removeItem = id => {
    console.log('delete');

    dispatch(removeContact(id));
  };

  const visibleContacts = () => {
    const newContacts = contacts.filter(item =>
      item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
    return filter === '' ? contacts : newContacts;
  };

  return (
    <div className={css.main_container}>
      <Form addToContact={addToContact} />
      <SearchContact value={filter} filterContact={filterContact} />
      <ContactList contacts={visibleContacts()} removeItem={removeItem} />
    </div>
  );
};
