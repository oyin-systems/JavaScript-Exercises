//EXERCISE LEVEL 1
let me = []            //1
console.log(me)

let mine = ['soap', 'cream', 'groceries', 'oil', 'wool', 'cleanser', 'tissue'];          //2
console.log(mine.length)              //3
console.log(mine[0])        //4
console.log(mine[3])
console.log(mine[6])

var mixedDataTypes = ["Felix", `male`, 18, "straight", 'taurus', 'sanguine', true]
console.log(mixedDataTypes.length)    //5

var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']; //6
console.log(itCompanies);   //7
console.log(itCompanies.length);  //8
console.log(itCompanies[0]);      //9&10
console.log(itCompanies[1]);      //9&10
console.log(itCompanies[2]);      //9&10 
console.log(itCompanies[3]);      //9&10
console.log(itCompanies[4]);      //9&10
console.log(itCompanies[5]);      //9&10
console.log(itCompanies[6]);      //9&10


console.log(itCompanies[0].toUpperCase());   //11
console.log(itCompanies[1].toUpperCase());   //11
console.log(itCompanies[2].toUpperCase());   //11
console.log(itCompanies[3].toUpperCase());   //11
console.log(itCompanies[4].toUpperCase());   //11
console.log(itCompanies[5].toUpperCase());   //11
console.log(itCompanies[6].toUpperCase());   //11

console.log(`${itCompanies} are big IT companies`)    //12

console.log(itCompanies.includes('Amazon'));     //13
console.log(itCompanies.includes('Facebook'));   //13
console.log(itCompanies.includes('Skype'));     //13

console.log(itCompanies.sort());     //15
console.log(itCompanies.reverse());     //16

console.log(itCompanies.slice(0, 3))  //17
console.log(itCompanies.slice(4, 7))  //18

//var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

console.log(itCompanies.slice(5,6));  //19
console.log(itCompanies.shift());        //20
console.log(itCompanies.splice('Apple'));  //21
console.log(itCompanies.pop());          //22
console.log(itCompanies.splice('Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon')); //23




