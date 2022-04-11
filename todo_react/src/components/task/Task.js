import './task.scss';

function Task({ id, taskName, done, onChangeTaskStatus, onDeleteTask, }) {
  return (
    <li className={`todo-list__item todo-task ${done ? 'todo-task_done' : null}`}>
      <label className="todo-task__checkbox checkbox">
        <input
          className="checkbox__input"
          type="checkbox"
          checked={done}
          onChange={e => onChangeTaskStatus(id, e.target.checked)}
        />
        <div className="checkbox__text"></div>
      </label>

      <div className="todo-task__descr">{taskName}</div>

      <button
        type="button"
        className="todo-task__button"
        onClick={() => onDeleteTask(id)}
      >
      </button>
    </li>
  );
}

export default Task;