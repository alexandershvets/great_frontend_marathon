class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

// class ReadError extends MyError {
//   constructor(message, cause) {
//     super(message);
//     this.cause = cause;
//   }
// }

class ValidationError extends MyError { }

class EmptyStringError extends ValidationError {
  constructor() {
    super(`Пустое поле сообщения!`);
  }
}

class MaxStringLengthError extends ValidationError {
  constructor() {
    super(`Не больше 500 символов!`);
  }
}

export {
  ValidationError,
  EmptyStringError,
  MaxStringLengthError
};