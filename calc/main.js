const sum  = (a, b) => a + b;
const sub  = (a, b) => a - b;
const mult = (a, b) => a * b;
const div  = (a, b) => a / b;

const getErrorMessage = (message) => `Error text: ${message}`;

function checkData(a, b, operator) {
  const isNotValidOperator = !operator;
  const isNotValidNumbers = ( typeof a !== 'number' || typeof b !== 'number' );
  
  return isNotValidOperator || isNotValidNumbers;
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

console.log( calc(2, 3, 'sum') );