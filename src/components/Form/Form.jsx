import { useState } from 'react';
import css from './Form.module.css';
import { nanoid } from 'nanoid';

export const Form = ({ addToContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const hendlerSubmit = e => {
    e.preventDefault();
    addToContact({
      name,
      number,
      id: nanoid(),
    });

    e.currentTarget.elements.name.value = '';
    e.currentTarget.elements.number.value = '';
  };

  const handleChangeInput = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  return (
    <form onSubmit={hendlerSubmit} className={css.form}>
      <label>
        <h2 className={css.title_name}>Name</h2>
        <input
          onChange={handleChangeInput}
          className={css.name_input}
          type="text"
          name="name"
          required
        />
      </label>
      <label>
        <h2 className={css.title_number}>Number</h2>
        <input
          onChange={handleChangeInput}
          className={css.name_input}
          type="tel"
          name="number"
          required
        />
      </label>
      <button className={css.sub_btn} type="submit">
        Add to contact
      </button>
    </form>
  );
};
