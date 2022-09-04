// //log a statement using console.log()
// console.log('Hello world from main.js')

// //variables

// let age = 20
// console.log(age)

// const salary = 50000
// console.log(salary)

// let sum = 0
// sum = 5
// console.log(sum)

// //DATA TYPES : PRIMITIVE
// //string
// const name = 'Oyindamola'
// const language = "JavaScript"
// const channel = `Codevolution`

// //numbers
// const total = 0
// const PI = 3.14

// //booleans
// const isPrimaryNumber = true
// const isNewUser = false

// //undefined
// let result
// console.log(result)
// const res = undefined

// //null
// const data = null

// //NON PRIMITIVE: Object (keyed-value pairs)
// const person = {
//     firstName: 'Oyindamola',
//     lastName: 'Abolaji',
//     age: 20,
// }
// console.log(person.lastName)

// //ARRAYS
// const oddNumbers = [1, 3, 5, 7, 9]
// console.log(oddNumbers[3])

// let a = 10
// a = 'Faith'
// a = true
// console.log(a)

// //OPERATORS
//assignment operator
// let x = 10
// let y = 5

// //arithmetic operator
// console.log (x - y)
// console.log(++x)
// console.log(--y)

// //comparison operator
// console.log(x == y)
// console.log(x !== y)
// console.log(x > y)

// //logical operator
// const isValidNumber = (x > 20 || 8 > y)
// console.log(isValidNumber)
// const isValid = false
// console.log(!isValid)

// //string operator
// console.log('Bruce ' + 'Wayne')

// //ternary operator
// const isEven = 10 % 2 === 0 ? true : false
// console.log(isEven)

// //type conversion
// console.log(true + '3')
// console.log('4' - '2')
// console.log('6' * '3')
// console.log('12' / '4')
// console.log('Bruce' - 'Wayne')
// console.log('5' - false)
// console.log('5' - true)
// console.log('5' - null)
// console.log(5 + undefined)

// console.log(Number('5'))
// console.log(Number('false'))
// console.log(Number(' '))
// console.log(parseInt('5'))
// console.log(parseFloat('3.14'))
// console.log((500).toString())
// console.log(Boolean(10))

//Equality
// const var1 = '10'
// const var2 = 10

// console.log(var1 == var2)
// console.log(var1 === var2)

//conditional statement
//if, else, else if, switch

// const num = -5
// if (num > 0) {
//     console.log('Number is positive')
// } else {
//     console.log('Number is not positive')
// };

// const num = 0
// if (num > 0) {
//     console.log('Number is positive')
// } else if (num < 0) {
//     console.log('Number is negative')
// } else {
//     console.log('Number is zero')
// };

// const color = 'purple'
// switch(color) {
//     case 'red':
//         console.log('Color is red')
//         break;
//     case 'blue':
//         console.log('Color is blue')
//         break;
//     case 'green':
//         console.log('Color is green')
//         break;
//     default:
//         console.log('Not a valid color')
// }

//LOOPS
//for loop, while loop, do..while loop, for..of loop

//FOR LOOP
/* for (initializer; condition; final-expression) {
    //code to run
} */
// for (let i = 1; i <= 5; i++) {
//     console.log('Iteration number ' + i)
// };

// //WHILE LOOP
// /* initializer
// while (condition) {
//     //code to run
//     final-expression
// } */
// let i = 1
// while (i <= 3) {
//     console.log('Iteration number ' + i)
//     i++
// };

// DO..WHILE LOOP: do..while loops will always run once no matter
// the condition, because the condition comes after the do
/* initializer
do {
    //code to run
    final-expression
} while (condition) */

// let i = 12
// do {
//     console.log('Iteration number ' + i)
//     i++
// } while (i <= 7)

//FOR..OF LOOP
/* for (const item of array) {
    //code to run
} */

// const numArray = [1, 2, 3, 4, 5]
// for (const num of numArray) {
//     console.log('Iteration number ' + num)
// }

// FUNCTIONS
/* function name(parameter1, parameter2, parameter3) {
    //code to be executed
} */

// function greet() {
//     console.log('Good morning Oyin')
// }
// greet()
// greet()
// greet()

// function greet(username) {
//     console.log('Good morning ' + username)
// }
// greet('Oyin')
// greet('Damola')
// greet('Faith')

// function addNum(a, b) {
//     return a + b
// }

// const arrowSum = (a, b) => a + b
// const sum = arrowSum(15, 10)
// console.log(sum)

//SCOPE: block, function, global
//block scope: const can only be accessed within the block of code it was declared in
// if (true) {
//     const myName = 'Oyindamola'
//     console.log(myName)
// }

//function scope
// function testFn() {
//     const myName = 'Faith'
//     console.log(myName)
// }
// testFn()

//global scope: can be accessed anywhere




