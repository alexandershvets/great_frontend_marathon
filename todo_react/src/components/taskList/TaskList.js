import Task from '../task/Task';

import './taskList.scss';

function TaskList({ taskList, onChangeTaskStatus, onDeleteTask }) {
  const list = taskList.map(task => (
    <Task
      key={task.id}
      {...task}
      onChangeTaskStatus={onChangeTaskStatus}
      onDeleteTask={onDeleteTask}
    />
  ));

  return (
    <ul className="todo__list todo-list">
      {list}
    </ul>
  );
}

export default TaskList;