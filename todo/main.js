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

  for (let key in sortedList) {
    const tasks = sortedList[key];

    console.log(key);

    tasks.forEach(function (task) {
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

// showBy('status');
showBy('priority');



//===================================================================

// const STATUS_IN_PROGRESS = "In Progress";
// const STATUS_DONE = "Done";
// const STATUS_TO_DO = "To Do";

// const PRIORITY_LOW = "low";
// const PRIORITY_HIGH = "high";

// const list = [ 
// { 
//     id: 1,
//     name: 'create a post',
//     status: STATUS_TO_DO,
//     priority: PRIORITY_LOW  
// }, 
// { 
//     id: 2,
//     name: 'make a bed',
//     status: STATUS_DONE,
//     priority: PRIORITY_HIGH  
// },
// {
//     id: 3,
//     name: "create a task",
//     status: STATUS_IN_PROGRESS,
//     priority: PRIORITY_HIGH 
// } 
// ] 


// function changeStatus (nameOfTask, statusOfTask = STATUS_TO_DO) { 
//     list.find ( function (item) {
//         if (item.name == nameOfTask) { return item.status = statusOfTask }
//     } );   
// };


// function addTask (name, priority = " ") {
//     list.push ({
//         id: list.length + 1,
//         name: name,
//         status: STATUS_TO_DO,
//         priority: priority,
//     })   
// };

// function deleteTask (nameOfTask) { 
//     let indexOfTask = list.findIndex ( function (item) {
//         return item.name == nameOfTask; 
//     });

//     list.splice(indexOfTask, 1); 
    
//     list.forEach ( function (item, index) {
//         return item.id = index + 1;           // to change id after delete
//     })  
// };

// function choiceOfKey (key) {
//     let count = false;

//     console.log (key + ":");
//     list.filter (function (item) {
//     const choisePriorityOrStatus = item.priority === key || item.status === key;

// 	if ( choisePriorityOrStatus ) {
//         console.log (" " + item.name);
//         count = true;
//         } 
//     })

//     if (!count) { 
//         console.log (" -") 
//     };
//     count = false;
// }

// function showList (group) {
    
//     switch (group) {
//         case "status":
//             choiceOfKey (STATUS_TO_DO);
//             choiceOfKey (STATUS_IN_PROGRESS);
//             choiceOfKey (STATUS_DONE);
//         break;

//         case "priority":
//             choiceOfKey (PRIORITY_HIGH);
//             choiceOfKey (PRIORITY_LOW);
//         break;
//         default: console.log ("Выберите группу: priority или status")
//     }
              
// }

// // showList("priority")
// showList("status")