const STATUS = {
  IN_PROGRESS: 'In Progress',
  TO_DO: 'To Do',
  DONE: 'Done'
};

const PRIORITY = {
  HIGHT: 'high',
  LOW: 'low'
};

let id = 0;

let list = [];

function changeStatus(id, status = STATUS.TO_DO) {
  getTask(id).status = status;
}

function changePriority(id, priority = PRIORITY.HIGHT) {
  getTask(id).priority = priority;
}

function addTask(name) {
  id++;
  
  list.push({
    id,
    name,
    status: undefined,
    priority: undefined
  });

  changeStatus(id);
  changePriority(id);
}

function deleteTask(id) {
  list = list.filter(task => task.id !== id);
}

function showBy(typeSort) {
  switch (typeSort) {
    case 'status':
      showList(STATUS, typeSort);
      break;
    case 'priority':
      showList(PRIORITY, typeSort);
      break;
    default:
      return 'Error';
  }
}

function showList(params, typeSort) {
  const sortedList = sortList(params, typeSort);

  for (let key in sortedList) {
    const taskNames = sortedList[key];
    const isEmptyTaskNames = !taskNames.length;

    console.log(key);

    if (isEmptyTaskNames) console.log(' -');

    taskNames.forEach(task => console.log(` "${task}",`));
  }
}

function sortList(params, typeSort) {
  const sortedList = {};

  for (let key in params) {
    sortedList[params[key]] = list
      .filter(task => task[typeSort] === params[key])
      .map(task => task.name);
  }

  return sortedList;
}

function getTask(id) {
  return list.find(task => task.id === id);
}


addTask('create a task');
addTask('make a bed');
addTask('write a post');
addTask('have a walk');
addTask('write TODO');

changeStatus(1, 'In Progress');
changeStatus(4, 'In Progress');
changeStatus(5, 'Done');

changePriority(1, 'low');

deleteTask(4);

// showBy('status');
showBy('priority');