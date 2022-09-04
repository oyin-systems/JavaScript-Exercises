// prompt("Enter your name");
// prompt("Enter their name");

// var loveScore = Math.random();
// loveScore = Math.floor(loveScore * 100);
// alert ('Your love score is' + loveScore + '%');

// if (loveScore > 70) {
//     alert ('Your love score is' + loveScore + '% ' + 'You are good to go!');
// }
// if (loveScore > 30 && loveScore <= 70) {
//     alert ('Your love score is' + loveScore + '% ' + 'Your love life can be better');
// }
// if (loveScore < 30) {
//     alert ('Your love score is' + loveScore + '% ' + 'You go together like rain and fire!');
// }

// var output = [];
// var count = 1;

// function fizzBuzz () {
//     if (count % 3 === 0 && count % 5 === 0) {
//         output.push("FizzBuzz");
//     } else if (count % 3 === 0) {
//         output.push("Fizz");
//     } else if ( count % 5 === 0) {
//         output.push("Buzz");
//     } else {
//         output.push(count);
//     }
//     count++;
// }

var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}

//HIGH ORDER FUNCTIONS
// function add(num1, num2) {
//     return num1 + num2
// };
// function subtract(num1, num2) {
//     return num1 - num2
// };
// function multiply(num1, num2) {
//     return num1 * num2
// };
// function divide(num1, num2) {
//     return num1 / num2
// };
// function calculator (num1, num2, opearator) {
//     return opearator (num1, num2)   
// };
