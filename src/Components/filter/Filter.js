import React from 'react';
import s from './Filter.module.css';

const Filter = ({ filter, onChange }) => (
  <label className={s.FilterLabel}>
    Find contacts by name
    <input
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      value={filter}
      onChange={onChange}
      required
      className={s.FilterInput}
    />
  </label>
);

export default Filter;
