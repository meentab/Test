//Class is a blueprint for creating objects
//onject is an instance of a class


module.exports = class Person{
     age =25
     //location ='USA'
     get location()
     {
            return "USA"
     }

     //constructor is a special method which exexute by default when you create an object of the class
     constructor(firstName,lastName)
     {
            this.firstName =firstName
            this.lastName =lastName
     }

     fullName(){
        console.log(this.firstName+" "+this.lastName)
     }
}

/*
let person = new Person('jhone','deo')
let person1=new Person('chandelar','bings')
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location)
console.log(person.fullName())
console.log(person1.fullName()) */
