function showVerticalMessage(str, maxlength = 10) {
  const isNotValid = !str || isFinite(str);
  
  if ( isNotValid ) {
    console.log('Вы ввели некорректные данные!');
    return;
  }
  
  let output = '';
  
  if ( str.startsWith('м') ) {
    const uppercaseFirstChar = str[0].toUpperCase();

    output = `${uppercaseFirstChar}\n`;
    str = str.slice(1);
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (i > (maxlength - 1)) break;

    output += `${char}\n`;
  }
  
  output = output.trim();

  console.log(output);
}

showVerticalMessage('марафон');
// showVerticalMessage('Марафон');
// showVerticalMessage('мармышка');
// showVerticalMessage('синхрофазатрон');

// showVerticalMessage('');
// showVerticalMessage(0);
// showVerticalMessage(123);
// showVerticalMessage();