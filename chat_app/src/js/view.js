import { network } from "./network";
import { UserData } from './data';
import { format } from 'date-fns';
import { cookies } from './cookie';

const UI = {
  FORM_MESSAGE: {
    FORM: document.querySelector('.form-send-message'),
    TEXTAREA: document.querySelector('.form-send-message__textarea'),
  },
  FORM_AUTH: document.getElementById('form-authorization'),
  FORM_CONFIR: document.getElementById('form-confirmation'),
  FORM_SETTINGS: document.getElementById('form-settings'),

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

async function renderMessages() {
  const email = cookies.get(cookies.names.email);

  if (!email) return;

  const { messages } = await network.getHistoryMessages( cookies.get(cookies.names.token) );
  const userData = new UserData();

  messages.forEach(({user, createdAt, text}, index) => {
    // if(index > 30) return;

    userData.userName = user.name;
    userData.message = text;
    userData.date = format(new Date(createdAt), 'H:m');
    userData.incoming = (email !== user.email);

    renderMessage(userData);
  });
}
renderMessages();

function renderMessage({ userName, message, date, incoming}) {
  let messageElem = document.createElement('div');
  messageElem = UI.TEMPLATES.MESSAGE.content.cloneNode(true);

  const messageArea = messageElem.querySelector('.messages-area__message');
  const messageUserNameElem = messageElem.querySelector('.message__user-name');
  const messageTextElem = messageElem.querySelector('.message__text');
  const messageDateElem = messageElem.querySelector('.message__time');

  if (incoming) {
    messageArea.classList.add('message_incoming');
  }

  messageUserNameElem.textContent = userName;
  messageTextElem.textContent = message;
  messageDateElem.textContent = date;
  messageDateElem.setAttribute('datetime', date);

  UI.AREA_MESSAGES.append(messageElem);
}

function scrollToBottom() {
  const elem = document.querySelector('.message:last-child');
  elem.scrollIntoView();
}

export {
  UI,
  renderMessage,
  scrollToBottom
};