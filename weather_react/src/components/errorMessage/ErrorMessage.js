import './errorMessage.scss';

import error from './error.png';

function ErrorMessage() {
  return (
    <img src={error} className="weather__error error" alt="Error" />
  );
}

export default ErrorMessage;