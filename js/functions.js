
function checkPalindrom (str) {
  str = str.toLowerCase();
  return str === str.split('').reverse().join('');
}

checkPalindrom("довОд");

