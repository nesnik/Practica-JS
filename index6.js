// Практика JS 6.
// Дан массив числами, например: [10, 20, 30, 50, 235, 3000].
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

const numbers = [10, 20, 30, 50, 235, 3000]

const filtered = numbers.filter(number => {
  const firstLetter = number.toString().charAt(0)
  return ['1', '2', '5'].includes(firstLetter)
})

alert(filtered)
