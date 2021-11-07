const STATUS_IN_PROGRESS = 'In Progress';
const STATUS_DONE = 'Done';
const STATUS_TO_DO = 'To Do';

const list = {};

function changeStatus(task, status = STATUS_TO_DO) {
  if ( isTaskInList(task) )
    list[task] = status;
}

function addTask(task) {
  list[task] = undefined;
  changeStatus(task);
}

function deleteTask(task) {
  if ( isTaskInList(task) )
    delete list[task];
}

function showList() {
  const result = {
    [STATUS_TO_DO]: '',
    [STATUS_IN_PROGRESS]: '',
    [STATUS_DONE]: '',
  };

  for (let task in list) {
    const status = list[task];
    const tasksMessage = ` "${task}",\n`;

    switch (status) {
      case STATUS_TO_DO:
        result[status] += tasksMessage;
        break;
      case STATUS_IN_PROGRESS:
        result[status] += tasksMessage;
        break;
      case STATUS_DONE:
        result[status] += tasksMessage;
        break;
    }
  }

  let output = '';
  
  for (let key in result) {
    const isHaveTask = result[key];
    const messageWithTasks = `${key}:\n${isHaveTask}`;
    const messageWithoutTasks = `${key}:\n -\n`;
    
    output += (isHaveTask) ? messageWithTasks : messageWithoutTasks;
  }

  console.log( output.trim() );
}

function isTaskInList(task) {
  return task in list;
}


addTask('create a task');
addTask('make a bed');
addTask('write a post');
addTask('have a walk');

changeStatus('create a task', 'In Progress');
changeStatus('make a bed', 'Done');
changeStatus('write a post', 'To Do');
changeStatus('have a walk', 'In Progress');

deleteTask('have a walk');

showList();