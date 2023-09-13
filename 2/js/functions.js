// Функция проверки на палиндром с разными
function checkPalindrom (str) {
  return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
}

checkPalindrom("довОд");


//Функция поиска чисел
function checkNum(str) {
  if (typeof str === 'number') {
    return str;
  }

  const numArr = str?.match(/\d+/g);

  if (!numArr) {
    return NaN;
  }

  return numArr.map(elem => parseInt(elem)).join('');
}
console.log(checkNum('fdgdfgd456fgdfg'));

