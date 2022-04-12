import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import Container from '../container/Container';
import Form from '../form/Form';
import TaskList from '../taskList/TaskList';
import Storage from '../../storage/Storage';

import './app.scss';

const storage = new Storage();

function App() {
  const [taskList, setTaskList] = useState( storage.getTaskList() || [] );

  useEffect(() => storage.setTaskList(taskList), [taskList]);

  const onAddTask = (taskName, priority) => {
    const newTask = {
      taskName,
      priority,
      done: false,
      id: nanoid(5)
    };

    setTaskList([newTask, ...taskList]);
  };

  const onChangeTaskStatus = (id, done) => {
    setTaskList(taskList => taskList.map(task => task.id === id ? { ...task, done } : task));
  }

  const onDeleteTask = id => {
    setTaskList(taskList => taskList.filter(task => task.id !== id));
  };

  const getTaskListByPrioryty = (priority) => {
    if ( !Array.isArray(taskList) ) return;

    return taskList.filter(task => task.priority === priority);
  };

  return (
    <Container>
      <div className="todo">
        <div className="todo__row">
          <h2 className="todo__title">High</h2>
          <Form
            priority='high'
            onAddTask={onAddTask}
          />
          <TaskList
            taskList={getTaskListByPrioryty('high')}
            onChangeTaskStatus={onChangeTaskStatus}
            onDeleteTask={onDeleteTask}
          />
        </div>
        
        <div className="todo__row">
          <h2 className="todo__title">Low</h2>
          <Form
            priority='low'
            onAddTask={onAddTask}
          />
          <TaskList
            taskList={getTaskListByPrioryty('low')}
            onChangeTaskStatus={onChangeTaskStatus}
            onDeleteTask={onDeleteTask}
          />
        </div>
      </div>
    </Container>
  );
}

export default App;
