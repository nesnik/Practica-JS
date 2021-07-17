// Практика JS 20.

// Необходимо реализовать функцию, которая на входе принимает массив с
// разными типами данных ==> ['a', 1, 2, false, 'b'], а возвращает объект,
// в котором эти типы данных рассортированны по ключам.

// Пример кода:
// {
//    number: [1, 2],
//    string: ['a', 'b'],
//    boolean: [false]
// }

function sortingData(array){
 const result = {
    number: [],
    string: [],
    boolean: []
  }
  for ( const i of array) {

    if (typeof i === "number") {
      result.number.push(i)
    }
    if (typeof i === "string") {
      result.string.push(i)
    }
    if (typeof i === "boolean") {
      result.boolean.push(i)
    }
  }
  return result
}

console.log(sortingData(['a', 1, 2, false, 'b']))
