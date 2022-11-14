// numbers

const number1 = document.getElementById('a');
const number2 = document.getElementById('b');
const valueOf = document.getElementById('result');

let result = 0;

// buttons

function Scitanie() {
  result = parseFloat(number1.value) + parseInt(number2.value);
  valueOf.innerHTML = `Vysledok je: ${result}`;
}

function Odcitanie() {
  result = parseFloat(number1.value) - parseInt(number2.value);
  valueOf.innerHTML = `Vysledok je: ${result}`;
}

function Nasobenie() {
  result = parseFloat(number1.value) * parseInt(number2.value);
  valueOf.innerHTML = `Vysledok je: ${result}`;
}

function Delenie() {
  result = parseFloat(number1.value) / parseInt(number2.value);
  valueOf.innerHTML = `Vysledok je: ${result}`;
}
