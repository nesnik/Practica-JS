// Практика JS 5.
// Напишите скрипт, который принимает с клавиатуры 2 числа, и если первое больше второго, то выводит
// на экран их сумму, если же наоборот - произведение. Если числа одинаковые, выводит на экран 'числа одинаковые'.

const x = Number(prompt('Введите первое число ', ''))
const y = Number(prompt('Введите второе число ', ''))
if (x > y) {
  const sum = x + y
  alert(`Сумма введённых чисел равна ${sum}`)
} else {
  if (x < y) {
    const s = x * y
    alert(`Произвидение ввёдиных равно ${s}`)
  } else {
    if (x == y) {
      alert('Введённые  числа одинаковые')
    }
  }
}
