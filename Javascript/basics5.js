//string
let day ='tuesday '
console.log(day.length)

let subday =day.slice(0,4)
console.log(subday)

let splitday =day.split('s')
console.log(splitday[1].length)
console.log(splitday[1].trim().length)

let date ='23'
let nextDate ='27'
let diff = parseInt(date) - parseInt(nextDate)
console.log(diff)

console.log(diff.toString())

let newQuote =day+" is Funday day"
console.log(newQuote)

let val =newQuote.indexOf('day',5)
console.log(val)

//tuesday is funday day
let count =0
let value = newQuote.indexOf('day')
while (value!== -1)
{
    count ++
    value=newQuote.indexOf('day',value+1)
}
console.log(count)

const Person = require('./basics7.js')

let persone = new Person('chirsh', 'bings')
console.log(persone.fullName())