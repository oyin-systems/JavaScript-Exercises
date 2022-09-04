//Chapter 1
//QUESTION 1: Looping a triangle

/* Write a loop that makes seven calls to
console.log to output the following
triangle: */

//Method 1

for (let hash = "#"; hash.length < 8; hash += "#") {
  console.log(hash);
}

//Method 2

var content = "";

for (var i = 0; i < 7; i++) {
  content = content + "#";
  console.log(content);
}

//QUESTION 2 : FizzBuzz

/* Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for
numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
for numbers divisible by only one of those). */

//SOLUTION: FizzBuzz

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
};


//QUESTION 3: Chessboard

/* Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard. */

//SOLUTION
var size = 8;
var block = '#';
var space = ' ';

for (var i = 1; i <= size; i++) {
  var line = '';

  for (var y = 1; y <= size; y++){
    if (i%2) {
        if (y%2) {
            line = line + space;
        } else {
            line = line + block;
        }
    } else {
        if (y%2) {
            line = line + block;
        } else {
            line = line + space;
        }
    }
  }

  console.log(line);
}


//Chapter 2
//QUESTION 1: MINIMUM

/* Write a function min that
takes two arguments and
returns their minimum. */

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
};
console.log(min(10, 5));


//QUESTION 2:
/* Define a recursive function isEven corresponding
to this description. The function should accept a
single parameter (a positive, whole number) and
return a Boolean. Test it on 50 and 75. See how it
behaves on -1. Why? Can you think of a way to fix this? */


//SOLUTION 1
function isEven(number) {
  if (number == 0) {
      return true;
  } else {
      return (-number % 2 == 0) ? true : false;
  }
  return isEven(number - 2);
}

console.log(isEven(-1));


//SOLUTION 2

function isEven(number) {
  if (number < 0) {
      return isEven(-number);
  } else if (number == 1) {
      return false;
  } else if  (number == 0) {
      return true;
  } else {
      return isEven(number - 2);
  }
}

console.log(isEven(50)); // true
console.log(isEven(75)); // false
console.log(isEven(-1)); // false


