import React from 'react';
import s from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number }) => (
  <li key={id} className={s.ContactListItemli}>
    <p>
      {name}:<span className={s.ContactListItemSpan}>{number}</span>
    </p>
  </li>
);

export default ContactListItem;
