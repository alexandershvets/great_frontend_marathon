const ERROR_MESSAGES = {
  EMAIL_VALID: 'Email некорректен!',
  EMPTY_STRING: 'Поле не должно быть пустым!',
  MAX_LENGTH_STRING: 'Не больше 500 символов!',
  REQUEST_FAIL: 'Ошибка сети',
  TOKEN: 'Вы уже авторизованы!',
  UNHANDLED: 'Произошла непредвиденная ошибка!'
};

function isValidEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(email);
}

class RequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'RequestError';
  }
}

export {
  ERROR_MESSAGES,
  isValidEmail,
  RequestError
};