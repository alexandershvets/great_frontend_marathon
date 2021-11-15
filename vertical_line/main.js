function showVerticalMessage(str) {
  const FIRST_UPPER_CASE_LETTER = 'м';
  const MAX_LENGTH = 10;

  let resultText = '';

  if ( str.startsWith(FIRST_UPPER_CASE_LETTER) ) {
    resultText = str[0].toUpperCase() + str.slice(1);
  }

  if (str.length > MAX_LENGTH) {
    resultText = str.slice(0, MAX_LENGTH);
  }

  for (let char of resultText) {
    console.log(char);
  }
}

showVerticalMessage('марафон');
// showVerticalMessage('Марафон');
// showVerticalMessage('мармышка');
// showVerticalMessage('синхрофазатрон');