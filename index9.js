// Практика JS 9.
// Напишите функцию, которая принимает в себя массив, а возвращает произведение элементов массива,
//  умноженных по порядку друг на друга.

// Пример кода:
//    example([1, 2, 3, 4]) => 1 * 2 * 3 * 4 = 24

const numbers =[1, 2, 3, 4]

function multiElements(array){
  let x=1;
  for (let i = 0; i < array.length; i++){
    x *= array[i]
  }
  console.log(x)
}
multiElements(numbers)
