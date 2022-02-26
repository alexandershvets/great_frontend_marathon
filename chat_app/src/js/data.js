import { format } from 'date-fns';

function UserData(userName, message = '') {
  this.userName = userName;
  this.message = message;
  this.date = format(new Date(), 'H:m');
  this.incoming = false;
}

export {
  UserData
};