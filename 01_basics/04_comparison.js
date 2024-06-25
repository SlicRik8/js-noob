// console.log("2">1);

// console.log(null>0);  
// console.log(null<0);
// console.log(null==0);
// console.log(null>=0); // this will come true

//  console.log(undefined == 0);
//  console.log(undefined > 0);
//  console.log(undefined < 0); 

// should avoid the above comparison in code in most cases 


// strict check ===

//console.log("2" === 2); // this will give false as strict check also checks the datatype

// symbol
const id = Symbol("123")
const anotherId = Symbol("123") // both the values appears to be the same
                                // but they wont have the same value

console.log(id === anotherId); // this will give false

//const bigNumber = 231234134141312123n //adding n will convert it to bigInt

//console.log(typeof bigNumber);

//Arrays

const heros = ["spiderman","rakshit","chaddhaman"]

//objects

let myObj = {
    name:"rakshit",   // values under the curly braces are objects
    age:20,
}

//function

const myfunction=function(){
    console.log("Hello World");
}

const outsideTemp = null
console.log(typeof outsideTemp); // this will print object as an output

console.log(typeof myfunction); // will give object function or function object as output
                                // here it will give an output as function
