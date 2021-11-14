const STATUSES_LIST = ['In Progress', 'To Do', 'Done'];
const PRIORITY_LIST = ['high', 'low'];

let taskID = 0;

const list = [];

function changeStatus(task, status = STATUSES_LIST[1]) {
  searchTaskInList(task, function (item) {
    item.status = status;
  });
}

function changePriority(task, priority = PRIORITY_LIST[0]) {
  searchTaskInList(task, function (item) {
    item.priority = priority;
  });
}

function addTask(task) {
  list.push({
    id: ++taskID,
    name: task,
    status: undefined,
    priority: undefined
  });
  
  changeStatus(task);
  changePriority(task);
}

function deleteTask(task) {
  searchTaskInList(task, function (item, index) {
    list.splice(index, 1);
  });
}

function showBy(param) {
  const parametrsList = (param === 'status') ? STATUSES_LIST : PRIORITY_LIST;

  showList(parametrsList, param);
}

function showList(params, value) {
  const sortList = sortingList(params, value);
  let output = '';

  for (let key in sortList) {
    const tasks = sortList[key];

    const messageWithTasks = `${key}:\n "${tasks.join('",\n "')}"\n`;
    const messageWithoutTasks = `${key}:\n -\n`;
    
    output += (tasks.length) ? messageWithTasks : messageWithoutTasks;
  }

  console.log( output.trim() );
}

function sortingList(params, value) {
  const sortList = {};

  params.forEach(function (param) {
    sortList[param] = list
      .filter(function (task) {
        return task[value] === param;
      })
      .map(function (task) {
        return task.name;
      });
  });

  return sortList;
}

function searchTaskInList(task, callback) {
  list.forEach(function (item, index) {
    if (item.name === task) {
      callback(item, index);
    }
  });
}


addTask('create a task');
addTask('make a bed');
addTask('write a post');
addTask('have a walk');

changeStatus('create a task', 'In Progress');
// changeStatus('make a bed', 'Done');
// changeStatus('write a post', 'To Do');
changeStatus('have a walk', 'In Progress');

changePriority('write a post', 'low');

deleteTask('have a walk');

showBy('status');
// showBy('priority');