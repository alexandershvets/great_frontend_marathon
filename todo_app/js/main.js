import { UI_ELEMENTS, renderTask, showTaskList } from './view.js';
import { taskList, Task, addTask } from './data.js';
import * as storage from './storage.js';

showTaskList();

UI_ELEMENTS.FORMS.forEach(form => form.addEventListener('submit', formHundler));

function formHundler(e) {
  e.preventDefault();

  const taskName = this.querySelector('.todo__input').value.trim();
  const priority = this.dataset.priority;

  if (taskName === '') return;

  const id = window.id++;

  storage.setTaskId(id);
  const task = new Task(id, taskName, priority);

  addTask(task);
  renderTask(task);
  storage.setTaskList(taskList);

  this.reset();
}