// Функция проверки на палиндром с разными
function checkPalindrom (str) {
  return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
}

checkPalindrom('довОд');


//Функция поиска чисел
function checkNum(str) {
  // поиск совпадений в строке на число где \d+/ границы диапалона чисел /g -глобальный
  const numArr = str?.match(/\d+/g);

  if (!numArr) {
    return NaN;
  }

  return numArr.map((elem) => parseInt(elem, 10)).join('');
}

checkNum('fdgdfgd456fgdfg');

