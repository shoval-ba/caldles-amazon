
let name = "shoval"; // string
let age = 21 ;// number
let isApproved = true;  //Boolean 
let lastName ; //undefined
let selectedColor = null; // clear

var myName = "shoval"; // var - you can change it and use it for all the program
myName = 8;

let ourName = "Ben Asouli"; // let - you can change it and use it just where ut appear

const pi = 3.14; // const - you cant change it and you can use it for all the program

var myVar = 87;
myVar++; // myVar = myVar + 1
myVar--; // myVar = myVar - 1

/** in string
 * /n - new lina
 * /r - carriage return
 * /t - tad
 * /b backapace
 * /f - forn feed
 */

//object
let person = {
    name:"shoval",
    age: 21
};
console.log(person);

//change the name
//1 
person.name = "Ido";
//2
person["name"] = "Ido";
console.log(person.name);

//array-list
let Color = ["red" , "blue"];
Color[2] = "green";
console.log(Color);

var ourArray = ["shoval" , "S" , "Ido"];
ourArray.push("happy"); // to appand(at the end)
ourArray.pop() // to remove(the last)
ourArray.shift() // to remove(the first)
ourArray.unshift() // to appand(at the begging)

//functions
function greet(name) {
    console.log("hello " + name);
}

greet(name); // to call the function
greet(person.name);

function greet1(name , lastName) {
    console.log("hello " + name + " " + lastName);
}

greet1(name, lastName); // to call the function

function square(number) {
     return number * number;
}
console.log(square(3));

//3 === 3 true
// 3=== "3" false
//3 == 3 true
// 3== "3" true

function ifEqual(a , b) {
    if (a == b) {
        return "Equal";
    }
    return "not equal";
    }

console.log(ifEqual(10 , "10"))

var val;
if (val >=25 && val <=25); // and
if (val >=25 || val <=25); // or


var num;
function change(num){
    if ( num < 5) {
        return "Tiny";
    }
    else if (num < 10){
        return "small";
    }
    else if (num < 15){
        return "medium";
    }
    else if (num < 20){
        return "large";
    }
    else return "huge"
    }

    console.log(change(8))

var names = ["Hole-in-one!" , "Eagle" , "Birdie" , "Par" , "Bogey" , "Doubale Bogey" , "Go home" ]
function golfScore(par , stokes) {
    if (stokes == 1){
        return names[0];
    }
    else if (stokes <= par - 2) {
        return names[1]
    }
    else if (stokes == par - 1) {
        return names[2]
    }
    else if (stokes == par ) {
        return names[3]
    }
    else if (stokes == par + 1) {
        return names[4]
    }
    else if (stokes <= par + 2) {
        return names[5]
    }
    else if (stokes >= par + 3) {
        return names[6]
    }
}
console.log(golfScore(5,4))


function caseInSwitch(val){
    var answer = "";
    switch(val){
        case 1: // if val ===1
            answer = "alpha";
            break;
        case 2: // if val ===2
            answer = "beta";
            break;
        case 3: // if val ===3
            answer = "gamma";
            break;
        case 4: // if val ===4
            answer = "delta";
            break;
        default: // else
            answer = "nun";
            break;
    }
    return answer;
}
console.log(caseInSwitch(1));

//object
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
ourDog.bark = "bow-bow"; //  bark : "bow-bow" append in the object
delete ourDog.legs; // delete it from the object
console.log(ourDog.name) // Camper

var myObject = {
    1: "shoval",
    2: 4,
    8: 1,
    10: ["everything!"]
};

console.log(myObject[2]) //4

var myObjectCopy = JSON.parse(JSON.stringify(myObject)) // copy of the object

//loops
var myArray = []
var i = 0;
while(i < 5) {
    myArray.push(i);
    i++;
}
console.log(myArray)

var ourArray = []
for( var i = 0; i < 5; i++){
    ourArray.push(i);
}
console.log(ourArray)

//sum of array
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;
for(var i = 0; i < ourArr.length; i++){
    ourTotal += ourArr[i]
}
console.log(ourTotal)

function multiplyAll(arr){
    var product = 1;
    for (var i = 0; i <arr.length; i++){
        for (j = 0; j <arr[i].length; j++){
            product *= arr[i][j]
        }
    }
    return product
}
var product = multiplyAll([[1 , 2] , [3 , 4] , [5 , 6 , 7]]);
console.log(product)

//another way of while loop
var myArray = [];
var i = 3;
do{
    myArray.push(i);
    i++;
} while(i < 5)
console.log( i , myArray)

//random
function randomFraction(){
    return Math.random();
}
console.log(randomFraction()); // number between  0-1 
Math.floor(Math.random()* 21); // number between 0 -20
var ourMax = 8;
var ourMin = 5;
Math.floor(Math.random()* (ourMax - ourMin +1)) + ourMin; // number betwwen ourMin - ourMax

// to make a string to an integer
function convertToInteger(str){
    return parseInt(str);
}
convertToInteger("56");

// another way to write if condition
function checkEqual(a , b){
    return a === b ? true : false;
}
console.log(checkEqual(1 , 2))

const PI = 3.14
Object.freeze(PI) // cant change

// short function
const myConcat = (arr1, arr2) => arr1.concat(arr2)
console.log(myConcat([1 , 2] , [3 , 4 , 5]))

//some functions
const realNumberArray = [4 , 5.6 , -9.8 , 3.4 , 42 , 6 , 8.34 , -2]
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x); // filter - out from the array , map - change the value
    return squaredIntegers; 
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers)

const sum = (function(){
    return function sum(...args){ // ...ars - take all the numbers in the args
        return args.reduce((a , b) => a + b, 0); // sum all the numbers
    };
})();
console.log(sum(1,2,3,4));


