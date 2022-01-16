import React from 'react';

import { v4 as uuidv4 } from 'uuid';
import s from './App.module.css';


class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  
  contactNew = {
      id: uuidv4(),
      name: '',
    };

  handleChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
    this.contactNew = {
      id: uuidv4(),
      [event.currentTarget.name]: event.currentTarget.value,
    };
   

  };

  HandleSubmit = event => {
    event.preventDefault();
    this.setState(({contacts}) => ({contacts: [this.contactNew,...contacts],}))
    this.reset();
  
    console.log(this.state);
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <>
        <div className={s.phonebook}>
          <h1>Phonebook</h1>
          <form onSubmit={this.HandleSubmit} className={s.form}>
            <label className={s.label}>
              Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                value={this.state.name}
                onChange={this.handleChange}
                required
                className={s.input}
              />
            </label>
            <button type="submit" className={s.button}>Add contact</button>
          </form>
          <h2>Contacts</h2>
          <ul>
            {this.state.contacts.map(contact => {
              const { id, name } = contact;
              return (
                <li key={id} className={s.li}>
                  <p>{name}</p>
              </li>
            );})} 
          </ul>
        </div>
      </>
    );
  }
}
export default App;
