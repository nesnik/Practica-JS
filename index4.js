// Практика JS 4.
// Дан массив ['Саша', 'Петя', 'Оксана'], сделайте из него ['Оксанa', 'Олег', 'Саша'].
// Реализуйте эту задачу, двумя способами. В первом исходный массив должен быть изменен, во втором - не должен быть изменен.

// преобразование массива, где исходный массив был изменён
const names = ['Саша', 'Петя', 'Оксана']

const index = names.indexOf('Петя')
if (index !== -1) {
  names[index] = 'Олег'
}
names.reverse()
console.log(names)

// не изменен
const namesSecond = ['Саша', 'Петя', 'Оксана']

console.log(
  namesSecond
    .map(function (value, index) {
      if (value == 'Петя') {
        return 'Олег'
      }
      return value
    })
    .reverse()
)
console.log(namesSecond)
