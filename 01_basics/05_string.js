const name ="rakshit "
const repoCount = 50

//console.log(name + repoCount + " Value"); outdated shit

// modern way down hereee (string interpolation)
//console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

//another way of declaring a string
const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__); // gives an object

// console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf("d"));

const newString = gameName.substring(0,4); //will not take or will ignore negative values
//console.log(newString); // last limit is not included

const anotherString = gameName.slice (-8,4) //in this method we can also give negative values
//console.log(anotherString);

const newStringOne = "   rakshit  !"

const newStringTwo = newStringOne.trimStart()
const newStringThird = newStringOne.trimEnd()
const newStringFour = newStringTwo.trimEnd()

// console.log(newStringOne);
// console.log(newStringTwo);
// console.log(newStringThird);
// console.log(newStringFour);


const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url);

console.log(url.replace('%20','-'));

console.log(url.includes("hitesh"))
console.log(url.includes("susu"))

console.log(gameName.split('-'))

