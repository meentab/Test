
//function is a block of code that perform a specific task
//function is a reusable code

/*
//var keyword - 
// 1. Globle scope or function scope, 
// 2. reassighnment is possible
// 3. reinitialisation is possible
//let keyword - 
// 1. block scope only available for the block in which it is defined, 
// 2. reassignment is not possible
//3. reinitialisation is possible
//const keyword - block scope and cannot be changed
// 1. reinitialisation is not possible
*/

var greet ="Morning"
let greet1 = "Morning"
console.log(greet)
console.log(greet1)

if(1==1)
{

    let greet1 ="Afternoon"
    var greet="Evening"
    console.log(greet)
    console.log(greet1)
}

function add(a,b)
{
    let greet1 ="Night"
    var greet ="Night"
    return a+b
}

console.log('the value of greet '+ greet)
console.log(greet1)

let sum =add(2,3)
console.log(sum)

console.log(add(2,3))


//function without name is called anonymous function
let add1 = function(a,b)
{
    return a+b
}
let sum1 = add1(2,3)
console.log(sum1)

//function with arrow 
let sum2 = (c,d)=>c+d
console.log(sum2(6,7))