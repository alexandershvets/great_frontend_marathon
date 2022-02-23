import '../scss/main.scss';
import './popup';
import { UI, renderMessage } from './view';
import { DataMessage, API_URI, sendRequest } from './data';
import { isValidEmail } from './hellpers';
import { ValidationError, EmptyStringError, EmailValidError } from './error';

UI.FORM_MESSAGE.FORM.addEventListener('submit', (event) => {
  event.preventDefault();

  formMessageHundler(UI.FORM_MESSAGE.TEXTAREA.value);
});

UI.FORM_MESSAGE.TEXTAREA.onkeydown = (event) => {
  if (event.code === 'Enter' && !event.shiftKey) {
    return false;
  }
};

UI.FORM_MESSAGE.TEXTAREA.addEventListener('keydown', function (event) {
  if (event.code === 'Enter' && !event.shiftKey) {
    formMessageHundler(this.value);
  }
});

function formMessageHundler(data) {
  const dataMessage = new DataMessage(data);
  renderMessage(dataMessage);
  formMessageReset();
}

function formMessageReset() {
  UI.FORM_MESSAGE.TEXTAREA.value = '';
}

UI.FORM_AUTH.addEventListener('submit', async function (event) {
  event.preventDefault();

  try {
    const email = new FormData(this).get('email');

    if (email === '') {
      throw new EmptyStringError();
    }
  
    if ( !isValidEmail(email) ) {
      throw new EmailValidError();
    }

    const json = JSON.stringify({ email: email });
    const params = {'Content-type': 'application/json; charset=utf-8'};
    const response = await sendRequest(API_URI, 'POST', json, params);
    console.log(response);

    // ответ {"email":"all.shvets.st@gmail.com","name":"all.shvets.st@gmail.com"}
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsbC5zaHZldHMuc3RAZ21haWwuY29tIiwiaWF0IjoxNjQ1NTcxMzQwLCJleHAiOjE2NDYwMTc3NDB9.cqZ8QsoTzafzrmiQppCel17F1uZ8xX7KjuStKq7ZwnE

  } catch (err) {
    
    if (err instanceof ValidationError) {
      console.log(err.message);
    } else {
      console.log(err);
    }

  } finally {
    this.reset();
  }

});

window.addEventListener('unhandledrejection', () => {
  alert('Произошла непредвиденная ошибка!');
});