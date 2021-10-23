document.addEventListener('DOMContentLoaded', function () {

  let a, b, operator, result, answer, good = 0, bad = 0, count = 0, resultObj;
  let variants = ['+', '-', '*', '/'];

  const button = document.querySelector('.simulator__button');
  const questionElem = document.querySelector('.simulator__question');
  const ansverInput = document.querySelector('.simulator__input');
  const statisticGoodElem = document.querySelector('.statistic__item_good span');
  const statisticBadElem = document.querySelector('.statistic__item_bad span');
  const answerElem = document.querySelector('.simulator__answer');

  init();

  button.addEventListener('click', function (e) {
    answer = +ansverInput.value;
    resultObj = calculate(a, b, operator);
    result = resultObj.result;

    if ( result.toFixed(2) == answer.toFixed(2) ) {
      answerElem.classList.remove('simulator__answer_bad');
      answerElem.classList.add('active', 'simulator__answer_good');
      answerElem.textContent = 'Правильно!';
      good++;
      statisticGoodElem.textContent = good;
      init();
    } else {
      answerElem.classList.remove('simulator__answer_good');
      answerElem.classList.add('active', 'simulator__answer_bad');
      if (parseInt(result) == result) {
        answerElem.innerHTML = `Не правильно! ${a} ${resultObj.operator} ${b} = <span>${result}</span>`;
      } else {
        answerElem.innerHTML = `Не правильно! ${a} ${resultObj.operator} ${b} = <span>${result.toFixed(2)}</span>`;
      }
      bad++;
      statisticBadElem.textContent = bad;
      init();
    }

    ansverInput.value = '';
    count++;

    if (count == 5) {
      this.disabled = true;

      if (bad === 0) {
        document.querySelector('.freddie').classList.add('active');
        document.querySelector('audio').play();
        answerElem.innerHTML = `You Are The Champion!`;
      } else {
        answerElem.innerHTML = `Ты проиграл!`;
      }
    }
    
  });

  function init() {
    a = getRandomInt(3, 15);
    b = getRandomInt(3, 15);
    operator = variants[getRandomInt(0, 3)];

    resultObj = calculate(a, b, operator);

    questionElem.innerHTML = `${a} ${resultObj.operator} ${b} = ?`;
  }
  
  function calculate(a, b, operator) {
    let resultObj = {};
    
    switch (operator) {
      case '+':
        resultObj.result = a + b;
        resultObj.operator = '+';
        break;
      case '-':
        resultObj.result = a - b;
        resultObj.operator = '&minus;';
        break;
      case '*':
        resultObj.result = a * b;
        resultObj.operator = '&times;';
        break;
      case '/':
        resultObj.result = (b != 0) ? a / b : false;
        resultObj.operator = '&divide;';
        break;
    }

    return resultObj;
  }
  
  function getRandomInt(min, max) {
    let length = max - min + 1;
    let randomInt = Math.floor( Math.random() * length ) + min;
    return randomInt;
  }
  
});