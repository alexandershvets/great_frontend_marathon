import './spinner.scss';

import spinner from './spinner.gif';

function Spinner() {
  return (
    <img src={spinner} className="weather__loading loading" alt="Loading" />
  );
}

export default Spinner;