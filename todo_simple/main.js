'use strict';

const list = {
  // "create a task": "In Progress",
  // "create a tasks": "In Progress",
  // "make a bed": "Done",
  // "make a beds": "Done",
  // "write a post": "To Do",
  // "write a posts": "To Do",
};

function changeStatus(task, status) {
  list[task] = status;
}

function addTask(task) {
  list[task] = 'To Do';
}

function deleteTask(task) {
  delete list[task];
}

function showList(list) {
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

// changeStatus('create a task', 'Done');
addTask('have a walk');
// deleteTask('have a walk');
showList(list);