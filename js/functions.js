
function checkPalindrom (str) {
  return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
}

checkPalindrom("довОд");

