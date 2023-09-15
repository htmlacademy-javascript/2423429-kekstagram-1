// Функция проверки на палиндром с разными
function checkPalindrom(str) {
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

//Функция, которая принимает три параметра:
//исходную строку, минимальную длину и строку с добавочными символами
// — и возвращает исходную строку, дополненную
//указанными символами до заданной длины. Символы добавляются в начало строки.
//Если исходная строка превышает заданную длину, она не должна обрезаться.
//Если «добивка» слишком длинная, она обрезается с конца.

// Эта функция нам пригодится для формирования адресов файлов. Примеры её использования:

function sumString(str, minLength, strAdd) {
  if (minLength <= str.length) {
    return str;
  }
  const count = str.length + strAdd.length - minLength; // количество символов которые нужно удалить из добавочной строки для достижения требуемой длины
  let newStrAdd = '';
  if (count > 0) {
    newStrAdd = strAdd.substring(0, strAdd.length - count);
  } else {
    let flag = 0;
    const number = minLength - str.length;
    for (let i = 0; i < number; i++) {
      if (i > strAdd.length - 1) {
        if (flag > strAdd.length - 1) {
          flag = 0;
        }
        newStrAdd = strAdd[flag] + newStrAdd;
        flag++;
        continue;
      }
      newStrAdd += strAdd[i];
    }
  }
  return newStrAdd + str;
}


console.log(sumString('1', 2, '0'),
sumString('1', 4, '0'),
sumString('q', 4, 'werty'),
sumString('q', 4, 'we'),
sumString('qwerty', 4, '0'));
