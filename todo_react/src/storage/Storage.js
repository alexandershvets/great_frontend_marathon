
class Storage {
  setTaskList(taskList) {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }

  getTaskList() {
    return JSON.parse( localStorage.getItem('taskList') );
  }
}

export default Storage;