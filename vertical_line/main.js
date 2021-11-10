function showVerticalMessage(str) {
  let output = '';
  const firstChar = str[0];
  
  if (firstChar === 'м') {
    const uppercaseFirstChar = firstChar.toUpperCase();

    output += `${uppercaseFirstChar}\n`;
    str = str.slice(1);
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (i > 9) break;

    output += `${char}\n`;
  }

  console.log( output.trim() );
}

showVerticalMessage('марафон');
// showVerticalMessage('Марафон');
// showVerticalMessage('мармышка');
// showVerticalMessage('синхрофазатрон');