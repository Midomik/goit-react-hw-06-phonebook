import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { SearchContact } from './SearchContact/SearchContact';

import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.main_container}>
      <Form />
      <SearchContact />
      <ContactList />
    </div>
  );
};
