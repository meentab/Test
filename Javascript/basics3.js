
//Arrays and its methods with detailed examples

//Basics3.js
// let marks =Array(6) 
// var marks =new Array (20, 40,35,12,37,100)

marks = [ 20, 40,35,12,37,100]
console.log(marks[2]) //35
marks[3] =14

console.log(marks) // [ 20, 40,35,14,12,37,100]
console.log(marks.length) //6

marks.push(65)
console.log(marks) // [ 20, 40,35,14,12,37,100,65]

marks.pop() // [20, 40,35,14,12,37,100]

marks.unshift(12)
console.log(marks) //[ 12, 20,  40, 35, 14, 37, 100]

//marks.indexof(100) //6
//marks.indexOf(100)

//120 in the array
console.log(marks.includes(120)) //false

submarks = marks.slice(2,5)
console.log(submarks)

var sum =0
for (I =0; I<marks.length; I++)
{
//Console.log(marks[I])
sum =sum +marks [I] 
}
console .log(sum)


//reduce filter map
/*
reduce use when we have to accumlate some function and store value in it like sum
filter use when take some data from string with condition  like even or odd
map use when all the values are mapping to new array like square of all values or multiple 

*/

let total = marks.reduce((sum,mark)=>sum+mark,0)
console.log(total)



var scores = [12,13,14,16]
//create a new array with the even numbers of scores array
var evenScores =[]

for (let I=0; I<scores.length; I++)
{
    if (scores[I] %2 ==0)
    {
       evenScores.push(scores[I])
}
}
console.log(evenScores)

let newFiliterEvenScores = scores . filter(score => score%2 ==0)
console.log(newFiliterEvenScores)

//map
//create  new array with even number of scores and multiply each value with 3 array [12,14,16] and sum them

let mapArray =scores.map(score => score*3)
console.log(mapArray)

let mapArraySum =mapArray.reduce((sum,score)=>sum+score,0)
console.log(mapArraySum)

//or
var scores1=[10,12,13.17,20]
let mapArraySum1 =scores1.filter(score=> score%2 ==0).map(score=>score*3).reduce((sum,score)=>sum+score,0)
console.log(mapArraySum1)

let fruits =['banana', 'apple', 'orange','kiwi']
fruits.sort() //sort method works on string can be used to sort the array
console.log(fruits) // [ 'apple', 'banana', 'kiwi', 'orange' ]

console.log(fruits.reverse()) // [ 'orange', 'kiwi', 'banana', 'apple' ]

let scores2 =[10,12,13,17,3,5,1]
scores2.sort((a,b)=>a-b)
console.log(scores2) // [ 1,  3,  5, 10,12, 13, 17]

console.log(scores2.sort((a,b)=>b-a)) // [ 1,  3,  5, 10,2, 13, 17]