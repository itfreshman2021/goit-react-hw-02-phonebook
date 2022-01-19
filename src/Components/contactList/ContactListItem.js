import React from 'react';
import s from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number, onDeleteContact }) => (
  <li key={id} className={s.ContactListItemli}>
    <p className={s.ContactListItemP}>
      {name}:<span className={s.ContactListItemSpan}>{number}</span>
    </p>
    <button type="button" className={s.ContactListItemButton} onClick={onDeleteContact}>
      Delete
    </button>
  </li>
);

export default ContactListItem;
