// Практика JS 18.
// Никаких разговоров. Никаких объяснений. Только ТЗ и результат, который должен быть.
// Посмотрите, что должно получиться на выходе и напишите эту функцию.

// Пример кода:
//    spacey(['kevin', 'has','no','space']) => [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']
//    spacey(['this','cheese','has','no','holes']) => ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']

function spacey(array){
  const result = []
  for (const key of array.keys()) {
    result.push(array.slice(0, key+1).join(''))
  }

  return result
}

console.log (spacey(['kevin', 'has','no','space']))
