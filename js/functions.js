
function checkPalindrom (str) {
  //str = str.toLoverCase;
  return str == str.split('').reverse().join('');
}
checkPalindrom("довОд");

