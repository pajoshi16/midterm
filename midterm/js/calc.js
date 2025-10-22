// js/calc.js
(function () {
  'use strict';

  function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
  }

  function calculateFactorial() {
    const inputEl = document.getElementById('userInput');
    const outEl = document.getElementById('output');
    const n = Number(inputEl.value);

    if (!Number.isInteger(n) || n < 0) {
      outEl.textContent = 'Please enter a non-negative integer.';
      return;
    }

    outEl.textContent = `${n}! = ${factorial(n)}`;
  }

  document.getElementById('enterBtn').addEventListener('click', calculateFactorial);
})();
