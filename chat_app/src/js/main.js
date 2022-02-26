import '../scss/main.scss';
import { network } from './network';
import { cookies } from './cookie';
import { UserData } from './data';
import { UI, renderMessage, scrollToBottom } from './view';
import { POPUP_NAMES, popupOpen, popupClose } from './popup';
import { ERROR_MESSAGES, isValidEmail } from './error';

const userData = new UserData( cookies.get(cookies.names.userName) );

UI.FORM_MESSAGE.TEXTAREA.onkeydown = (event) => {
  if (event.code === 'Enter' && !event.shiftKey) {
    return false;
  }
};

UI.FORM_MESSAGE.TEXTAREA.addEventListener('keydown', function (event) {
  if (event.code === 'Enter' && !event.shiftKey) {
    formMessageHundler(this.value);
    this.value = '';
  }
});

UI.FORM_MESSAGE.FORM.addEventListener('submit', function (event) {
  event.preventDefault();
  formMessageHundler(UI.FORM_MESSAGE.TEXTAREA.value);
  this.reset();
});

UI.FORM_AUTH.addEventListener('submit', formAuthHundler);
UI.FORM_CONFIR.addEventListener('submit', formConfirHundler);
UI.FORM_SETTINGS.addEventListener('submit', formSettingsHundler);

function formMessageHundler(message) {
  const _message = message.trim();

  if (_message === '') return;

  if (message.length > 500) {
    return alert(ERROR_MESSAGES.MAX_LENGTH_STRING);
  }

  if ( !cookies.get(cookies.names.userName) ) {
    return popupOpen(POPUP_NAMES.AUTH);
  }

  userData.message = _message;
  console.log(userData);
  renderMessage(userData);
  scrollToBottom();
}

function formAuthHundler(event) {
  event.preventDefault();

  if ( cookies.get(cookies.names.token) ) {
    alert(ERROR_MESSAGES.TOKEN);
    return popupClose();
  }

  const email = new FormData(this).get('email');

  if (email === '') {
    return alert(ERROR_MESSAGES.EMPTY_STRING);
  }

  if ( !isValidEmail(email) ) {
    return alert(ERROR_MESSAGES.EMAIL_VALID);
  }

  network.authorizationRequest(email);

  popupOpen(POPUP_NAMES.CONFIR);
  this.reset();
}

function formConfirHundler(event) {
  event.preventDefault();

  const token = new FormData(this).get('token');

  if (token === '') {
    return alert(ERROR_MESSAGES.EMPTY_STRING);
  }

  cookies.set(cookies.names.token, token);

  popupOpen(POPUP_NAMES.SETTINGS);
  this.reset();
}

async function formSettingsHundler(event) {
  event.preventDefault();

  const userName = new FormData(this).get('username');

  if (userName === '' ) {
    return alert(ERROR_MESSAGES.EMPTY_STRING);
  }

  if (!cookies.get(cookies.names.token)) {
    return popupOpen(POPUP_NAMES.AUTH);
  }

  network.settingsRequest(userName, cookies.get(cookies.names.token));
  const response = await network.getUserData( cookies.get(cookies.names.token) );
  
  cookies.set(cookies.names.userId, response._id);
  cookies.set(cookies.names.userName, response.name);

  userData.userName = userName;

  popupClose();
  this.reset();
}



// async function getUserData() {
//   return await network.getUserData(cookies.get(cookies.names.token));
// }
// getUserData().then(console.log);

// async function getHistoryMessages() {
//   return await network.getHistoryMessages(cookies.get(cookies.names.token));
// }
// getHistoryMessages().then(console.log);