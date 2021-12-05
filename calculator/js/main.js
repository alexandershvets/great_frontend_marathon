const UI_ELEMENTS = {
  NUMBER_BUTTONS: document.querySelectorAll('.actions-calc__button_number'),
  OPERATOR_BUTTONS: document.querySelectorAll('.actions-calc__button_operator'),
  RESET_BUTTON: document.getElementById('reset'),
  BACKSPACE_BUTTON: document.getElementById('backspace'),
  EQUAL_BUTTON: document.getElementById('equal'),
  OUT_RESULT: document.getElementById('result'),
  OUT_HISTORY: document.getElementById('history')
};

const expression = {
  operandA: '',
  operandB: '',
  operator: undefined
};

let finish = false;

UI_ELEMENTS.RESET_BUTTON.addEventListener('click', clearState);
UI_ELEMENTS.BACKSPACE_BUTTON.addEventListener('click', removeLastSymbol);

UI_ELEMENTS.NUMBER_BUTTONS.forEach(function (numberBtn) {
  numberBtn.addEventListener('click', function () {
    const number = this.textContent;
    const isEmptyOperandB = (expression.operandB === '' && expression.operator === undefined);
    const expressionWasEval = (expression.operandA !== '' && expression.operandB !== '' && finish);

    if (isEmptyOperandB) {
      expression.operandA += number;
      UI_ELEMENTS.OUT_RESULT.textContent = expression.operandA;
    } else if (expressionWasEval) {
      expression.operandB = number;
      finish = false;
      UI_ELEMENTS.OUT_RESULT.textContent = expression.operandB;
    } else {
      expression.operandB += number;
      UI_ELEMENTS.OUT_RESULT.textContent = expression.operandB;
    }

    showHistory(expression.operandA, expression.operandB, expression.operator);
  });
});

UI_ELEMENTS.OPERATOR_BUTTONS.forEach(function (operatorBtn) {
  operatorBtn.addEventListener('click', function() {
    const operator = this.value;

    expression.operator = operator;

    showHistory(expression.operandA, expression.operandB, expression.operator);
  });
});

UI_ELEMENTS.EQUAL_BUTTON.addEventListener('click', function () {
  if (expression.operandB === '') {
    expression.operandB = expression.operandA;
  }

  const operandA = expression.operandA;
  const operandB = expression.operandB;
  const operator = expression.operator;

  const result = calc(operandA, operandB, operator);

  finish = true;
  UI_ELEMENTS.OUT_RESULT.textContent = result;

  showHistory(operandA, operandB, operator, '=');
  
  expression.operandA = result;
});

function showHistory(a, b, operator = '', equal = '') {
  switch (operator) {
    case 'sum':
      operator = '+';
      break;
    case 'sub':
      operator = '-';
      break;
    case 'mult':
      operator = '×';
      break;
    case 'div':
      operator = '÷';
      break;
  }

  let result = `${a} ${operator} ${b} ${equal}`;

  UI_ELEMENTS.OUT_HISTORY.textContent = result;
}

function clearState() {
  expression.operandA = '';
  expression.operandB = '';
  expression.operator = undefined;
  UI_ELEMENTS.OUT_RESULT.textContent = 0;
  UI_ELEMENTS.OUT_HISTORY.textContent = '';
  finish = false;
}

function removeLastSymbol() {
  let operator = (!expression.operator) ? 'operandA' : 'operandB';

  if (UI_ELEMENTS.OUT_RESULT.textContent.length > 1) {
    UI_ELEMENTS.OUT_RESULT.textContent = UI_ELEMENTS.OUT_RESULT.textContent.slice(0, -1);
    expression[operator] = UI_ELEMENTS.OUT_RESULT.textContent;
  } else {
    UI_ELEMENTS.OUT_RESULT.textContent = 0;
    expression[operator] = '';
  }
}

function checkData(a, b, operator) {
  const isNotValidNumbers = ( typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b) || !isFinite(a) || !isFinite(b) );
  const isNotValidOperator = !operator;
  
  return isNotValidNumbers || isNotValidOperator;
}

function calc(a, b, operator) {
  a = +a;
  b = +b;

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
      return a / b;
  }
}
