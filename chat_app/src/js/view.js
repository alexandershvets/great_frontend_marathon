import { ValidationError, EmptyStringError, MaxStringLengthError } from './error';

const UI = {
  FORM_MESSAGE: {
    FORM: document.querySelector('.form-send-message'),
    TEXTAREA: document.querySelector('.form-send-message__textarea'),
  },
  FORM_AUTH: document.getElementById('form-authorization'),
  AREA_MESSAGES: document.querySelector('.messages-area__list'),
  TEMPLATES: {
    MESSAGE: document.getElementById('tmpl-message'),
  },
  POPUP: {
    WINDOWS: document.querySelectorAll('.popup'),
    OPEN_LINKS: document.querySelectorAll('._popup-open'),
    CLOSE_BTNS: document.querySelectorAll('.popup__close')
  },
};

function renderMessage({userName, message, date}) {
  try {
    
    if (message === '') {
      throw new EmptyStringError();
    }

    if (message.length > 500) {
      throw new MaxStringLengthError();
    }

    let messageElem = document.createElement('div');
    messageElem = UI.TEMPLATES.MESSAGE.content.cloneNode(true);

    const messageUserNameElem = messageElem.querySelector('.message__user-name');
    const messageTextElem = messageElem.querySelector('.message__text');
    const messageDateElem = messageElem.querySelector('.message__time');

    messageUserNameElem.textContent = userName;
    messageTextElem.textContent = message;
    messageDateElem.textContent = date;
    messageDateElem.setAttribute('datetime', date);

    UI.AREA_MESSAGES.append(messageElem);

  } catch (err) {

    if (err instanceof ValidationError) {
      console.log(err.message);
    } else {
      console.log(err);
    }

  }
}

export { UI, renderMessage };