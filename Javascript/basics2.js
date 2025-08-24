
// Loops and Conditions in JavaScript
// Basics2.js

const flag =true

if(!flag){
console.log('condition satisfied')
}
else 
{
console.log(flag)
console.log('condition not satisfied')
}


//if you have to verify 25 links can used  a condition to check 
let  I=1
/* while(I<10)
{
I++
Console.log(i)
}*/

/*let required =true
while(required)
{
console.log(required)
Required =false
} 
*/


//do while loop
do 
{
I++
}while(I>10);
console.log(I)

// for loop
for (let k=0;k<=10;k++)
{
console.log(k)
}


//Logical Operators and Assignments in JS  
// && and operator > true when both condition satisfied
// || or operator > true when either one condition satisfied

//2 and 5
//from 1 to 10 give me common multiple values of 2 and 5

let n=0
for (let m=0;m<=10;m++)
{
if (m%2 == 0 && m%5 == 0)  // || or operators
{
n++
Console.log(m)
if (n ==3)
break
}
}



