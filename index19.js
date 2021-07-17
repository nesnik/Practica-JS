// Практика JS 19.
// Если число четное, преобразуйте его в двоичное. Если число нечетное, преобразуйте его в шестнадцатеричное.

// Пример кода:
//    evensAndOdds(2) => '10'
//    evensAndOdds(13) => 'd'

function evensAndOdds(number){
  if(number%2 === 0){
    return (number >>> 0).toString(2);
  } else{
    return (number >>> 0).toString(16);
  }
}

console.log(evensAndOdds(2))
console.log(evensAndOdds(13))
