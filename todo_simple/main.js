'use script';

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
  let todo = '';
  let progress = '';
  let done = '';

  for (let task in list) {
    const status = list[task];

    switch (status) {
      case 'To Do':
        todo += ' "' + task + '",' + '\n';
        break;
      case 'In Progress':
        progress += ' "' + task + '",' + '\n';
        break;
      case 'Done':
        done += ' "' + task + '",' + '\n';
        break;
    }
  }

  resultObj['To Do'] = todo;
  resultObj['In Progress'] = progress;
  resultObj['Done'] = done;

  if (!resultObj['To Do']) {
    resultObj['To Do'] = ' -\n';
  }
  if (!resultObj['In Progress']) {
    resultObj['In Progress'] = ' -\n';
  }
  if (!resultObj['Done']) {
    resultObj['Done'] = ' -\n';
  }

  let result = '';
  
  for (let key in resultObj) {
    result += key + ':\n' + resultObj[key];
  }

  console.log(result.trim());
}

changeStatus('create a task', 'Done');
addTask('have a walk');
deleteTask('have a walk');
showList(list);
