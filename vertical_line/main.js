function showVerticalMessage(str, maxlength = 10) {
  const isNotValid = !str || isFinite(str);
  
  if ( isNotValid ) {
    console.log('Вы ввели некорректные данные!');
    return;
  }
  
  if ( str.startsWith('м') ) {
    str = str[0].toUpperCase() + str.slice(1);
  }

  let output = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if ( i > (maxlength - 1) ) break;

    output += `${char}\n`;
  }

  console.log( output.trim() );
}

showVerticalMessage('марафон');
// showVerticalMessage('Марафон');
// showVerticalMessage('мармышка');
// showVerticalMessage('синхрофазатрон');

// showVerticalMessage('');
// showVerticalMessage(' ');
// showVerticalMessage(0);
// showVerticalMessage(123);
// showVerticalMessage();