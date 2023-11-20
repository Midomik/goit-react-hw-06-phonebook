import { ContactItem } from 'components/ContactItem/ContactItem';

import { useSelector } from 'react-redux';

import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(state => state.contactsStore.contacts);
  const filter = useSelector(state => state.contactsStore.filter);

  const visibleContacts = () => {
    const newContacts = contacts.filter(item =>
      item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
    return filter === '' ? contacts : newContacts;
  };

  return (
    <>
      <h2 className={css.list_title}>Contacts</h2>
      <ul className={css.list_contact}>
        {visibleContacts().map(item => {
          return (
            <ContactItem
              key={item.id}
              name={item.name}
              number={item.number}
              id={item.id}
            />
          );
        })}
      </ul>
    </>
  );
};
