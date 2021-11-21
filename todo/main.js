const STATUSES_LIST = ['In Progress', 'To Do', 'Done'];
const PRIORITY_LIST = ['high', 'low'];

let counterTaskID = 0;

const list = [];

function changeStatus(task, status = STATUSES_LIST[1]) {
  const foundTask = list.find(function (item) {
    return item.name === task;
  });

  foundTask.status = status;

  const isDoneTask = (foundTask.status === STATUSES_LIST[2]);

  if (isDoneTask) delete foundTask.priority;
}

function changePriority(task, priority = PRIORITY_LIST[0]) {
  const foundTask = list.find(function (item) {
    return item.name === task;
  });

  foundTask.priority = priority;
}

function addTask(task) {
  const taskItem = {
    id: ++counterTaskID,
    name: task,
    status: undefined,
    priority: undefined
  };

  list.push(taskItem);

  changeStatus(task);
  changePriority(task);
}

function deleteTask(id) {
  const taskIndexInList = list.findIndex(function (item) {
    return item.id === id;
  });

  list.splice(taskIndexInList, 1);
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


addTask('create a task');
addTask('make a bed');
addTask('write a post');
addTask('have a walk');
addTask('write TODO');

changeStatus('create a task', 'In Progress');
changeStatus('have a walk', 'In Progress');
changeStatus('write TODO', 'Done');

changePriority('create a task', 'low');

deleteTask(4);

// showBy('status');
showBy('priority');