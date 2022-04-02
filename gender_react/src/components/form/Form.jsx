import { Component } from 'react';

import './form.scss';

class Form extends Component {

  handleSubmit = (e) => {
    this.props.onRequest();
    e.preventDefault();
  }

  render() {
    const { name, onChangeName, error } = this.props;
    const errorClass = error ? '_error' : null;
    
    return (
      <form className="gender__form form-gender" onSubmit={this.handleSubmit} >
        <div className="form-gender__field">
          <input
            type="text"
            placeholder="Enter Name"
            className={`form-gender__input ${errorClass}`}
            value={name}
            onChange={(e) => onChangeName(e.target.value)}
          />
          <button
            type="submit"
            className="form-gender__button"
          >
            Get info
          </button>
        </div>
      </form>
    )
  }
}

export default Form;