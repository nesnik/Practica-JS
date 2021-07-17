// Практика JS 21.
// Дана строка, состоящяя из букв a,b,c. Ваша задача поменять расположение букв a и b, но не трогать c.

// Пример кода:
//    switcheroo('abc') =>'bac'
//    switcheroo('aaabcccbaaa') =>'bbbacccabbb'
//    switcheroo('ccccc') =>'ccccc'
//    switcheroo('acb') =>'bca'
//    switcheroo('aabacbaa') =>'bbabcabb'

function switcheroo(str) {
  // let newStr = str.replaceAll('a', '1').replaceAll('b', '2')
  // newStr = newStr.replaceAll('1', 'b').replaceAll('2', 'a')

  const newValues = []
  for (const letter of str.split('')) {
    if (letter === 'a') {
      newValues.push('b')
      continue;
    }
    if (letter === 'b') {
      newValues.push('a')
      continue;
    }
    newValues.push(letter)
  }

  return newValues.join('')
}
console.log(switcheroo('abc'))
console.log(switcheroo('aaabcccbaaa'))

// console.log('abc'.split(''))
