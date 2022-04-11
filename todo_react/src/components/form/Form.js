import { useState } from 'react';

import './form.scss';

function getPlaceholder(priority) {
  switch (priority) {
    case 'high':
      return 'Добавить важное дело';
    case 'low':
      return 'Добавить несрочное дело';
    default:
      return 'Введите название таска';
  }
}

function Form(props) {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (taskName === '') return;
    
    props.onAddTask(taskName, e.target.dataset.priority);

    setTaskName('');
  };

  const handleChange = e => setTaskName(e.target.value);

  return (
    <form
      data-priority={props.priority}
      className="todo__form form"
      onSubmit={handleSubmit}
    >
      <div className="form__line todo-item">
        <input
          type="text"
          className="form__input"
          placeholder={getPlaceholder(props.priority)}
          onChange={handleChange}
          value={taskName}
        />
        <button type="submit" className="form__button"></button>
      </div>
    </form>
  );
}

export default Form;