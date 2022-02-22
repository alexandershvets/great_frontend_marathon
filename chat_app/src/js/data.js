import { format } from 'date-fns';

/*
После верстки вам нужно отправлять POST запрос на этот адрес
https://chat1-341409.oa.r.appspot.com/api/user

в теле запроса должен быть JSON с вашей почтой 
{ email: ‘my@eamil.com’ }

Если все хорошо - вам на почту придет письмо от ch4tservice@gmail.com
p.s. скорее всего это письмо попадет в спам (проверьте ваши папки) 
p.s.s.  пожалуйста, не отправляйте 999 писем в секунду
*/

const API_URI = 'https://chat1-341409.oa.r.appspot.com/api/user';

function DataMessage(message) {
  this.userName = 'Alexander Shvets';
  this.message = message;
  this.date = format(new Date(), 'H:m');
}

export {
  DataMessage
};