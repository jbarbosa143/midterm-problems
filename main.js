function isEvenlyDivisible(num1,num2) {
  if(num1 % num2 === 0){
    return true;
  }else{
    return false;
  }
}

function halfSquare(num) {
  var value =0;
  value = num * num   / 1/2;
  return value;
}

function isLong(str) {
  if(str.length >= 15){
    return true;
  }else{
    return false;
  }
}

function exclaim(str) {
  
  if(str.indexOf('!') === -1){
    return  str +'!'
    }
    if(str.indexOf('!') === str.length-1){
      return str
    }
  else{
    return str.slice(0,str.indexOf('!')+1);
    }
  }
  


function countWords(str) {
var count = 1;
  for(i = 0; i < str.length; i++){
    if(str[i] === " "){
      count += 1;
    }
  }
  return count;
}

function containsDigit(str) {
  var dig =0;
  for( i = 0; i < str.length; i++){
    if(str[i] === "0" ||str[i] === "1" ||str[i] === "2" ||str[i] === "3" ||str[i] === "4" ||str[i] === "5" ||str[i] === "6" ||str[i] === "7" ||str[i] === "8" ||str[i] === "9"){
      dig += 1;
    }
  }
  if(dig < 1){
    return false;
  } else{
    return true;
  }
}

function containsLowerCase(str) {
var lowCount = 0;
for(i = 0; i < str.length; i++){
  if(str[i] === "a" || str[i] === "b" ||str[i] === "c" ||str[i] === "d" ||str[i] === "e" ||str[i] === "f" ||str[i] === "g" ||str[i] === "h" ||str[i] === "i" ||str[i] === "j" ||str[i] === "k" ||str[i] === "l" ||str[i] === "m" ||str[i] === "n" ||str[i] === "o" ||str[i] === "p" ||str[i] === "q" ||str[i] === "r" ||str[i] === "s" ||str[i] === "t" ||str[i] === "u" ||str[i] === "v" ||str[i] === "w" ||str[i] === "x" ||str[i] === "y" ||str[i] === "z"  ){
    lowCount += 1;
  }
}
  if(lowCount < 1){
    return false;
  }else{
    return true;
  }
}

function containsUpperCase(str) {
  var highCount = 0;
  for(i = 0; i < str.length; i++){
    if(str[i] === "A" ||str[i] === "B" ||str[i] === "C" ||str[i] === "D" ||str[i] === "E" ||str[i] === "F" ||str[i] === "G" ||str[i] === "H" ||str[i] === "I" ||str[i] === "J" ||str[i] === "K" ||str[i] === "L" ||str[i] === "M" ||str[i] === "N" ||str[i] === "O" ||str[i] === "P" ||str[i] === "Q" ||str[i] === "R" ||str[i] === "S" ||str[i] === "T" ||str[i] === "U" ||str[i] === "V" ||str[i] === "W" ||str[i] === "X" ||str[i] === "Y" ||str[i] === "Z"){
      highCount += 1;
    }
  }
  if(highCount < 1){
    return false
  }else {
    return true;
  }
}

function containsNonAlphanumeric(str) {
  var num =0;
  for(i =0; i < str.length; i++){
    if( str[i] === " " ||str[i] === "!" ||str[i] === "@" ||str[i] === "#" ||str[i] === "$" ||str[i] === "%" ||str[i] === "^" ||str[i] === "&" ||str[i] === "*" ||str[i] === "(" ||str[i] === ")" ||str[i] === "?"){
      num +=1;
    }
  }if (num < 1){
    return false
  }else{
    return true;
  }
}

function containsSpace(str){
  numSpace = 0;
  for(i = 0; i < str.length; i++){
    if(str[i]=== " "){
      numSpace +=1;
    }
  }
  if(numSpace <1){
    return false;
  }else{
    return true;
  }
}

function digits(num) {
  array = [];
  if(num < 0){
    num *= -1;
  }
  str = num.toString()
  for( i = 0; i < str.length; i++){
    if(str[i] !== '.'){
      array.push(str[i]*1)
    }
  }
  return array;
}

function truncate(str) {
  newStr="";
  if(str.length >= 15){
    for(i =0; i <= 7; i++){
    newStr += str[i];
  }
    newStr;
  newStr += "...";
  return newStr;
  }else{
    return str;
  }
}
function isValidPassword(str) {
  if(containsUpperCase(str) === true && containsLowerCase(str) === true && containsDigit(str) === true && containsNonAlphanumeric(str) === true && containsSpace(str)=== false){
    return true;
  }else{
    return false;
  }
}

function onlyPunchy(array) {
  newArr = [];
  for(title of array){
    if(exclaim(title).length < 15){
      newArr.push(exclaim(title));
    }
  }
  return newArr;
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}