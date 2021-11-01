function checkData(a, b, operator) {
  const isNotValidNumbers = ( typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b) );
  const isNotValidOperator = !operator;
  
  return isNotValidNumbers || isNotValidOperator;
}

function calc(a, b, operator) {
  if ( checkData(a, b, operator) ) {
    return 'error';
  }
  
  switch (operator) {
    case 'sum':
      return a + b;
    case 'sub':
      return a - b;
    case 'mult':
      return a * b;
    case 'div':
      if (b === 0) {
        return 'You cannot divide by 0!';
      }
      return a / b;
    default:
      return 'unknown operation';
  }
}


console.log( calc(2, 3, 'sum ') );
console.log( calc(2, 3, ' sum ') );
console.log( calc(2, 3, 'some operator') );
console.log( calc(2, 3) );
console.log( calc(2, 3, '') );

console.log( calc('', 3, 'sum') );
console.log( calc(3, '', 'sum') );

console.log( calc('some string', 3, 'sum') );
console.log( calc(3, 'some string', 'sub') );
console.log( calc('0', '3', 'sum') );
console.log( calc(1, '3', 'sum') );
console.log( calc('3', 1, 'sum') );
console.log( calc(3, undefined, 'sum') );
console.log( calc(undefined, 3, 'sum') );
console.log( calc(3, null, 'sum') );
console.log( calc(null, 3, 'sum') );

console.log( calc(0, 2, 'sub') );
console.log( calc(3, 2, 'sum') );
console.log( calc(2, 3, 'sub') );
console.log( calc(3, 4, 'mult') );
console.log( calc(6, 0, 'div') );

console.log( calc(NaN, 0, 'div') );
console.log( calc(1, NaN, 'sum') );