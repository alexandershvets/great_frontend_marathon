import './location.scss';

function Location({ cityName, onDeleteCity, onRequest }) {
  return (
    <li className="locations-weather__item location-weather">
      <button
        type="button"
        className="location-weather__send"
        onClick={() => onRequest(cityName)}
      >
        {cityName}
      </button>
      <button
        type="button"
        className="location-weather__delete"
        onClick={() => onDeleteCity(cityName)}
      >
        <svg width="14px" height="18px" viewBox="0 0 14 18" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g fill="#000000" transform="translate(-299.000000, -129.000000)">
              <g id="delete" transform="translate(299.000000, 129.000000)">
                <path d="M1,16 C1,17.1 1.9,18 3,18 L11,18 C12.1,18 13,17.1 13,16 L13,4 L1,4 L1,16 L1,16 Z M14,1 L10.5,1 L9.5,0 L4.5,0 L3.5,1 L0,1 L0,3 L14,3 L14,1 L14,1 Z" id="Shape"/>
              </g>
            </g>
          </g>
        </svg>
      </button>
    </li>
  );
}

export default Location;