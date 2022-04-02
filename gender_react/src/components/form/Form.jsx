// import { Component } from 'react';

import './form.scss';

function Form(props) {

  function handleSubmit(e) {
    e.preventDefault();
    props.onRequest();
  }

  const { name, onChangeName, error } = props;
  const errorClass = error ? '_error' : null;
  
  return (
    <form className="gender__form form-gender" onSubmit={handleSubmit} >
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

export default Form;