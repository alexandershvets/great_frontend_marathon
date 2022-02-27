import { format } from 'date-fns';

function UserData(userName, email, message, date = format(new Date(), 'H:m'), incoming = false) {
  this.userName = userName;
  this.email = email;
  this.message = message;
  this.date = date;
  this.incoming = incoming;
}

export {
  UserData
};