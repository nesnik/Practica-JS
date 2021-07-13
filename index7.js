// Практика JS 7.
// Вес записан в переменную weight. Рекомендацию записывай строкой в переменную recommendation.
// Если вес до 4 кг (не включая это значение), рекомендация – 'Пора перекусить'.
// Если вес от 4 кг включительно до 5.5 кг включительно – 'Вес в норме'.
// Если вес больше 5.5 кг – 'Пора на тренировку'.
// В качестве условий, используй значения weight 1, 3, 4, 5, 10. Рекомендацию выводи в консоль.

function checkWeight(weight) {
  if (weight < 4) {
    return 'Пора перекусить'
  }
  if (weight >= 4 && weight <= 5.5) {
    return 'Вес в норме'
  }
  return 'Пора на тренировку'
}

const weights = [1, 3, 4, 5, 10]
const recomendation = {}

for (let i of weights) {
  recomendation[i] = checkWeight(i)
}

console.log(recomendation)
