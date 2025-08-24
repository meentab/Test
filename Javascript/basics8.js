//Inheritance is the main Piller in object oriented programming 
//one class can inherit properties and methods from another class
//class which inherit the properties os other class is known as subclass, derived class, child class
//class from which properties are inherited is known as super class, parent class, base class

const Person= require('./basics7.js')
class Pet extends Person
{
    get location(){
        return "BlueCross"
    }
    constructor(firstName,lastName)
    {
        //calling parent class constructor
        super(firstName,lastName)
    }
}

let pet =new Pet('sam','san')
pet.fullName()
console.log(pet.location)
console.log(pet.age)