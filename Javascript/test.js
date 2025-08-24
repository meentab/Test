
/*Manipulate an array of strings (add, remove, sort)
Create an array named studentNames with the names of your students.

Add a new student name to the beginning of the array.

Remove the last student name from the array.

Alphabetize the student names within the array. */

let studentNames=['meenu', 'sha', 'yaa', 'Hasi' ,'sana']

//Add a new student name to the beginning of the array.
studentNames.unshift('sara')
console.log(studentNames)

//Remove the last student name from the array.
studentNames.pop()
console.log(studentNames)

//Alphabetize the student names within the array
studentNames.sort()
console.log(studentNames)

/*You have an array called productPrices with various product prices.

Apply a 10% discount to all prices using the map method and store the results in a new array called discountedPrices.

Use the filter method to create a new array called affordableProducts containing only products priced below $50

Calculate the total cost of all items in the affordableProducts array using the reduce method. */

let productPrice =[100,250,50,25,10,5]

//Apply a 10% discount to all prices using the map method and store the results in a new array called discountedPrices.
let discountedPrices = productPrice.map(price =>price -(price * 0.1))
console.log(discountedPrices)

//Use the filter method to create a new array called affordableProducts containing only products priced below $50

let affordableProducts = discountedPrices.filter(price =>price<50)
console.log(affordableProducts)

//Calculate the total cost of all items in the affordableProducts array using the reduce method. */

let totalCost =affordableProducts.reduce((sum,price)=> sum +price,0)
console.log(totalCost)
