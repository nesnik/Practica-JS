// Практика JS 13.
// Напишите функцию, которая преобразует шестнадцатеричное число (заданное в виде строки) в десятичное число.

//  Пример кода:
//    hexToDec('1') => 1
//    hexToDec('a') => 10
//    hexToDec('10') => 16
//    hexToDec('FF') => 255
//    hexToDec('-C') => 12

function hexToDec(strNumber){
  return number  = parseInt(strNumber, 16);
}

console.log(hexToDec('FF'))
console.log(hexToDec('10'))
