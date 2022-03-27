// //1 Write a program to print even no between 1 to 20
// let even = () =>{
//    for(let i = 1; i<=20; i++){
//        if(i%2 ==0){
//            console.log (i);
//         }
//     else{
//         console.log("not even");
//     }
//    }
// }
// even()
// //2.odd no between 1 t0 20
// let odd = () =>{
//     for(let i = 1; i<=20; i++){
//         if(i%2 !=0){
//             console.log (i);
//          }
//      else{
//          console.log("not odd");
//      }
//     }
//  }
//  odd()
//  //3.sum of series 1+2+3+4+.....+n
//  let sumOfNumbers = (n) =>{
//      let sum = 0;
//      for(let j = 1; j<=n; j++){
//          sum = sum+j
//      } 
//      document.write(sum);
//  }
// let number = prompt("Enter a number");
// sumOfNumbers(number);
// // 4. Sum of odd number
// let sumOfOddNumbers = (n1) =>{
//     let sum = 0;
//     for(let j = 1; j<=n; j+2){
//         sum = sum+j;
//     } 
//     document.write(sum);
// }
// let number1 = prompt("Enter a number1");
// sumOfNumbers(number1)
// // 5. 
// var a = 2;
// var b = 5;
// console.log(a);
// console.log(a++ );
// console.log(a);


var array = [1, 2, 3]
const array1 = [4, 5, 6]
var arr1 = array.map(a => a * 2);

array = [...array1, ...arr1]
document.write(array);