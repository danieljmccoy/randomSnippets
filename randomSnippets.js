// Many examples here use var for playing around via live console testing. 

// first element of the array is the object key and the last element is the object value
// example input
// ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']
function transformFirstAndLast(array) {
  var key = array[0];
  var lastValue = array.slice(-1);
  var lastToString = lastValue.toString()
  var Obj = {};
      Obj[key] = lastToString;
  return Obj;
}
/*//example output
{
  Queen : 'Beyonce'
}
*/

// returns an array of all of the input object's keys
// example input:
/*
{
  name : 'Sam',
  age : 25,
  hasPets : true
}
*/
function getAllKeys(obj) {
  var arr = [];
  for(prop in obj) {
    arr.push(prop);
  }
  return arr;
}

/*//example output
['name', 'age', 'hasPets']
*/


// return an array of all the input object's values.
/*
example input
{
  name : 'Krysten',
  age : 33,
  hasPets : false
}
*/

function listAllValues(obj) {
  arr = [];
  for(prop in obj){
    arr.push(obj[prop])
  }
  return arr
}

// output
//['Krysten', 33, false]



// take in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
// example input
// [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
function fromListToObject(source) {
	var result = {}, iLen = source.length;
	  for (var i = 0; i < iLen; i++)
      result[source[i][0]] = source[i][1];
	return result;
}


// output
// Object {"make": "Ford","model": "Mustang","year": 1964}



// Write a function called "transformEmployeeData" that transforms some employee data from one format to another.
/*
[
   [
       ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
   ],
   [
       ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
   ]
]
*/

function transformEmployeeData(array) {
  return array.map(function(el){
    var obj = {};
    el.map(function(b){
      obj[b[0]] = b[1];
    })
    return obj;
  })
}

// output
/*
[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]
*/

var arrays = [["1", "2", "3"], ["4", "5"], ["6"]];
var merged = [].concat.apply([], arrays);

var merged = [].concat(...arrays);                          <---- Dopeness!

flatArray = arrays.reduce(function(a, b){               <---- More Dopeness!
     return a.concat(b);
}, []);

// ["1", "2", "3", "4", "5", "6"];

// flatten array recursively (made it an object just for fun)
var parentArray = {
  multiArr : [
    [[1,2,3],[4,5,6],[7,8,9]],
    [[10,11,12],[13,14,15],[16,17,18]],
    [[19,20,21],[22,23,24],[26,27,28]]
  ]
};

function flatten(obj){
  const flat = [];
  Object.keys(obj).map(function(key) {
    typeof obj[key] === "object" ? flat.push(...flatten(obj[key])) : flat.push(obj[key])
  });
  return flat;
}

flatten(parentArray)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 28]

// Write  a function called "convertObjectToList" which converts an object literal into an array of arrays
/*
example input
{
  name: 'Holly',
  age: 35,
  role: 'producer'
}
*/

function convertObjectToList(obj) {
  var entries = Object.entries(obj);
  return entries;
}

// output: [['name', 'Holly'], ['age', 35], ['role', 'producer']]




// write a function that greats customers based on the amount of visits they've made
var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  var greeting = '';
  if (!customerData[firstName]) {
    // if they're not found in data, it's their first time
    greeting = 'Welcome! Is this your first time?';
  } else if (customerData[firstName].visits === 1) {
    greeting = "Welcome back, " + firstName + "! We're glad you liked us the first time!";
  } else if (customerData[firstName].visits >= 2) {
    greeting = "Welcome back, " + firstName + "! So glad to see you again!";
  }
  return greeting;
}

// tests
console.log(greetCustomer("Joe"));
console.log(greetCustomer("Carol"));
console.log(greetCustomer("Howard"));
console.log(greetCustomer("Carrie"));
console.log(greetCustomer("Bob"));


function isStringUpper(str){
  return str[0] === str[0].toLowerCase()
}

isStringUpper("t");



//function to test if object has a property
function getProperty(obj, key) {
return obj.hasOwnProperty(key) ? obj[key] : undefined;
}

// function to add property to object if it doesn't exist (must add as string)
function addProperty(obj, key) {
  if (!obj[key])
       obj[key] = true;
}

// function to remove object property if it exists
function removeProperty(obj, key) {
  (obj[key])
       delete obj[key];
}

/*
Given two objects and a key, "addObjectProperty" sets a new property on the 1st object at the given key. The value of that new property is the entire 2nd object.
*/

var person1 = {
  name: 'Joe Blow',
  role: 'schlub'
};
var person2 = {
  name: 'Mr. Burns',
  role: 'supervisor'
};

function addObjectProperty(obj1, key, obj2) {
  obj1[key] = obj2;
  return obj1
}

addObjectProperty(person1, 'manager', person2);
console.log(person1.manager); // --> { name: 'Mr. Burns', role: 'supervisor' }


// function to test whether old enough to drink and drive;
function isPersonOldEnoughToDrinkAndDrive(person) {
  return false;
}


// set objects key to a given array
function addArrayProperty(obj, key, arr) {
  obj[key] = arr;
  return obj;
}


function getLastElement(array) {
 var last = array.pop() 
 if(!array)
   return undefined
   else
   return last;
}


// compute perimeter of a circle
function computePerimeterOfACircle(radius) {
  return radius * Math.PI * 2;
}

// compute area of a circle
function computeAreaOfACircle(radius) {
 return radius * radius * Math.PI;
}

// get all elements after a given index
function getElementsAfter(array, n) {
  var arr = array.slice(n + 1)
  return arr;
}

// get all elements up to a given index
function getElementsUpTo(array, n) {
  var arr = array.slice(0, n);
  return arr;

// gat all elements but the first
function getAllElementsButFirst(array) {
  var arr = array.slice(1);
  return arr;
}

// get all elements but the last
function getAllElementsButLast(arr) { 
  arr.pop();
  return arr;
}

// return a new array containing all but the last element of the given array
function removeFromBackOfNew(array) {
  var arr = array.slice();
  var realArr = "somethingDumb"
  arr.pop()
  if (arr !== true)
    realArr = "somethingCrazy"
  return arr;
}

// return a new array containing all but the last element of the given array
function removeFromBackOfNew(array) {
  var arr = array.slice();
  arr.pop()
  return arr;
}

// return every property that is true in an array of objects
function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(obj => obj[pre]);
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");



// This problem is very straight forward, you will get a string that will represent a sentence in binary code, and you need to translate that into words. There is not direct way to do this so you will have to translate twice.

}function binaryAgent(str) {
  return String.fromCharCode(...str.split(" ").map(function(char){ return parseInt(char, 2); }));

// test here
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


// alphabet should go in order and be converted to charcodes and then back to a string. find the missing letter of the alphabet that should come next in succession when the incorrect one is present
function fearNotLetter(str){
  for(var i = 0; i < str.length-1; i++){
    if(str.charCodeAt(i)+1 !== str.charCodeAt(i+1)){
      return String.fromCharCode(str.charCodeAt(i)+1);
    }
  }
}

// caesar cipher. change all code by 13 characters for basic text encryption

// advanced solution

// basic solution
function rot13(str) { // LBH QVQ VG!
  return str.toUpperCase().replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
}

rot13("daniel")


// code cypher
function rot13(str) {
  var x = str.toUpperCase();
  var newString = [];

  for (var i = 0; i < x.length; i++) {
    if (x.charCodeAt(i) < 65 || x.charCodeAt(i) > 90) {
      newString.push(str.charAt(i));
    } else if (x.charCodeAt(i) > 77) {
      newString.push(String.fromCharCode(x.charCodeAt(i) - 13));
    } else {
      newString.push(String.fromCharCode(x.charCodeAt(i) + 13));
    }
  }
  return newString.join("");
}

rot13("daniel")


// split array in half (if uneven number of elements the total rounds up so the odd element gets added)
var array = ["blah", "yo", 4, true, "ya", "ya", "next"]

var leftSide = array.splice(0,Math.ceil(array.length / 2)) // use Math.floor() if you want to round down

// get random item from array

// return an object that has key value pairs based on the elements in the array
var x = ['a','b','c']. (function(result, item, index, arr) {
  result[item] = item;
  return result;
}, {})
// Object {a: "a", b: "b", c: "c"}

// get century
function centuryFromYear(year) {
  return Math.ceil(year/100)
}

// get palindrome
function palindrome(str) {
  // replace any non word charactar with an empty string (so take it out, replace with nothing)
  return str.replace(/[\W_]/g, '').toLowerCase() ===
         str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}

palindrome("-eye.")

// emmett, atom-alignment package,

// words2bits.com,
// wordstobits.com
// ethereumbits.com

/*
Some people see the world as black or white. On or off. Things are or they aren't. It is or it isn't. But really what they're seeing is the end result. There's always a state of inbetween.
*/


var queue = {
  items : [],
  enqueue : (element) => queue.items.push(element),
  dequeue : () => queue.items.shift(),
  print : () => console.log(queue.items.toString())
}

var dictionary = {
      items : {}, // look how it pulls the dictionary.items[value] to its own side
      set : (key, value) => dictionary.items[key] = value,
      remove : (key) => {
                 if (dictionary.has(key)) {
                   delete dictionary.items[key];
                   return true;
                 }
               },
      has : (key) => dictionary.items.hasOwnProperty(key),
      get : (key) => dictionary.has(key) ? dictionary.items[key] : undefined,
      clear : () => dictionary.items = {},
      size : () => Object.keys(dictionary.items).length,
      keys : () => Object.keys(dictionary.items),
      values : () => {
                 var values = [];
                 for (var k in dictionary.items) {
                   if(dictionary.has(k)) {
                     values.push(dictionary.items[k])
                   }
                 }
                 return values;
               },
      getItems : () => dictionary.items
}


// find the longest word in a string.
function findLongestWord(str) {
  let arr = str.split(" ");
  let newArr = arr.sort((a, b) => {
    return (b.length > a.length);
  });
  let sorted = newArr.shift();
  return sorted.length;
};

findLongestWord("The quick brown fox jumped over the lazy dog");

function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}
titleCase("I'm a little tea pot");


// title case a string
function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}
titleCase("I'm a little tea pot");

function titleCase(str) {
  return str.toLowerCase().split(" ").map((el) => el[0].toUpperCase() + el.slice(1)).join(" ");
}


// uppercase the first word in each array string, including strings with multiple words

function upperCaseFirstInArr(arr){
  var cleanestUpperCased = [];
  for(var i = 0; i < arr.length; i++){
    arr[i] = arr[i].replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
      cleanestUpperCased.push(arr[i][0].toUpperCase() + arr[i].slice(1));
  }
  return cleanestUpperCased;
}

upperCaseFirstInArr(["seattle", "portland", "san francisco", "longview"])



// find the largest product of two adjacent elements in an array.
function adjacentElementsProduct(inputArray) {
  if (inputArray.length === 1) return 0;  // if only one item in the array

  let largestProduct = inputArray[0] * inputArray[1];  // set the group case to test against starting with the first two elements in array
    for(let i = 0; i < inputArray.length; i++){
      if (inputArray[i] * inputArray[i+1] > largestProduct) { // if the first element * the element next to it are greater than the case
        largestProduct = inputArray[i] * inputArray[i+1];     // then the largest product equals those elements
    }
  }
return largestProduct;
}

console.log(adjacentElementsProduct([2, 8, 19, 8, 10, 7]));


//check if an equal array of six repeats.
arr = [1,2,3,1,2,3];
 z
for(var i = 0; i < arr.length; i++){                                                   
  if(arr[i] + arr[i + 1] + arr[i + 2] === arr[i + 3] + arr[i + 4] + arr[i + 5])
    console.log("the array numbers repeat")
}


//Get days
function whatDay(){
  switch(new Date().getDay()){
      case 0:
        return "Saturday!";
        break;
      case 1:
        return "Sunday!";
        break;
      case 2:
        return "Monday!";
        break;
      case 3:
        return "Tuesday!";
        break;
      case 4:
        return "Wednesday!";
        break;
      case 5:
        return "Thursday!";
        break;
      case 6:
        return "Friday!";
        break;
        default:
        return "a day wasn't entered!";
  }
}

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(firstName, prop){
  for (var x = 0; x < contacts.length; x++){
    if (contacts[x].firstName === firstName)
      if (contacts[x].hasOwnProperty(prop))
        return contacts[x][prop];
       else
          return "No such property";
  }
  return "No such contact";
}


lookUpProfile("Sherlock", "likes");


// access an object with nested objects
for(var key in daniel) {
    if(typeof daniel[key] === "object")
      if (daniel.hasOwnProperty(key)) {
      var obj = daniel[key];
      for (var prop in obj) {
         if (obj.hasOwnProperty(prop)) {
            console.log(obj[prop]);
         }
      }
   }
}

function checkBreak(break){
  if(break !== "undefined")
    if(break === true){
      if(break.day === "tuesday"){}
    }
  }
}

// if the number entered is even, UPPERCASE the string. If odd, LOWERCASE
String.prototype.evenOdd = function(i){
  return String(this)["to"+(i%2?"Low":"Upp")+"erCase"]();
}
"daniel".evenOdd(4)
// "DANIEL"
"daniel".evenOdd(3)
// "daniel"

// if a string is an even amount of letters, UPPERCASE the string. If odd, LOWERCASE
String.prototype.evenOdd=function(){return String(this)["to"+(this.length%2?"Low":"Upp")+"erCase"]();}

// return if a file is a jpg
var names = [an array of many jpgs]
names.filter(function(name) { 
  return /\.jpg$/i.test(name);
});

// it's often good to specify an anonymous function name that describes its process. it helps for readability, stack traces, and most minifiers will remove the name so that there's no production impact.
// need to post example here.

Object.prototype.hasOwnProperty.call(obj, name) 
// this is the way to check if an object has an own property when using libraries. Sometimes there won't be a prototype object in such cases as Object.create(null) etc.


// https://medium.com/@WebReflection/dom-handleevent-a-cross-platform-standard-since-year-2000-5bf17287fd38
// handleEvent pattern. 
var obj = {
  handleEvent(e) {
    // always true
    console.log(this === obj);
  }
};

document.body.addEventListener('click', obj);

// The method can be inherited obtaining exact same results, meaning there is one single method in memory instead of O(N).

// interface
var EventListener = {
  handleEvent(e) {
    this['on' + e.type](e);
  }
};

// component
var Clicker = Object.create(EventListener, {
  clicks: {writable: true, value: 0},
  onclick: {value(e) {
    e.preventDefault();
    console.log(++this.clicks);
  }}
});

// object
var clicker = Object.create(Clicker);
document.body.addEventListener('click', clicker);

// you can use classes too 
class TenClicks {
  
    constructor(currentTarget) {
      this.clicks = 10;
      currentTarget.addEventListener('click', this);
    }
  
    handleEvent(event) {
      this['on' + event.type](event);
    }
  
    onclick(event) {
      event.preventDefault();
      // once we reach 0
      if (--this.clicks < 1) {
        // remove the listener
        event.currentTarget
             .removeEventListener(event.type, this);
        // show the result
        console.log('You made it!');
      }
    }
  
  }
  
  let ten = new TenClicks(document.body);
 

// Replaces oldS with newS in the string fullS
function replaceString(oldS, newS, fullS) {
  var splt = fullS.split(oldS);
  return fullS.split(oldS).join(newS);
}

replaceString('Halloween', 'Fright Night', "It's a brave time to be out here, on Halloween, I'd say that's true");


// filtering out elements by index choice without using splice (or truly could/prob would use with a small change to not alter original array)
var someObj = { 	
  someArr : [2, 5, 15, 21, 22, 7],

  filterElementNum : (arg) => {
    return someObj.someArr.filter((el, ind, arr) => {
      if(arg < 0 || arg > arr.length -1){
        console.log("the index is too small (less  than zero) or too big");
        return;
      }
      var buildFromArg = arr.slice(0, arg) + "," + arr.slice(arg + 1)
      if (buildFromArg[buildFromArg.length - 1] === ",") {
          buildFromArg = buildFromArg.slice(0,-1)
       }
      var newArray = buildFromArg.split(",")
      if (newArray[0] === "" || "," || "undefined") {
          newArray.shift()
      }         
          someObj.someArr = newArray
    })
  }
}

someObj.filterElementNum(5)


// if the first last name is no longer the one being pushed into the fullName array, then break;

var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];
for (var i = 0; i < firstNames.length; i++) {
  for (var j = 0; j < lastNames.length; j++) {
    fullNames.push(firstNames[i] + lastNames[j]);
      if(lastNames[j][0] !== lastNames[j][0]);
        break;
    }
}

// => ["BlueRay Zzz", "Upchuck Zzz", "Lojack Zzz", "Gizmo Zzz", "Do-Rag Zzz"]

function extractMiddle(str) {
  /*
    a function that checks whether the middle of a string length is odd or even. If it's odd, the       middle will be one character, if it's even it will be two characters. The string calls             substring and pulls one character out if the length is only even (length = 1), or it calls         substring and pulls two characters if it's even.
  */

        var position;
        var length;
       
        // if the string length is odd, there's only one character to get out of the middle.
        if(str.length % 2 == 1) {
            position = str.length / 2;
            length = 1;
        // if the string length is even, there's two character's to get out of the middle.
        } else {
            position = str.length / 2 - 1;
            length = 2;
        }

        return str.substring(position, position + length)
    }

    console.log(extractMiddle("handbanann"));


    // get the max Profit between two elements in array. So return the largest number possible after subtracting the elements from right to left.
    function getMaxProfit(arr) {
      var minIdx = 0;
        var maxIdx = 1;
        var currMin = 0;
        var maxProfit = 0;
    
        if(arr.length < 2) {
            throw new Error("Need atleast two time periods to be profitable!");
        }
        
        for(var i = 1; i < arr.length; i++) {
    
          // new current min. find out which element is the smallest in the array and update it if it's not the first one.
          if(arr[i] < arr[currMin]) { 
            currMin = i; 
          }
            
      
          if(arr[i] - arr[currMin] > arr[maxIdx] - arr[minIdx]) { 
            maxIdx = i;
            minIdx = currMin; 
          }
    
        }
    
        maxProfit  = arr[maxIdx] - arr[minIdx];
        return maxProfit;
    }
    
    getMaxProfit([2, 15, 10, 11, 4, 21, 15, 14]);

    //same thing

 
 var stockPricesYesterday = [18, 17, 13, 11, 5, 1];
 getMaxProfit(stockPricesYesterday);


 //RGB TO HEX
 function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

alert( rgbToHex(0, 51, 255) ); // #0033ff



var text = "the new yorker would prefer you use the term World War II instead of using world war terms"
var firstChar = text.indexOf("World War II");
if(firstChar !== -1) {
  text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
}


const add = (x,y) => x + y;
const subtract = (x,y) => x - y;
const multiply = (x,y) => x * y;

const arrayOfFunctions = [add, subtract, multiply];

arrayOfFunctions.forEach(calculationFunction => console.log(calculationFunction(1,1)));



const bankStatement =
name =>
  location =>
    balance =>
      `Hello ${name}! Welcome to the bank of ${location}. Your current balance is ${balance}`;

const statementExpectingLocation = bankStatement("Omer");
const statementExpectingBalance = statementExpectingLocation("NYC");
const bankStatementMsg = statementExpectingBalance("100 million"); // wishful thinking?

console.log(bankStatementMsg); // Hello Omer! Welcome to the bank of NYC. Your current balance is 100 million

// We could also call the function with all the arguments up front
const msg = bankStatement("Jeff Bezos")("Silicon Valley")("97.7 billion");
console.log(msg); // Hello Jeff Bezos! Welcome to the bank of Silicon Valley. Your current balance is 97.7 billion




// total permutations you can make for the amount of ways you can return a value from a certain set amount of coins.
var denoms = [1, 2, 3];

function waysToReturnChange(denominations, numOfCoins, amount) {
  
  if(amount === 0) return 1; // Perfect!
  
  if(amount < 0) return 0; // No solution exists for negative amount
  
  if(numOfCoins < 0 && amount > 0) return 0; // We don't have coins left

  return waysToReturnChange(denominations, numOfCoins, amount - denominations[numOfCoins]) + 
         // this line takes the total amount you're looking to reach and subtracts the number you're looking to make permutations for from the current index in the array working backwards from the end of the array to the front
         waysToReturnChange(denominations, numOfCoins - 1, amount);
         // this line starts at the end and goes backwards through the array starting at the last index

}

var totalWays = waysToReturnChange(denoms, denoms.length - 1, 6);



// merging meeting times
function mergeRanges(meetings) {
  
      // sort by start times, slice will return a shallow copy of the array, not affecting original array
      var sortedMeetings = meetings.slice().sort(function(a, b) {
          return a.startTime > b.startTime ? 1 : -1;
      });
  
      // initialize mergedMeetings with the earliest meeting
      var mergedMeetings = [sortedMeetings[0]];
  
      for (var i = 1; i < sortedMeetings.length; i++) {
  
          var currentMeeting    = sortedMeetings[i];
          var lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
  
          // if the current and last meetings overlap, use the latest end time
          // objects, and arrays (which are objects) all are passed by reference. thus change will be recorded.
          if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
              lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
  
          // add the current meeting since it doesn't overlap
          } else {
              mergedMeetings.push(currentMeeting);
          }
      }
  
      return mergedMeetings;
  }
  
  
  meetings =   [
      {startTime: 0,  endTime: 1},
      {startTime: 3,  endTime: 5},
      {startTime: 4,  endTime: 8},
      {startTime: 10, endTime: 12},
      {startTime: 9,  endTime: 10},
  ];
  
  //var res = meetings.slice();
  var res = mergeRanges(meetings);
  console.log(meetings);
  console.log("break");
  console.log(res);




function multiplyByTwo(a, b, c, callback) {
  var i, ar = [];
  for(i = 0; i < 3; i++) {
    ar[i] = cb(arguments[i] * 2);
  }
  return ar;
}

function addOne(a) {
  return a + 1;
}


// accessing a private function later after doing some initial work to it as a setup with anther function.
var a = function() {
  function someSetup(){
    var setup = 'done';
  }
  function actualWork() {
    alert('Worky-worky');
  }
  someSetup();
  return actualWork;
}();
a();

// redifining a function inside a function, function a() {
     alert('A!');
     a = function(){
       alert('B!');
     };
}

// In JavaScript, functions have lexical scope. 
// This means that functions create their environment (scope) when they are defined, not when they are executed.


// Our input. Sort an array of objects containing all original meeting times.



// We should consider these meetings as overlapping
[{startTime: 1, endTime: 2}, {startTime: 2, endTime: 3}];

// Overlapping meetings! How can we overlapping meeting programitically?
[{startTime: 4, endTime: 6}, {startTime: 5, endTime: 7}];


function mergeRanges(meetings) {

  // sort by start times, slice will return a shallow copy of the array, not affecting original array
  var sortedMeetings = meetings.slice().sort(function(a, b) {
      return a.startTime > b.startTime ? 1 : -1;
  });

  // initialize mergedMeetings with the earliest meeting
  var mergedMeetings = [sortedMeetings[0]];

  for (var i = 1; i < sortedMeetings.length; i++) {

      var currentMeeting    = sortedMeetings[i];
      var lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
    
      // if the current and last meetings overlap, use the latest end time
      // objects, and arrays (which are objects) all are passed by reference. thus change will be recorded.
      if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
          lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);

      // add the current meeting since it doesn't overlap
      } else {
          mergedMeetings.push(currentMeeting);
      }
  }

  return mergedMeetings;
}


meetings =   [
  {startTime: 0,  endTime: 1},
  {startTime: 3,  endTime: 5},
  {startTime: 4,  endTime: 8},
  {startTime: 10, endTime: 12},
  {startTime: 9,  endTime: 10},
];

//var res = meetings.slice();
var res = mergeRanges(meetings);
console.log(meetings);
console.log("break");
console.log(res);





var input = [[1,  2,   3,  4],
             [5,  6,   7,  8],
             [9,  10, 11, 12],
             [13, 14, 15, 16]];

function clockSpiral(input, result) {
if (input.length == 0) {
return result;
}

// add the first row to result
result.push(...input.shift());

// add the last element of each remaining row
input.forEach(function(lastElement) {
result.push(lastElement.pop());
});

// add the last row in reverse order
result.push(...input.pop().reverse());

// add the first element in each remaining row (going upwards)
var tmp = [];
input.forEach(function(leftEnd) {    
tmp.push(leftEnd.shift());
});
result.push(...tmp.reverse());

return clockSpiral(input, result);
}

var result = clockSpiral(input, []);
console.log('result', result);



// quick string replace/overwrite type function via mdn
function replaceString(oldS, newS, fullS) {
  return fullS.split(oldS).join(newS);
}


// additive persistence 1
function AdditivePersistence(num) {
  if(num.toString().length <= 1) {
    return 0;
  } else {
    var newNum = num.toString().split("").map(Number).reduce(function(a,b) {
      return a + b;
    });
    return 1 + AdditivePersistence(newNum);
  }
}

AdditivePersistence(19);


// additive persistence 2
function AdditivePersistence(num) { 
  var count = 0;
  var res = num.toString().split("").map(Number);
  var x = 0;
    
   while(res.length > 1) {
     for(var i = 0; i < res.length; i++) {
       x += res[i];
     }
       count++
       res = x.toString().split("").map(Number);
       x = 0;  // you left out this line
   }
    return count;
  }

  AdditivePersistence(2899);



  // if array has objects with equal properties, add them together.
  var input = [
    {a: 2, b: 5, c: 6},
    {a: 3, b: 4, d: 1},
    {a: 1, d: 2}
  ];
  
  var answer = input.reduce(function(acc, curr) {
      for (var p in curr) {
          acc[p] = (acc[p] || 0) + curr[p];
      }
  
      return acc; // this will be passed as prev in the next iteration or returned as the result.
  }, {}); // The {} is the initial value passed as prev
  
  console.log(answer);



  var a = [{a: 2, b: 5, c: 6}, {a:3, b: 4, d:1},{a: 1, d: 2}];
  var ans = {};
  for(var i = 0; i < a.length; i++){
    for(var obj in a[i]){
      obj[key] = !obj[key] ? arr[i][key] : obj[key] + arr[i][key]
    }
  }

console.log(ans);

  var s = "This is a long string";
  
  var middle = Math.floor(s.length / 2);
  var before = s.lastIndexOf(' ', middle);
  var after = s.indexOf(' ', middle + 1);
  
  if (middle - before < after - middle) {
      middle = before;
  } else {
      middle = after;
  }
  
  var s1 = s.substr(0, middle);
  var s2 = s.substr(middle + 1)

  // (This code assumes that there actually are spaces on both sides of the middle. You would also add checks for before and after being -1.)
  if (before == -1 || (after != -1 && middle - before >= after - middle)) {
    middle = after;
} else {
    middle = before;
}

function longestWord(str) {
  var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
  return longestWord[0].length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");


function longestWord(str) {
  var longestWord = str.split(' ').reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return longestWord.length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
  
// adding private methods/variables to object literal. 

let obj = {
  tables: {
    customers:(function(){
      var privateVar = 'foo';
      return { 
        cols:[ /*here*/ ],
        rows:[ /*here*/ ],
        getPrivateVar: function()
        {
          return privateVar;
        }
      };
    }()),
    orders:{
      cols:[ /*here*/ ],
      rows:[ /*here*/ ]
    }
  },
  relations: [{
    parent:'customers', 
    child:'orders', 
    keyparent:'custid', 
    keychild:'orderid',
    onetomany:true
  }]
};

dataset.tables.customers.getPrivateVar()

// RGB to Hex via stackOverflow
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

console.log( rgbToHex(0, 51, 255) ); // #0033ff


// hex to RGB via stackOverflow
function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null;
}

alert( hexToRgb("#0033ff").g ); // "51";
alert( hexToRgb("#03f").g ); // "51";

// weird passing alert like that up top and the argument at the bottom in the iife params. look into this a bit.
function() {
  return alert;
}
)()("Boo!")


// removing single item from array without mutating original eg splice
let value = 3

let arr = [1, 2, 3, 4, 5, 3]

arr = arr.filter(item => item !== value)

console.log(arr)
// [ 1, 2, 4, 5 ]



// removing multiple items from array without mutating original eg splice.
let forDeletion = [2, 3, 5];
let arr = [1, 2, 3, 4, 5, 3];

arr = arr.filter(item => !forDeletion.includes(item))
// !!! Read below about array.includes(...) support !!!

console.log(arr)
// [ 1, 4 ]



// removing multiple items from Array using This-Binding Syntax.
// array-lib.js
export function remove(...forDeletion) {
  return this.filter(item => !forDeletion.includes(item))
}

// main.js
import { remove } from './array-lib.js'

let arr = [1, 2, 3, 4, 5, 3]

// :: This-Binding Syntax Proposal
// using "remove" function as "virtual method"
// without extending Array.prototype
arr = arr::remove(2, 3, 5)
console.log(arr)
// [ 1, 4 ]


// adding multiple handlers to single instance
['click','ontouchstart'].forEach( evt => 
  element.addEventHandler(evt, dosomething, false)
);


// sweet little function that could be the basis for several other similar type functions

let arr = [ "3", "5", "31", "71", "12" ];

let largestDiff = (...arr) => {
let numberedArr = arr.map((el) => parseInt(el, 10));

let min = Math.min(...numberedArr);
let max = Math.max(...numberedArr);

let largestDifference = max - min;
  return largestDifference;
}

largestDiff(...arr);


 // basic Knuth Shuffle, es6 makes this sooo much cleaner
 function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
  }
}

// getting and giving values to sparse arrays to make them dense so you can iterate over them. These functions are nothing I solved myself. These functions are via Dr. Rauschmayer and can be good little helper type functions in the right situation. Brandon Benvie mentioned a trick for creating a dense array on the es-discuss mailing list:  

let a = Array.apply(null, Array(3));                                                                                                                                                                    
// the above invocation is equivalent to:
Array(undefined, undefined, undefined);

// a.length
3
// a[0]
undefined;

// however, you can now iterate over the elements, e.g. to fill the array with values:
a.forEach(function (x, i) { console.log( i+". "+x ) });

0. undefined
1. undefined
2. undefined

// and finally, assign the index of  1, 2, 3 as the values in the final step.
a.map(function (x, i) { return i })
[ 0, 1, 2 ]

// better more current examples:
Array(5).fill()
[undefined, undefined, undefined, undefined, undefined]

// works in everything except some versions of IE? check on that.
Array.from({length: 20}, (x,i) => i);

// and finally, the best/ideal version imo
[...Array(5).keys()];
[0, 1, 2, 3, 4]

// Array.prototype.filter function skips non exist elements, thus it can be used to transform sparse to dense arrays.

var sparse = [0, , ,];
var dense = sparse.filter(function() {
   return true;
});


// removing double quotes around strings //exa => `"daniel", "randy", "savage"`
let someString = `"daniel", "randy", "savage"`;
let trimmedAndQuotesRemoved = [];

let removeExtraQuotes = someString.replace(/['"]+/g, '');

let quotesToArray = removeExtraQuotes.split(",")

quotesToArray.forEach((el, ind) => {
  trimmedAndQuotesRemoved.push((el.trim()))
})

console.log(trimmedAndQuotesRemoved)
// ["daniel", "randy", "savage"]



// 
function calculatePercent(amount, percent) {
  const amountDecimals = getNumberOfDecimals(amount);
  const percentDecimals = getNumberOfDecimals(percent);
  const amountAsInteger = Math.round(amount + `e${amountDecimals}`);
  const percentAsInteger = Math.round(percent + `e${percentDecimals}`);
  const precisionCorrection = `e-${amountDecimals + percentDecimals + 2}`;    // add 2 to scale by an additional 100 since the percentage supplied is 100x the actual multiple (e.g. 35.8% is passed as 35.8, but as a proper multiple is 0.358)

  return Number((amountAsInteger * percentAsInteger) + precisionCorrection);
}

function getNumberOfDecimals(number) {
  const decimals = parseFloat(number).toString().split('.')[1];

  if (decimals) {
      return decimals.length;
  }

  return 0;
}

calculatePercent(20.05, 10); // 2.005 first param = Total number, second param = percent of total number to calculate


//operation to do quick and dirty floating point adds (*10*10/10)
let x = (0.2 * 10 + 0.1 * 10) / 10; 



function stringAlmostFunctor(value, fn) {
  var chars = value.split("")
  return chars.map(function(char){
    return String.fromCharCode(fn(char.charCodeAt(0)))
  }).join("");
}

function plus1(value) {
  return value + 1
}

function minus1(value) {
  return value - 1
}

[3, 4].map(plus1);
stringAlmostFunctor("ABC", plus1);  // BCD
stringAlmostFunctor("XYZ", minus1); // WXY



let talk = function() {
  console.log(this.sound);
}

let boromir = {
  speak : talk, 
  sound : 'The ring, I must have it!'
}

// js infers the 'this' for the object that invokes it. Just a different way than I normally see it as.
boromir.speak

// destructuring a callable object/function
// pretend this object/these properties are what's returned from a function:
function getUser() {
  return {
    name : "daniel mccoy",
    email : "daniel@somewhere.com",
    coast : "wessst coast"
  }
}

var {name, email, coast} = getUser();
console.log(coast)

//Savings Calculator
let price = 150;
let sale = 25;
let savings = (price * sale) / 100;
let salePrice = price - savings;

console.log(`Original Price: $${price.toFixed(2)}`);
console.log(`Sale: ${sale}%`);
console.log(`Sale Price: $${salePrice.toFixed(2)}`);
console.log(`Savings: $${savings.toFixed(2)}`)



function square() {
  let numbers = [];
  for (let number of arguments) {
    numbers.push(number * number);
  }
return numbers;
}

square(2, 4, 7.5, 8, 11.5, 21); 


  // We have two objects. One of them has a method called avg () that the other doesn't have
    // So we will borrow the (avg()) method
    var gameController = {
      scores  : [20, 34, 55, 46, 77],
      avgScore : null,
      players : [
        {name:"Tommy", playerID:987, age:23},
        {name:"Pau", playerID:87, age:33}
      ]
      }
  
      var appController = {
        scores : [900, 845, 809, 950],
        avgScore : null,
        avg : function () {
  
        var sumOfScores = this.scores.reduce (function (prev, cur, index, array) {
          return prev + cur;
        });
  
        this.avgScore = sumOfScores / this.scores.length;

        }
      }
  
      // If we run the code below,
      // the gameController.avgScore property will be set to the average score from the appController object "scores" array
     
      // Don't run this code, for it is just for illustration; we want the appController.avgScore to remain null
      gameController.avgScore = appController.avg();

      // Note that we are using the apply () method, so the 2nd argument has to be an array—the arguments to pass to the appController.avg () method.
      appController.avg.apply (gameController, gameController.scores);
    
      // The avgScore property was successfully set on the gameController object, even though we borrowed the avg () method from the appController object
      console.log (gameController.avgScore); // 46.4
    
      // appController.avgScore is still null; it was not updated, only gameController.avgScore was updated
      console.log (appController.avgScore); // null

      // non-recursive fibonacci
      var a = 0;
      var b = 1;
      var result;

      for(var i = 1; i < 100; i++){
        console.log(result);
        result = a + b;
        a = b;
        b = result;
      }

      // run once to no-op function
      function once(fn, thisArg){
        var hasBeenCalled = false;
        return function(){
            if(!hasBeenCalled){
                hasBeenCalled = true;
                return fn.apply(thisArg, arguments)
            }
        }
      }

    
      function debounce(func, wait, immediate) {
        let timeout; 
        return () => {
          let later = () => {
            timeout = null;
            if (!immediate) func.apply(this, arguments);
          };
             // this is what will get called right away when the function is fired.
          let callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);     
          if (callNow) func.apply(this, arguments);
        };
      };

      
      let returnedFunction = debounce(function() {
        // Stuff goes here that you want to debounce as not to call too frequently and crash the browser
      }, 250);
      
      window.addEventListener('scroll', returnedFunction);


var deliveries = [
        {
          "id": 1,
          "destination": 'Oakland',
          "orderPrice": 75,
          "rushDelivery": true,
          "rushDeliveryFee": 12.75,
          "orderDate": "4 April 2016"
        },
        {
          "id": 2,
          "destination": 'San Jose',
          "orderPrice": 62.75,
          "orderDate": "5 April 2016"
        },
        {
          "id": 3,
          "destination": 'San Francisco',
          "orderPrice": 15.00,
          "rushDelivery": true,
          "rushDeliveryFee": 50.75,
          "orderDate": "10 April 2016"
        },
        {
          "id": 4,
          "destination": 'San Francisco',
          "orderPrice": 25,
          "orderDate": "4/11/2016"
        },
        {
          "id": 5,
          "destination": 'San Francisco',
          "orderPrice": 90,
          "rushDelivery": true,
          "rushDeliveryFee": 30,
          "orderDate": "April 12, 2015"
        },
        {
          "id": 6,
          "destination": 'Berkeley',
          "orderPrice": 45,
          "orderDate": "4/01/2015"
        },
        {
          "id": 7,
          "destination": 'Berkeley',
          "orderPrice": 62.16,
          "orderDate": "12 April 2016"
        }
      ];
      
      
function getDeliveries(arr) {
  var object = {};
  
  arr.map(function(el, ind) {
    return object[el.destination] = (object[arr[ind].destination] || 0) + 1;
  })

  return object;
}
      
getDeliveries(deliveries);
     
// {Oakland: 1, San Jose: 1, San Francisco: 3, Berkeley: 2}

var daniel = {
  firstName: "daniel",
  sayHi : function() {
    setTimeout(function() {
      console.log("Hi " + this.firstName)
    }, 1000)
  }
}



function list(type) {
  var result = '<' + type + 'l><li>';
  var args = Array.prototype.slice.call(arguments, 1);
  result += args.join('</li><li>');
  result += '</li></' + type + 'l>'; // end list

  return result;

  var listHTML = list('u', 'One', 'Two', 'Three');
  
  /* listHTML is:
  
  "<ul><li>One</li><li>Two</li><li>Three</li></ul>"
  
  */


  function sumEvenArguments(){
    var newArgs = [].slice.call(arguments);
    return newArgs.reduce(function(acc,next){
        if(next % 2 === 0){
            return acc+next;
        }
        return acc;
    },0)
  }
  
  sumEvenArguments(2, 6, 12, 3, 7, 8, 4) //32
  
  
  
  
  function invokeMax(fn, num){
    var max = 0;
    return function(){
        if(max >= num) return "Maxed Out!";
        max++;
        return fn.apply(this,arguments);
    }
  }
  
  function add(a,b){
    return a+b
  }
  
  var addOnlyThreeTimes = invokeMax(add,3);
  addOnlyThreeTimes(1,2) // 3
  addOnlyThreeTimes(2,2) // 4
  addOnlyThreeTimes(1,2) // 3
  addOnlyThreeTimes(1,2) // "Maxed Out!"
  
  
  
  
  
  
  function once(fn, thisArg){
    var hasBeenCalled = false;
    return function(){
        if(!hasBeenCalled){
            hasBeenCalled = true;
            return fn.apply(thisArg, arguments)
        }
    }
  }
  
  function add(a,b){
    return a+b
  }
  
  var addOnce = once(add, this);
    addOnce(2,2) // 4
    addOnce(2,2) // undefined
    addOnce(2,2) // undefined
      
  function doMath(a,b,c){
    return this.firstName + " adds " + (a+b+c)
  }
      
  var instructor = {firstName: "Daniel"}
  var doMathOnce = once(doMath, instructor);
  doMathOnce(1,2,3) // "Daniel adds 6"
  doMathOnce(1,2,3) // undefined
  
  
  
  
  
  function flip(fn, thisArg){
    var outerArgs = [].slice.call(arguments,2)
    return function(){
        var innerArgs = [].slice.call(arguments)
        var allArgs = outerArgs.concat(innerArgs).slice(0, fn.length)
        return fn.apply(thisArg, allArgs.reverse())
    }
  }
  
  function personSubtract(a,b,c){
    return this.firstName + " subtracts " + (a-b-c);
  }
      
  var person = {
    firstName: 'Daniel'
  }
      
  var flipFn = flip(personSubtract, person);
    flipFn(3,2,1) // "Daniel subtracts -4"
      
  var flipFn2 = flip(personSubtract, person, 5,6);
    flipFn2(7,8) // "Daniel subtracts -4"
  
  
  
  
    function bind(fn, thisArg){
      var outerArgs = [].slice.call(arguments,2)
      return function(){
          var innerArgs = [].slice.call(arguments)
          var allArgs = outerArgs.concat(innerArgs)
          return fn.apply(thisArg, allArgs)
      }
    }
    
    function firstNameFavoriteColor(favoriteColor){
      return this.firstName + "'s favorite color is " + favoriteColor
    }
        
    var person = {
      firstName: 'Daniel'
    }
        
    var bindFn = bind(firstNameFavoriteColor, person);
      bindFn('green') // "Daniel's favorite color is green"
        
    var bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
      bindFn2('green') // "Daniel's favorite color is blue"
        
    function addFourNumbers(a,b,c,d){
      return a+b+c+d;
    }
    
    bind(addFourNumbers,this,1)(2,3,4) // 10
    bind(addFourNumbers,this,1,2)(3,4) // 10
    bind(addFourNumbers,this,1,2,3)(4) // 10
    bind(addFourNumbers,this,1,2,3,4)() // 10
    bind(addFourNumbers,this)(1,2,3,4) // 10
    bind(addFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // 10
  
  
  
  
  
  var animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Fail' }
  ];
  
  for (var i = 0; i < animals.length; i++) {
    (function(i) {
      this.print = function() {
        console.log('#' + i + ' ' + this.species
                    + ': ' + this.name);
      }
      this.print();
    }).call(animals[i], i);
  }
  
  
  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }
  
  module.exports = apply;
  
  var obj = {num:2};
  
  function addToThis(a){
    return this.num + a;
  }
  
  addToThis.call(obj, 3); //functionname.call(obj, functionarguments)
  //takes a function and calls it on an object.  You can pass in arguments to the function that will effect the object
  //essentially, it attaches a function to an object temporarily, runs it, and gives the result
  //executes a function in the context of the scope (object) that it's passed.
  
  var obj = {num:2};
  
  function addToThis(a){
    return this.num + a + b + c;
  }
  
  var arr = [1, 2, 3];
  addToThis.apply(obj, arr));
  
  
  arr = ["daniel", "fulu", "noidea"];
  var arrToUp = String.prototype.toUpperCase.apply(arr).split(",");
  // arrToUp = "DANIEL, FULU, NOIDEA"
  
  
  var x = ['a', 'b', 'c'];
  var y = ['d', 'e', 'f'];
  x.push.apply(x, y);
  // x = ['a', 'b', 'c', 'd', 'e', 'f']
  // y = ['d', 'e', 'f']  (remains unchanged)
  
  
  // lesser alternative to feeding arguments vis spread op to Math.max()
  var callMe(fn, ...args) {
    return fn.apply(args);
  }
  callMe(Math.max, 4, 7, 6); //7 


  // sprad operator beauty, from Angus Croll's blog
  var stats = function(...numbers) {
    for (var i=0, total = 0, len=numbers.length; i<len; i++) {
        total += numbers[i]; 
    } 
    return {
        average: total / arguments.length,
        max: Math.max(numbers); //spread array into formal params
    } 
} 
 
stats(5, 6, 8, 5); //{average: 6, max: 8}


// partial application from Angus Croll's blog
Function.prototype.curry = function() {
  if (arguments.length<1) {
    return this; //nothing to curry with - return function
  }
  var __method = this;
  var args = [].slice.apply(arguments);
    return function() {
      return __method.apply(this, args.concat([].slice.apply(arguments)));
    }
}
 
var converter = function(ratio, symbol, input) {
    return [(input*ratio).toFixed(1),symbol].join(" ");
}
 
var kilosToPounds = converter.curry(2.2,"lbs");
var milesToKilometers = converter.curry(1.62, "km");
 
kilosToPounds(4); //8.8 lbs
milesToKilometers(34); //55.1 km