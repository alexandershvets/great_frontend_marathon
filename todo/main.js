const STATUSES_LIST = ['In Progress', 'To Do', 'Done'];
const PRIORITY_LIST = ['high', 'low'];

let counterTaskID = 0;

const list = [];

function changeStatus(task, status = STATUSES_LIST[1]) {
  if ( !checkParameterInTask(status) ) return 'Error';
  
  todoWithFoundTaskInlist(task, function (item) {
    item.status = status;

    const isDoneTask = (item.status === STATUSES_LIST[2]);

    if (isDoneTask) delete item.priority;
  });
}

function changePriority(task, priority = PRIORITY_LIST[0]) {
  if ( !checkParameterInTask(priority) ) return 'Error';
  
  todoWithFoundTaskInlist(task, function (item) {
    item.priority = priority;
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
  todoWithFoundTaskInlist(task, function (item, index) {
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
  let output = '';

  for (let key in sortedList) {
    const tasks = sortedList[key];

    const messageWithTasks = `${key}:\n "${tasks.join('",\n "')}"\n`;
    const messageWithoutTasks = `${key}:\n -\n`;
    
    output += (tasks.length) ? messageWithTasks : messageWithoutTasks;
  }

  console.log( output.trim() );
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

function checkParameterInTask(param) {
  return ( STATUSES_LIST.includes(param) || PRIORITY_LIST.includes(param) );
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
// changeStatus('write a post', 'blablablabla');
// changePriority('have a walk', 'blablablabla');

deleteTask('have a walk');

showBy('status');
// showBy('priority');