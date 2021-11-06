'use strict';

const list = {
  "create a task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do",
};

function changeStatus(task, status) {
  if (task in list)
    list[task] = status;
}

function addTask(task) {
  list[task] = null;
}

function deleteTask(task) {
  delete list[task];
}

function showList() {
  const resultObj = {
    'To Do': '',
    'In Progress': '',
    'Done': '',
  };

  for (let task in list) {
    const status = list[task];
    const strWithTasks = ' "' + task + '",\n';

    switch (status) {
      case 'To Do':
        resultObj[status] += strWithTasks;
        break;
      case 'In Progress':
        resultObj[status] += strWithTasks;
        break;
      case 'Done':
        resultObj[status] += strWithTasks;
        break;
    }
  }

  let output = '';
  
  for (let key in resultObj) {
    const value = resultObj[key];
    const strWithTasks = key + ':\n' + value;
    const strWithoutTasks = key + ':\n -\n';
    
    output += (value) ? strWithTasks : strWithoutTasks;
  }

  console.log( output.trim() );
}


addTask('have a walk');
addTask('some task');

changeStatus('have a walk', 'To Do');
changeStatus('some task', 'In Progress');
changeStatus('create a task', 'Done');

deleteTask('have a walk');

showList();