
//Without argument without return
// Without argument with return value
// With argument without return value
// With argument with return value
//Type1
// function message(){
//     console.log("Hello");
// } 
// //Type2
// function Pi(){
//     var p = 3.14
//     return p 
// }
// var valuePI = Pi()

// // Type 3
// function addition(a,b){
//     var c ;
//     c = a+b;
//     console.log()
// }
//loops

// var array = [1, 2, 3, 4, 5]
// array.forEach(function(element){
//     console.log(element);
// })
// //array
// // question arr = [10, 15, 25,, 35, 35, 45, 50, 59, 70 ]
// function searchElem(arr){
//      var arr = [10, 15, 25, 35, 45, 50, 59, 70]
//      for(let i=0; i<=arr.length; i++){
//           if (arr[i]==59){
//               return i;

//           };    
//      }
// }
// pop method removes the element atthe end of the array
// insert method add the element at the end of the array 
// shift removes the first element 
// unshift : it insert a new element at the 

// fat arrow function
//type 1
//let isPositive = (n)=>
   //  n>=0;

//  res = isPositive(-10);
// //type 2
    
//      let isPositive = (n)=>{
//          return n>0;
//     }

//let sum = (a,b) =>a+b;
//alert(sum(1,2));

// var func = (noOfCalls) => {
//     letcallRates = 0;
//     if(noOfCalls<=100){
//         callRates = noOfCalls*1;
//         alert(callRates);
//     }

//     else{
//         callRates = (noOfCalls-100)*2+100;
//         alert(callRates);
//     }
// }
// const fixedRent = 100;
// func(180);

// var array = [1, 2, 3]
// const array1 = [4, 5, 6]
// var arr1 = array.map(a => a * 2);

// array = [...array1, ...arr1]

//Only declarations are hosted
// console.log(sum);
// var sum = function(a,b){
//    res = a+b;


// Hosting is not supported in arrow function(Reference Error)
// Hosting is not working in function expression
var gb = "window";
function a(){
   var local1 = "Hello";
   console.log(local1);
   b()
   console.log("Student");

}
function b(){
   console.log("B-Tech -CSE");
   c();
}
function c(){
   console.log("Group 02");
}
a();

var sname = "Aayush";
var sclass = BE;
var sNo = 1;
console.log(sname, sclass, sNo);


