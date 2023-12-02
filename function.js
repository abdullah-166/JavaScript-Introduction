//         // without calling
// function summation(){
//     var num1 = 2;
//     var num2 = 3;
//     console.log("Summation is:", num1+num2);
// }
// summation()

        
//         // by calling
// function summationC(a,b){
//     console.log("Summation is:", a+b);
// }
// summationC(100,200)


//         // return value
// function subtracionR(a,b){
//         var result = a - b;
//         return result;
// }
// var print = subtracionR(150, 100);
// console.log("Subtraction is:",print);

        //add, multiply then sum the previous two results together
function add(a,b){
        return a+b;
}
function multiply(c,d){
        return c*d;
}
var A1 = add(2,3);
var A2 = multiply(5,6);
console.log("Final result:",A1+A2);