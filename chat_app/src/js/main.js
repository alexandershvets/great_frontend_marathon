import '../scss/main.scss';
import './popup';
import { UI, renderMessage } from './view';
import { DataMessage } from './data';

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

window.addEventListener('unhandledrejection', () => {
  alert('Произошла непредвиденная ошибка!');
});