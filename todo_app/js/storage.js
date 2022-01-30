function setTaskList(taskList) {
  localStorage.setItem('taskList', JSON.stringify(taskList));
}

function getTaskList() {
  return localStorage.getItem('taskList');
}

function setTaskId(id) {
  localStorage.setItem('taskId', id);
}

function getTaskId() {
  return localStorage.getItem('taskId');
}

export { setTaskList, getTaskList, setTaskId, getTaskId };