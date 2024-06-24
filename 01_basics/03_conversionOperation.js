//let score = "33abc"
//let score = null
let score = undefined


//const{score} = req.body
// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score) // this will convert the score in number

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
//"33abc" => NaN
// "true" => 1; false => 0 and vice versa

let isLoggedIn = "rakshit"

let booleanIsLoggedIn = Boolean(isLoggedIn);

//console.log(booleanIsLoggedIn);

// "" => false
//"rakshit"=>true // non empty string is true

let someNumber = 33

let stringNumber = String(someNumber)

// console.log(stringNumber);
// console.log(typeof stringNumber);

// ******************operations******************

let value = 3;
let negValue = -value
// console.log(negValue);

let str1 = "rakshit"
let str2 = " hello"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1+ "2");
// console.log("1" + 2+ 2);
// console.log(1 + 2 + "2");

// console.log(+"");

let num1,num2,num3

let gameCounter = 100
++gameCounter;
//console.log(gameCounter);

let x = "rakshit"
let array = ["ankit","priyanshu"]
let array1 = array  // here array is an reference to array1
array.push("rakshit") // this means that even after we modify the data in array  by adding new items, 
                      // logging array1 will show the new items added to array,this behaviour is expected from
                      // non primtive data types.

console.log(x.toUpperCase());
console.log(array1);




