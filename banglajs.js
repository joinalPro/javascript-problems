// function isEven(number){
// //  var result = (number % 2 === 0)
// //  return result;
// return number % 2 === 0;
// }
// console.log(isEven(3));


//factorial (5)

// function factorial (number){
//     var num = 1;
//     for (var i = 0; i >=1; i--){
//       var  num = num * i;
//         //1
//         //4
//         //3
//         //2
//         //1
//     }
//     return num;
// }

// console.log(factorial(4));


function factorial2(number){
    let num = 1;
    for (let i = 1; i <= number; i++) {
        // num = num * i;
        num *= i;
        
    }
    return num;
}
console.log(factorial2(5));

function kebab(str){
    return str.replace(/ /g, " _")
}
console.log(kebab("My life is beautiful"));