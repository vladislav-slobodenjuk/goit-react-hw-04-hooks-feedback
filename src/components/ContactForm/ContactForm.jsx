import { Component } from 'react/cjs/react.production.min';
// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import s from './ContactForm.module.scss';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      id: nanoid(8),
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form className={s.mainForm} onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          className={s.nameInput}
          type="text"
          name="name"
          id="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.name}
          onChange={this.handleInputChange}
        />
        <label htmlFor="number">Number</label>
        <input
          className={s.telInput}
          type="tel"
          id="number"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.number}
          onChange={this.handleInputChange}
        />
        <button className={s.submitButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

// Form.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func,
//   onSubmit: PropTypes.func,
// };

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.number.isRequired,
//     }),
//   ),
// };

// Ваоидация от props не работает, только от contacts после деструктуризвции
