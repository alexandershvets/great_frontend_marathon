import { TASK_INFO, changeStatus, getTask, deleteTask } from './data.js';
import { taskList } from './data.js';
import * as storage from './storage.js';

export const UI_ELEMENTS = {
  FORMS: document.querySelectorAll('.todo__field'),
  TASK_LIST: {
    LOW: document.querySelector('.todo__body[data-priority=low]'),
    HIGH: document.querySelector('.todo__body[data-priority=high]')
  }
};

export async function renderTask(task) {
  const { id, name, prioryty, status } = task;

  const taskElem = (status === TASK_INFO.STATUS.DONE) ?
    createTaskElement(id, name, 'done', 'checked') :
    createTaskElement(id, name);

  switch (prioryty) {
    case TASK_INFO.PRIORITY.HIGH:
      addTaskInList(UI_ELEMENTS.TASK_LIST.HIGH);
      break;
    case TASK_INFO.PRIORITY.LOW:
      addTaskInList(UI_ELEMENTS.TASK_LIST.LOW);
      break;
  }

  function addTaskInList(taskListUi) {
    taskListUi.insertAdjacentHTML('beforebegin', taskElem);
  }

  getTaskElements();
}

function createTaskElement(id, taskName, className = '', checked = '') {
  return `
    <div data-id="${id}" class="todo__task task ${className}">
      <label class="task__checkbox checkbox">
        <input type="checkbox" value="" class="checkbox__input" ${checked}>
        <div class="checkbox__text"></div>
      </label>
      <div class="task__text">
        ${taskName}
      </div>
      <button type="button" class="task__btn task__btn_close">
        <span></span>
      </button>
    </div>
  `;
}

export function getTaskElements() {
  const taskElements = document.querySelectorAll('.task');

  taskElements.forEach(taskElem => taskElem.addEventListener('click', taskHundler));
}

async function taskHundler(e) {
  const target = e.target;
  
  if (target && target.classList.contains('checkbox__input')) {
    const idTargetTask = getIdTargetTask(target);
    const dataTargetTask = getTask(idTargetTask);

    const statusIsToDo = dataTargetTask.status === TASK_INFO.STATUS.TO_DO;

    if (statusIsToDo) {
      changeStatus(idTargetTask, TASK_INFO.STATUS.DONE);
    } else {
      changeStatus(idTargetTask, TASK_INFO.STATUS.TO_DO);
    }

    storage.setTaskList(taskList);
    target.closest('.task').classList.toggle('done');
  }

  if (target && target.classList.contains('task__btn_close')) {
    const idTargetTask = getIdTargetTask(target);

    deleteTask(idTargetTask);
    storage.setTaskList(taskList);
    target.parentNode.remove();
  }

  function getIdTargetTask(taskElem) {
    return +taskElem.closest('.task').dataset.id;
  }
}

export async function showTaskList() {
  taskList.forEach(task => renderTask(task));
}