// Практика JS 14.
// Удалите n восклицательных знаков в предложении слева направо. n - положительное целое число.

//  Пример кода:
//    remove("Hi!",1) => "Hi"
//    remove("Hi!",100) => "Hi"
//    remove("Hi!!!",1) => "Hi!!"
//    remove("Hi!!!",100) => "Hi"
//    remove("!Hi",1) => "Hi"
//    remove("!Hi!",1) => "Hi!"
//    remove("!Hi!",100) => "Hi"
//    remove("!!!Hi !!hi!!! !hi",1) => "!!Hi !!hi!!! !hi"
//    remove("!!!Hi !!hi!!! !hi",3) => "Hi !!hi!!! !hi"
//    remove("!!!Hi !!hi!!! !hi",5) => "Hi hi!!! !hi"
//    remove("!!!Hi !!hi!!! !hi",100) => "Hi hi hi"


function remove (str, n ){
return str.replace(/\!/g, _ => n && n-- ? '' : _);
}

console.log(remove("Hi!!!",1))
console.log(remove("!!!Hi !!hi!!! !hi",1))
console.log(remove("!!!Hi !!hi!!! !hi",5))
