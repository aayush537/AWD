// var data = "undefined";
// console.log("I am a "+ data);
// data = "Teacher";
// console.log("I am a"+ data);

// function whoAmI(){
//     console.log("I am a"+ data);
//     var data = "Computer";
//     console.log()
// }

// var data1 = "Hello Students";
// function first()
// {
//     var data2 = "How are you?";
//     second();
//     function second(){
//         var data3 = "Let's understand scope chain";
//         console.log(data1+" "+data2+" "+data3);
//     }
// }
// first();
//child function can access the global variable and variables inside the parent function

// var data1 = "Hello Students";
// function first()
// {
//     var data2 = "How are you?";
//     second();
//     function second(){
//         var data3 = "Let's understand scope chain";
//         console.log(data1+" "+data2+" "+data3);
//     }

// }
// function three(){
//     var data4 = "of Group-02";
//     console.log(data1+data4);
// }
// first();

// In this case function3 will check 
//this 
// const student= {
//     name:"raman",
//     class:"B-Tech-CSE",
//     sum : function(){
//      var res =10+20;
//      console.log(res);
//      console.log(this);
//     }
// }
// student.sum();
"use strict"
// function sum(){
//     var res =10+20;
//     console.log(res);
//     console.log(this);
// }
// sum();
// a = 4;
// console.log(a);
// In a regular function this keyword refer to global object(window)
//In a function in strict mode this keyword will refer as undefined
//In the example this keyword refer to owner object therefore it will display student object
const student = {
    class : "B-Tech-CSE",
    sum: function(){
        var res = 10+20;
        console.log(res);
        console.log(this);

        function child(){
            var name ="Sham";
            console.log(name);
            console.log(this);
        }
    child();
}
student.sum();
    
}