import data from './data.json';


function showUsersInfo() {
  data.users.forEach(function (user) {
    let userInfo = `${user.firstName}, born ${user.dateOfBirth} - ${user.knowsAs}`;

    console.log(userInfo);
  });
}

showUsersInfo();


function getListUsersName() {
  const json = JSON.stringify(data, ['users', 'firstName', 'lastName']);
  const users = JSON.parse(json).users;

  return users;
}

console.log( getListUsersName() );