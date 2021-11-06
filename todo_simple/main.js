'use strict';

const list = {
  "create a task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do",
};

function changeStatus(task, status) {
  const isTaskExist = task in list;

  if (isTaskExist) list[task] = status;
}

function addTask(task) {
  list[task] = null;
}

function deleteTask(task) {
  const isTaskExist = task in list;
  
  if (isTaskExist) delete list[task];
}

function showList() {
  const resultObj = {
    'To Do': '',
    'In Progress': '',
    'Done': '',
  };

  for (let task in list) {
    const status = list[task];

    switch (status) {
      case 'To Do':
        resultObj[status] += ' "' + task + '",\n';
        break;
      case 'In Progress':
        resultObj[status] += ' "' + task + '",\n';
        break;
      case 'Done':
        resultObj[status] += ' "' + task + '",\n';
        break;
    }
  }

  let result = '';
  
  for (let key in resultObj) {
    result += (resultObj[key]) ?
      key + ':\n' + resultObj[key] :
      key + ':\n -\n';
  }

  console.log( result.trim() );
}


addTask('have a walk');
addTask('some task');

changeStatus('have a walk', 'To Do');
changeStatus('some task', 'In Progress');
changeStatus('create a task', 'Done');

deleteTask('have a walk');

showList();