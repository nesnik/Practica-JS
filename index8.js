// Практика JS 8.
// Напишите функцию, которая вычисляет итоговую оценку студента в зависимости от двух параметров:
//  оценки за экзамен и количества выполненных проектов. Ваша функция должна принимать два аргумента:
//  экзамен - оценка за экзамен (от 0 до 100); проекты - количество реализованных проектов (от 0 и выше);
//  Эта функция должна возвращать число (итоговая оценка). Есть четыре типа итоговых оценок:

// 100, если оценка за экзамен больше 90 или количество выполненных проектов больше 10.
// 90, если оценка за экзамен больше 75 или количество выполненных проектов не менее 5.
// 75, если оценка за экзамен больше 50 или количество выполненных проектов не менее 2.
// 0, в остальных случаях

// Пример кода:
//    finalGrade(100, 12) => 100
//    finalGrade(99, 0) => 100
//    finalGrade(10, 15) => 100
//    finalGrade(85, 5) => 90
//    finalGrade(55, 3) => 75
//    finalGrade(55, 0) => 0
//    finalGrade(20, 2) => 0

function calculationGrade(exam, projects){
  if(exam>90 || projects>10){
    return  100
  }
  if(exam>75 || projects>5){
    return  90
  }
  if(exam>50 || projects>2){
    return  75
  }
  if(exam<50 || projects<2){
    return  0
  }
}

const data =[
  {exam: 100, projects: 12 },
  {exam: 99, projects: 0 },
  {exam: 10, projects: 15},
  {exam: 85, projects: 5 },
  {exam: 55, projects: 3 },
  {exam: 55, projects: 0 },
  {exam: 20, projects: 2 },
]

for (let {exam, projects} of data) {
  console.table({
    exam,
    projects,
    grade: calculationGrade(exam, projects),
  })
}