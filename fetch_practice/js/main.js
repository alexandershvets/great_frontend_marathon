import { UI_ELEMENTS } from './view.js';

const API_URL = {
  GENDERIZE: 'https://api.genderize.io',
  NATIONALIZE: 'https://api.nationalize.io'
};

UI_ELEMENTS.FORM.addEventListener('submit', send);

function send(event) {
  event.preventDefault();

  const firtsName = UI_ELEMENTS.NAME_FIELD.value;
  const paramsGET = `?name=${firtsName}`;
  const genderizeUri = getUri(API_URL.GENDERIZE, paramsGET);
  const nationalizeUri = getUri(API_URL.NATIONALIZE, paramsGET);

  try {
    const isNotValidName = (typeof firtsName !== 'string' || firtsName === '');
    
    if (isNotValidName) {
      throw new Error('Error: The entered data is not correct!');
    }

    UI_ELEMENTS.NAME_FIELD.classList.remove('_error');
    UI_ELEMENTS.OUTPUT_INFO.classList.remove('_error');

    makeRequest(genderizeUri, function (person) {
      UI_ELEMENTS.OUTPUT_INFO.classList.add('_active');
      UI_ELEMENTS.OUTPUT_NAME.textContent = person.name;
      UI_ELEMENTS.OUTPUT_GENDER.textContent = person.gender;
  
      console.log(person);
    });
  
    makeRequest(nationalizeUri, function (response) {
      const country = response.country;
      const countriesId = country.map((country) => country.country_id);
  
      UI_ELEMENTS.OUTPUT_COUNTRY.textContent = countriesId.join(', ');
    });
    
  } catch (err) {
    UI_ELEMENTS.OUTPUT_INFO.classList.remove('_active');
    UI_ELEMENTS.NAME_FIELD.classList.add('_error');
    UI_ELEMENTS.OUTPUT_INFO.classList.add('_error');
    UI_ELEMENTS.OUTPUT_ERROR.textContent = err.message;
  }
  
  this.reset();
}

function getUri(url, params) {
  return `${url}${params}`;
}

function makeRequest(url, callback) {
  fetch(url)
    .then( (response) => response.json() )
    .then( (response) => callback(response) );
}