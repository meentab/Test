//object is collection of properties which are key value pairs

const Person = require('./basics7.js')

let person ={
    firstName :'Jhone',
    lastName :"doe",
    age :25,
    isMarried :false,
    Fullname:function()
    {
        console.log(this.firstName +" "+this.lastName)
    }

}

console.log(person.Fullname())
console.log(person.firstName)
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person.age)
console.log(person.isMarried)

person.firstName ="Smith jp"
console.log(person.firstName)

person.gender='male'
console.log(person)

delete person.age
console.log(person)

console.log('gender' in person)
console.log('age' in person)

//print all the javascript values of object
for( let key in person)
{
console.log(person[key])
}


