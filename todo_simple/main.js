'use strict';

const list = {
  "create a task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do",
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
  const resultObj = {};
  let strTodo = '';
  let strProgress = '';
  let strDone = '';

  for (let task in list) {
    const status = list[task];

    switch (status) {
      case 'To Do':
        strTodo += ' "' + task + '",\n';
        break;
      case 'In Progress':
        strProgress += ' "' + task + '",\n';
        break;
      case 'Done':
        strDone += ' "' + task + '",\n';
        break;
    }
  }

  resultObj['To Do'] = strTodo;
  resultObj['In Progress'] = strProgress;
  resultObj['Done'] = strDone;

  for (let key in resultObj) {
    if (!resultObj[key]) {
      resultObj[key] = ' -\n';
    }
  }

  let result = '';
  
  for (let key in resultObj) {
    result += key + ':\n' + resultObj[key];
  }

  console.log( result.trim() );
}

changeStatus('create a task', 'Done');
addTask('have a walk');
deleteTask('have a walk');
showList(list);
