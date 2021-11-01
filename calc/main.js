const sum  = (a, b) => a + b;
const sub  = (a, b) => a - b;
const mult = (a, b) => a * b;
const div  = (a, b) => a / b;

const getErrorMessage = (message) => `Error text: ${message}`;

function checkData(a, b, operator) {
  const isNotValidNumbers = ( typeof a !== 'number' || typeof b !== 'number' );
  const isNotValidOperator = !operator;
  
  return isNotValidNumbers || isNotValidOperator;
}

function calc(a, b, operator) {
  if ( checkData(a, b, operator) ) {
    return getErrorMessage('error');
  }
  
  operator = operator.trim().toLowerCase();
  
  switch (operator) {
    case 'sum':
      return sum(a, b);
    case 'sub':
      return sub(a, b);
    case 'mult':
      return mult(a, b);
    case 'div':
      return div(a, b);
    default:
      return getErrorMessage('unknown operation');
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
console.log( calc( 1, '3', 'sum') );
console.log( calc( '3', 1, 'sum') );
console.log( calc( 3, undefined, 'sum') );
console.log( calc( undefined, 3, 'sum') );
console.log( calc( 3, null, 'sum') );
console.log( calc( null, 3, 'sum') );

console.log( calc(3, 2, 'sum') );
console.log( calc(2, 3, 'sub') );
console.log( calc(3, 4, 'mult') );
console.log( calc(6, 0, 'div') );