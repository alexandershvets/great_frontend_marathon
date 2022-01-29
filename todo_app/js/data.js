import * as storage from './storage.js';

export const TASK_INFO = {
  STATUS: {
    TO_DO: 'To Do',
    DONE: 'Done'
  },
  PRIORITY: {
    HIGH: 'high',
    LOW: 'low'
  }
};

export let taskList = JSON.parse( storage.getTaskList() ) || [];

export function addTask(task) {
  taskList.push(task);
  // storage.setTaskList(taskList);
}

export function Task(id, name, prioryty, status = TASK_INFO.STATUS.TO_DO) {
  this.id = id;
  this.name = name;
  this.prioryty = prioryty;
  this.status = status;
}

export function changeStatus(id, status = TASK_INFO.STATUS.TO_DO) {
  getTask(id).status = status;
}

export function getTask(id) {
  return taskList.find(task => task.id === id);
}

export function deleteTask(id) {
  taskList = taskList.filter(task => task.id !== id);
  storage.setTaskList(taskList);
}