function setTaskList(taskList) {
  localStorage.setItem('taskList', JSON.stringify(taskList));
}

function getTaskList() {
  return localStorage.getItem('taskList');
}

function setTaskId(id) {
  localStorage.setItem('id', id);
}

function getTaskId() {
  return localStorage.getItem('id');
}

export { setTaskList, getTaskList, setTaskId, getTaskId };