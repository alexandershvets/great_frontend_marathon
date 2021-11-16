const STATUSES_LIST = ['In Progress', 'To Do', 'Done'];
const PRIORITY_LIST = ['high', 'low'];

let counterTaskID = 0;

const list = [];

function changeStatus(task, status = STATUSES_LIST[1]) {
  todoWithFoundTaskInlist(task, function (task) {
    task.status = status;

    const isDoneTask = (task.status === STATUSES_LIST[2]);

    if (isDoneTask) delete task.priority;
  });
}

function changePriority(task, priority = PRIORITY_LIST[0]) {
  todoWithFoundTaskInlist(task, function (task) {
    task.priority = priority;
  });
}

function addTask(task) {
  list.push({
    id: ++counterTaskID,
    name: task,
    status: undefined,
    priority: undefined
  });
  
  changeStatus(task);
  changePriority(task);
}

function deleteTask(task) {
  todoWithFoundTaskInlist(task, function (task, index) {
    list.splice(index, 1);
  });
}

function showBy(param) {
  switch (param) {
    case 'status':
      showList(STATUSES_LIST, param);
      break;
    case 'priority':
      showList(PRIORITY_LIST, param);
      break;
    default:
      return 'Error';
  }
}

function showList(params, value) {
  const sortedList = sortList(params, value);

  for (let key in sortedList) {
    const taskNames = sortedList[key];
    const isEmptyTaskNames = !taskNames.length;

    console.log(key);

    if (isEmptyTaskNames) console.log(' -');

    taskNames.forEach(function (task) {
      console.log(` "${task}",`);
    });
  }
}

function sortList(params, value) {
  const sortedList = {};

  params.forEach(function (param) {
    sortedList[param] = list
      .filter(function (task) {
        return task[value] === param;
      })
      .map(function (task) {
        return task.name;
      });
  });

  return sortedList;
}

function todoWithFoundTaskInlist(task, callback) {
  list.forEach(function (item, index) {
    if (item.name === task) callback(item, index);
  });
}


addTask('create a task');
addTask('make a bed');
addTask('write a post');
addTask('have a walk');
addTask('write TODO');

changeStatus('create a task', 'In Progress');
changeStatus('have a walk', 'In Progress');
changeStatus('write TODO', 'Done');

changePriority('create a task', 'low');

deleteTask('have a walk');

// showBy('status');
showBy('priority');