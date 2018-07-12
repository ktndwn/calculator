

var display = document.getElementById('display');

var clear = document.getElementById('clear');

var divide = document.getElementById('divide');
var multiply = document.getElementById('multiply');
var minus = document.getElementById('minus');
var plus = document.getElementById('plus');
var equals = document.getElementById('equals');
var decimal = document.getElementById('decimal');

var zero = document.getElementById('zero');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');

var shiftKey = false;

var shiftKeyUp = function (key) {
  if (key.keyCode == 16){
    shiftKey = false;
  }
};

var keyDetectionFunction = function(key) {
  if (key.keyCode == 16){
    shiftKey = true;
  }
  if (key.keyCode == 27 && shiftKey == false || key.keyCode == 46 && shiftKey == false){
    clearFunction();
    clear.classList.add('activate');
  }
  else if (key.keyCode == 111 || key.keyCode == 191 && shiftKey == false){
    inputDivide();
    divide.classList.add('activate');
  }
  else if (key.keyCode == 106 || key.keyCode == 56 && shiftKey == true){
    inputMultiply();
    multiply.classList.add('activate');
  }
  else if (key.keyCode == 109 || key.keyCode == 189 && shiftKey == false){
    inputMinus();
    minus.classList.add('activate');
  }
  else if (key.keyCode == 107 || key.keyCode == 187 && shiftKey == true){
    inputPlus();
    plus.classList.add('activate');
  }
  else if (key.keyCode == 13 || key.keyCode == 187 && shiftKey == false){
    inputEquals();
    equals.classList.add('activate');
  }
  else if (key.keyCode == 110 || key.keyCode == 190 && shiftKey == false){
    inputDecimal();
    decimal.classList.add('activate');
  }
  else if (key.keyCode == 96 || key.keyCode == 48 && shiftKey == false){
    inputZero();
    zero.classList.add('activate');
  }
  else if (key.keyCode == 97 || key.keyCode == 49 && shiftKey == false){
    inputOne();
    one.classList.add('activate');
  }
  else if (key.keyCode == 98 || key.keyCode == 50 && shiftKey == false){
    inputTwo();
    two.classList.add('activate');
  }
  else if (key.keyCode == 99 || key.keyCode == 51 && shiftKey == false){
    inputThree();
    three.classList.add('activate');
  }
  else if (key.keyCode == 100 || key.keyCode == 52 && shiftKey == false){
    inputFour();
    four.classList.add('activate');
  }
  else if (key.keyCode == 101 || key.keyCode == 53 && shiftKey == false){
    inputFive();
    five.classList.add('activate');
  }
  else if (key.keyCode == 102 || key.keyCode == 54 && shiftKey == false){
    inputSix();
    six.classList.add('activate');
  }
  else if (key.keyCode == 103 || key.keyCode == 55 && shiftKey == false){
    inputSeven();
    seven.classList.add('activate');
  }
  else if (key.keyCode == 104 || key.keyCode == 56 && shiftKey == false){
    inputEight();
    eight.classList.add('activate');
  }
  else if (key.keyCode == 105 || key.keyCode == 57 && shiftKey == false){
    inputNine();
    nine.classList.add('activate');
  }
};



var inputDivide = function() {
  display.textContent += '/';
};
var inputMultiply = function() {
  display.textContent += '*';
};
var inputMinus = function() {
  display.textContent += '-';
};
var inputPlus = function() {
  display.textContent += '+';
};
var inputDecimal = function() {
  display.textContent += '.';
};
var inputZero = function() {
  display.textContent += '0';
};
var inputOne = function() {
  display.textContent += '1';
};
var inputTwo = function() {
  display.textContent += '2';
};
var inputThree = function() {
  display.textContent += '3';
};
var inputFour = function() {
  display.textContent += '4';
};
var inputFive = function() {
  display.textContent += '5';
};
var inputSix = function() {
  display.textContent += '6';
};
var inputSeven = function() {
  display.textContent += '7';
};
var inputEight = function() {
  display.textContent += '8';
};
var inputNine = function() {
  display.textContent += '9';
};
var clearFunction = function() {
  display.textContent = '';
};
var inputEquals = function(){
  var result = eval(display.textContent);
  display.textContent = result;
};


var removeClass = function(){
  var buttons = document.getElementsByClassName('button activate');
  while(buttons.length > 0) {
    buttons[0].classList.remove('activate');
  }
};


window.addEventListener('keydown', keyDetectionFunction);
window.addEventListener('keyup', removeClass);
window.addEventListener('keyup', shiftKeyUp);

clear.addEventListener('click', clearFunction);

divide.addEventListener('click', inputDivide);
multiply.addEventListener('click', inputMultiply);
minus.addEventListener('click', inputMinus);
plus.addEventListener('click', inputPlus);
equals.addEventListener('click', inputEquals);
decimal.addEventListener('click', inputDecimal);


zero.addEventListener('click', inputZero);
one.addEventListener('click', inputOne);
two.addEventListener('click', inputTwo);
three.addEventListener('click', inputThree);
four.addEventListener('click', inputFour);
five.addEventListener('click', inputFive);
six.addEventListener('click', inputSix);
seven.addEventListener('click', inputSeven);
eight.addEventListener('click', inputEight);
nine.addEventListener('click', inputNine);
