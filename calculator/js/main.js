const calculator = document.querySelector('.calc');
const btns = calculator.querySelectorAll('.actions-calc__button');
const out = calculator.querySelector('.info-calc__result');
const outHistory = calculator.querySelector('.info-calc__history');

let a = '';
let b = '';
let operator = '';

const operations = {
  sum: 'sum',
  sub: 'sub',
  mult: 'mult',
  div: 'div'
};

calculator.addEventListener('click', function (e) {
  const target = e.target;

  if (target && target.tagName === 'BUTTON') {
    const value = target.value;
    const isNumber = isFinite(value);

    if (isNumber) {
      b += value;
      out.textContent = b;
    }

    const isValidOperator = (value in operations);

    if (isValidOperator) {
      a = b;

      operator = value;

      out.textContent = b;
      b = '';
    }

    if (value === 'equals') {
      outHistory.textContent = `${changeHistory(operator)} ${b} =`;
      
      a = calc(+a, +b, operator);
      out.textContent = a;
    }

    if (value === 'reset') reset();
    if (value === 'backspace') removeLastNumber();
  }

});

function changeHistory() {
  switch (operator) {
    case operations.div:
      return `${a} /`;
    case operations.mult:
      return `${a} *`;
    case operations.sub:
      return `${a} -`;
    case operations.sum:
      return `${a} +`;
  }
}

function reset() {
  a = '';
  b = '';
  operator = '';
  outHistory.textContent = '';

  out.textContent = 0;
}

function removeLastNumber() {
  if (b.length > 1) {
    b = b.slice(0, b.length - 1);
    out.textContent = b;
  } else {
    b = '';
    out.textContent = 0;
  }

}

function checkData(a, b, operator) {
  const isNotValidNumbers = ( typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b) || !isFinite(a) || !isFinite(b) );
  const isNotValidOperator = !operator;
  
  return isNotValidNumbers || isNotValidOperator;
}

function calc(a, b, operator) {
  if ( checkData(a, b, operator) ) {
    return 'error';
  }
  
  switch (operator) {
    case operations.sum:
      return a + b;
    case operations.sub:
      return a - b;
    case operations.mult:
      return a * b;
    case operations.div:
      if (b === 0) {
        return 'You cannot divide by 0!';
      }
      return a / b;
    default:
      return 'unknown operation';
  }
}