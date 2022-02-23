import { format } from 'date-fns';

const API_URI = 'https://chat1-341409.oa.r.appspot.com/api/user';

function DataMessage(message) {
  this.userName = 'Alexander Shvets';
  this.message = message;
  this.date = format(new Date(), 'H:m');
}

async function sendRequest(url, method, body, params) {
  const response = await fetch(url, {
    method: method,
    body: body,
    headers: params
  });

  if (response.ok) {
    return await response.json();
  }
}

export {
  DataMessage,
  API_URI,
  sendRequest
};