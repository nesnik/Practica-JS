// Практика JS 9.
// Напишите функцию, которая принимает в себя массив, а возвращает произведение элементов массива,
//  умноженных по порядку друг на друга.

// Пример кода:
//    example([1, 2, 3, 4]) => 1 * 2 * 3 * 4 = 24

function multiElements(array){
  let x=1;
  for (let i = 0; i < array.length; ++i){
    x *= array[i]
  }
  const operation = array.join(' * ')
  return `${operation} = ${x}`
}
console.log(multiElements([1, 2, 3, 4]))
