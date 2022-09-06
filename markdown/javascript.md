---
title : JavaScript
Author :  Atamurad
intro: A JavaScript cheat list with the most important concepts, functions, methods, and more. A complete cheat list for beginners and intermediate developers.
background: "#8B7A24"
---

<div className='kotak'> 

Getting started 
------------

<div className='grid-box'>

<div className='wrapper'>  

### Introduction

<div className='section'>  

JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. 

</div>

</div>

<div className='wrapper'>  

### Console

<div className='section'>  

```javascript
// => Hello world!
console.log('Hello world!');

// => Hello QuickRef.ME
console.warn('hello %s', 'Cheat List');

// Prints error message to stderr
console.error(new Error('Oops!'));
```

</div>

</div>

<div className='wrapper'>  

### Numbers

<div className='section'>  

```javascript
let amount = 6;
let price = 4.99;

// checks if value is Not a Number
console.log(isNaN(500))  // false
console.log(isNaN(1,500)) // true
```
</div>

</div>

<div className='wrapper'>  

### Variables

<div className='section'>  

```javascript
let x = null;
let name = "Tammy";
const found = false;

// => Tammy, false, null
console.log(name, found, x);

var a;
console.log(a); // => undefined
```
</div>

</div>


<div className='wrapper'>  


### Strings

<div className='section'>  

```javascript
let dogName = 'Pupsik';
let dogName2 = "Pancho";

// number of letters dogName has
console.log(dogName.length) // 6

```
</div>

</div>

<div className='wrapper'>  


### Arithmetic Operators

<div className='section'>  

```javascript
5 + 5 = 10     // Addition
10 - 5 = 5     // Subtraction
5 * 10 = 50    // Multiplication
10 / 5 = 2     // Division
10 % 5 = 0     // Modulo
```
</div>

</div>

<div className='wrapper'>  

### Comments

<div className='section'>  

```javascript
// This line will denote a comment

/*  
The below configuration must be 
changed before deployment. 
*/

```

</div>

</div>

<div className='wrapper'>  


### Assignment Operators

<div className='section'>  

```javascript
let number = 100;

// Both statements will add 10
number = number + 10;
number += 10;

console.log(number); 
// => 120
```

</div>

</div>

<div className='wrapper'>  


### String Interpolation

<div className='section'>  

```javascript
let age = 7;

// String concatenation
'Hamza is ' + age + ' years old.';

// String interpolation
`Hamza is ${age} years old.`;

`Hamza is ${age+age} years old.`;
```

</div>

</div>

<div className='wrapper'>  

### let Keyword

<div className='section'>  

```javascript
let count; 
console.log(count); // => undefined
count = 10;
console.log(count); // => 10
```

</div>

</div>

<div className='wrapper'>  

### const Keyword

<div className='section'>  

```javascript
const numberOfColumns = 4;

// TypeError: Assignment to constant...
numberOfColumns = 8;
```

</div>

</div>

</div>


JavaScript Conditionals 
------------
<div className='grid-box'>

<div className='wrapper'>  

### if Statement

<div className='section'>  

```javascript
const isMailSent = true;

if (isMailSent) {
  console.log('Mail sent to recipient');
}
```

</div>

</div>

<div className='wrapper'>  

### Ternary Operator

<div className='section'>  

```javascript

const age = 26;
const x = age >= 21 ? "Beer" : "Juice";
console.log(x); // "Beer"

// && 

let name = 'John';

// without :(else) 
 name ==='John' && console.log(name);

 // with :(else) 
 name ==='John' ? console.log(name) 
 : console.log('Nothing');

```

</div>

</div>

<div className='wrapper row-span2'>  

### Operators

<div className='section'>  

#### Logical Operator ||

```javascript
true || false;       // true
10 > 5 || 10 > 20;   // true
false || false;      // false
10 > 100 || 10 > 20; // false
```
#### Logical Operator &&
```javascript
true && true;        // true
1 > 2 && 2 > 1;      // false
true && false;       // false
4 === 4 && 3 > 1;    // true
```
#### Comparison Operators
```javascript
1 > 3                // false
3 > 1                // true
250 >= 250           // true
1 === 1              // true
1 === 2              // false
1 === '1'            // false
```
#### Logical Operator !
```javascript
let lateToWork = true;
let oppositeValue = !lateToWork;

// => false
console.log(oppositeValue); 
```
#### Nullish coalescing operator ??
```javascript
null ?? 'I win';           //  'I win'
undefined ?? 'Me too';     //  'Me too'

false ?? 'I lose'          //  false
0 ?? 'I lose again'        //  0
'' ?? 'Damn it'            //  ''
```


</div>

</div>


<div className='wrapper'>  

### else if

<div className='section'>  

```javascript
const size = 10;

if (size > 100) {
  console.log('Big');
} else if (size > 20) {
  console.log('Medium');
} else if (size > 4) {
  console.log('Small');
} else {
  console.log('Tiny');
}
// Print: Small
```


</div>

</div>


<div className='wrapper'>  

### switch Statement

<div className='section'>  

```javascript
const food = 'salad';

switch (food) {
  case 'oyster':
    console.log('The taste of the sea');
    break;
  case 'pizza':
    console.log('A delicious pie');
    break;
  default:
    console.log('Enjoy your meal');
}
```


</div>

</div>

<div className='wrapper'>  

### == vs ===

<div className='section'>  

```javascript
0 == false   // true
0 === false  // false, different type
1 == "1"     // true,  automatic type conversion 
1 === "1"    // false, different type
null == undefined  // true
null === undefined // false
'0' == false       // true
'0' === false      // false
```
The `==` just check the value, `===` check both the value and the type.

</div>

</div>

</div>



JavaScript Functions 
------------

<div className='grid-box'>  

<div className='wrapper'>  

### Functions

<div className='section'>  

```javascript
// Defining the function:
function sum(num1, num2) {
  return num1 + num2;
}

// Calling the function:
sum(3, 6); // 9
```

</div>

</div>


<div className='wrapper'>  

### Anonymous Functions

<div className='section'> 

```javascript
// Named function
function rocketToMars() {
  return 'BOOM!';
}

// Anonymous function
const rocketToMars = function() {
  return 'BOOM!';
}
```

</div>

</div>

<div className='wrapper row-span2'>  


### Arrow Functions (ES6)

<div className='section'> 

#### With two arguments 

```javascript
const sum = (param1, param2) => { 
  return param1 + param2; 
}; 
console.log(sum(2,5)); // => 7 
```
#### With no arguments 
```javascript
const printHello = () => { 
  console.log('hello'); 
}; 
printHello(); // => hello
```
#### With a single argument 
```javascript
const checkWeight = weight => { 
  console.log(`Weight : ${weight}`); 
}; 
checkWeight(25); // => Weight : 25 
```
#### Concise arrow functions
```javascript
const multiply = (a, b) => a * b; 
// => 60 
console.log(multiply(2, 30)); 

```

</div>

</div>

<div className='wrapper'>  

### return Keyword

<div className='section'> 

```javascript
// With return
function sum(num1, num2) {
  return num1 + num2;
}

// The function doesn't output the sum
function sum(num1, num2) {
  num1 + num2;
}
```

</div>

</div>

<div className='wrapper'>  

### Calling Functions

<div className='section'> 

```javascript
// Defining the function
function sum(num1, num2) {
  return num1 + num2;
}

// Calling the function
sum(2, 4); // 6
```

</div>

</div>

<div className='wrapper'>  

### Function Expressions

<div className='section'> 

```javascript
const dog = function() {
  return 'Woof!';
}
```

</div>

</div>

<div className='wrapper'>  

### Function Parameters

<div className='section'> 

```javascript
// The parameter is name
function sayHello(name) {
  return `Hello, ${name}!`;
}
```

</div>

</div>


<div className='wrapper'>  

### Function Declaration

<div className='section'> 

```javascript
function add(num1, num2) {
  return num1 + num2;
}
```

</div>

</div>


</div>


JavaScript Scope 
------------

<div className='grid-box'>  

<div className='wrapper'> 

### Scope


<div className='section'> 

```javascript
function myFunction() {
  
  var pizzaName = "Margarita";
  // Code here can use pizzaName
  
}

// Code here can't use pizzaName
```

</div>

</div>

<div className='wrapper'> 

### Block Scoped Variables

<div className='section'> 

```javascript
const isLoggedIn = true;

if (isLoggedIn == true) {
  const statusMessage = 'Logged in.';
}

// Uncaught ReferenceError...
console.log(statusMessage);

```

</div>

</div>

<div className='wrapper'> 

### Global Variables

<div className='section'> 

```javascript
// Variable declared globally
const color = 'blue';

function printColor() {
  console.log(color);
}

printColor(); // => blue
```

</div>

</div>

<div className='wrapper'> 

### let vs var

<div className='section'> 

```javascript
for (let i = 0; i < 3; i++) {
  // This is the Max Scope for 'let'
  // i accessible ✔️
}
// i not accessible ❌

```
---
```javascript
for (var i = 0; i < 3; i++) {
  // i accessible ✔️
}
// i accessible ✔️
```
`var` is scoped to the nearest function block, and `let` is scoped to the nearest enclosing block.

</div>

</div>

<div className='wrapper'> 

### Loops with closures


<div className='section'> 

```javascript
// Prints 3 thrice, not what we meant.
for (var i = 0; i < 3; i++) {
  setTimeout(_ => console.log(i), 10);
}
```
---
```javascript{.wrap}
// Prints 0, 1 and 2, as expected.
for (let j = 0; j < 3; j++) { 
  setTimeout(_ => console.log(j), 10);
}
```
The variable has its own copy using `let`, and the variable has shared copy using `var`.

</div>

</div>

<div className='wrapper'> 

### this keyword

<div className='section'> 

```javascript



console.log(this===window) // true

const name ='John';

const person = {
  name :'Kate',
  sayHello : function(){
    console.log('Hello ' + this.name ) 
    //  output :Hello Kate
  }
};
```
---
```javascript

const student = {
  name :'Kate',
  sayHello : function(){
    console.log('Hello ' + name ) 
    // output: Hello John
  };
};
```

</div>

</div>

</div>



JavaScript Arrays  {.cols-3}
------------

<div className='grid-box'> 

<div className='wrapper'> 

### Arrays

<div className='section'> 

```javascript
const fruits = ["apple", "orange", "banana"];

// Different data types
const data = [1, 'chicken', false];
```
</div>

</div>

<div className='wrapper'> 

### Property .length

<div className='section'> 

```javascript
const numbers = [1, 2, 3, 4];

numbers.length // 4
```
</div>

</div>


<div className='wrapper'> 

### Index

<div className='section'> 

```javascript
// Accessing an array element
const myArray = [100, 200, 300];

console.log(myArray[0]); // 100
console.log(myArray[1]); // 200
```

</div>

</div>

<div className='wrapper'> 

### Method .push()

<div className='section'> 

```javascript
// Adding a single element:
const cart = ['apple', 'orange'];
cart.push('pear'); 

// Adding multiple elements:
const numbers = [1, 2];
numbers.push(3, 4, 5);
```
Add items to the end and returns the new array length.

</div>

</div>

<div className='wrapper'> 

### Method .pop()

<div className='section'> 

```javascript
const fruits = ["apple", "orange", "banana"];

const fruit = fruits.pop(); // 'banana'
console.log(fruits); // ["apple", "orange"]
```
Remove an item from the end and returns the removed item.

</div>

</div>

<div className='wrapper'> 

### Method .shift()

<div className='section'> 

```javascript
let cats = ['Bob', 'Willy', 'Mini'];

cats.shift(); // ['Willy', 'Mini']
```
Remove an item from the beginning and returns the removed item.

</div>

</div>

<div className='wrapper'> 

### Method .unshift()

<div className='section'> 

```javascript
let cats = ['Bob'];

// => ['Willy', 'Bob']
cats.unshift('Willy');

// => ['Puff', 'George', 'Willy', 'Bob']
cats.unshift('Puff', 'George');
```
Add items to the beginning and returns the new array length.


</div>

</div>

<div className='wrapper'> 

### Method .concat()

<div className='section'> 

```javascript
const numbers = [3, 2, 1]
const newFirstNumber = 4
    
// => [ 4, 3, 2, 1 ]
[newFirstNumber].concat(numbers)
    
// => [ 3, 2, 1, 4 ]
numbers.concat(newFirstNumber)
```
if you want to avoid mutating your original array, you can use concat.

</div>

</div>

</div>

JavaScript Loops  {.cols-3}
------------
<div className='grid-box'> 

<div className='wrapper'> 

### While Loop

<div className='section'> 

```javascript
while (condition) {
  // code block to be executed
}

let i = 0;
while (i < 5) {        
  console.log(i);
  i++;
}
```


</div>

</div>

<div className='wrapper'> 

### Reverse Loop


<div className='section'> 

```javascript
const fruits = ["apple", "orange", "banana"];

for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(`${i}. ${fruits[i]}`);
}

// => 2. banana
// => 1. orange
// => 0. apple
```

</div>

</div>

<div className='wrapper'> 

### Do…While Statement

<div className='section'> 

```javascript
x = 0
i = 0

do {
  x = x + i;
  console.log(x)
  i++;
} while (i < 5);
// => 0 1 3 6 10
```

</div>

</div>


<div className='wrapper'> 

### For Loop

<div className='section'> 

```javascript
for (let i = 0; i < 4; i += 1) {
  console.log(i);
};

// => 0, 1, 2, 3
```

</div>

</div>

<div className='wrapper'> 

### Looping Through Arrays

<div className='section'> 

```javascript
for (let i = 0; i < array.length; i++){
  console.log(array[i]);
}

// => Every item in the array
```

</div>

</div>

<div className='wrapper'> 

### Break

<div className='section'> 

```javascript
for (let i = 0; i < 99; i += 1) {
  if (i > 5) {
     break;
  }
  console.log(i)
}
// => 0 1 2 3 4 5
```

</div>

</div>

<div className='wrapper'> 

### Continue

<div className='section'> 

```javascript
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
```

</div>

</div>

<div className='wrapper'> 

### Nested

<div className='section'> 

```javascript
for (let i = 0; i < 2; i += 1) {
  for (let j = 0; j < 3; j += 1) {
    console.log(`${i}-${j}`);
  }
}
```

</div>

</div>

<div className='wrapper'> 

### for...in loop

<div className='section'> 

```javascript
const fruits = ["apple", "orange", "banana"];

for (let index in fruits) {
  console.log(index);
}
// => 0
// => 1
// => 2
```

</div>

</div>

<div className='wrapper'> 

### for...of loop

<div className='section'> 

```javascript
const fruits = ["apple", "orange", "banana"];

for (let fruit of fruits) {
  console.log(fruit);
}
// => apple
// => orange
// => banana
```

</div>

</div>
</div>

JavaScript Iterators {.cols-2}
------------

<div className='grid-box grid-col2'> 

<div className='wrapper'> 

### Functions Assigned to Variables

<div className='section'> 

```javascript
let plusFive = (number) => {
  return number + 5;  
};
// f is assigned the value of plusFive
let f = plusFive;

plusFive(3); // 8
// Since f has a function value, it can be invoked. 
f(9); // 14

```

</div>
</div>

<div className='wrapper'> 

### Callback Functions

<div className='section'> 

```javascript
const isEven = (n) => {
  return n % 2 == 0;
}

let printMsg = (evenFunc, num) => {
  const isNumEven = evenFunc(num);
  console.log(`${num} is an even number: ${isNumEven}.`)
}

// Pass in isEven as the callback function
printMsg(isEven, 4); 
// => The number 4 is an even number: True.
```

</div>
</div>


<div className='wrapper'> 

### Array Method .reduce()

<div className='section'> 

```javascript
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((accumulator, curVal) => {  
  return accumulator + curVal;
});

console.log(sum); // 10
```
</div>
</div>

<div className='wrapper'> 

### Array Method .map()

<div className='section'> 

```javascript
const members = ["Taylor", "Donald", "Don", "Natasha", "Bobby"];

const announcements = members.map((member) => {
  return member + " joined the contest.";
});

console.log(announcements);
```

</div>
</div>

<div className='wrapper'> 

### Array Method .forEach()

<div className='section'> 

```javascript
const numbers = [28, 77, 45, 99, 27];

numbers.forEach(number => {  
  console.log(number);
}); 
```
</div>
</div>

<div className='wrapper'> 

### Array Method .filter()

<div className='section'> 

```javascript
const randomNumbers = [4, 11, 42, 14, 39];
const filteredArray = randomNumbers.filter(n => {  
  return n > 5;
});
```

</div>
</div>
</div>

JavaScript Objects {.cols-2}
------------

<div className='grid-box'>

<div className='wrapper'> 

### Accessing Properties

<div className='section'> 


```javascript
const apple = { 
  color: 'Green',
  price: { bulk: '$3/kg', smallQty: '$4/kg' }
};
console.log(apple.color); // => Green
console.log(apple.price.bulk); // => $3/kg
```
</div>
</div>

<div className='wrapper'> 

### Naming Properties

<div className='section'> 

```javascript
// Example of invalid key names
const trainSchedule = {
  // Invalid because of the space between words.
  platform num: 10, 
  // Expressions cannot be keys.
  40 - 10 + 2: 30,
  // A + sign is invalid unless it is enclosed in quotations.
  +compartment: 'C'
}
```
</div>
</div>

<div className='wrapper'> 

### Non-existent properties

<div className='section'> 


```javascript
const classElection = {
  date: 'January 12'
};

console.log(classElection.place); // undefined
```

</div>
</div>


<div className='wrapper'> 

### Mutable {.row-span-2}

<div className='section row-span2 '> 

```javascript
const student = {
  name: 'Sheldon',
  score: 100,
  grade: 'A',
}

console.log(student)
// { name: 'Sheldon', score: 100, grade: 'A' }

delete student.score
student.grade = 'F'
console.log(student)
// { name: 'Sheldon', grade: 'F' }

student = {}
// TypeError: Assignment to constant variable.
```

</div>
</div>


<div className='wrapper'> 

### Assignment shorthand syntax

<div className='section '> 

```javascript
const person = {
  name: 'Tom',
  age: '22',
};
const {name, age} = person;
console.log(name); // 'Tom'
console.log(age);  // '22'
```
</div>
</div>


<div className='wrapper'> 

### Delete operator

<div className='section '> 

```javascript
const person = {
  firstName: "Matilda",
  age: 27,
  hobby: "knitting",
  goal: "learning JavaScript"
};

delete person.hobby; // or delete person[hobby];

console.log(person);
/*
{
  firstName: "Matilda"
  age: 27
  goal: "learning JavaScript"
}
*/
	
```

</div>
</div>


<div className='wrapper'> 

### Objects as arguments

<div className='section '> 

```javascript
const origNum = 8;
const origObj = {color: 'blue'};

const changeItUp = (num, obj) => {
  num = 7;
  obj.color = 'red';
};

changeItUp(origNum, origObj);

// Will output 8 since integers are passed by value.
console.log(origNum);

// Will output 'red' since objects are passed 
// by reference and are therefore mutable.
console.log(origObj.color);
```

</div>
</div>

<div className='wrapper'> 

### Shorthand object creation

<div className='section '> 

```javascript
const activity = 'Surfing';
const beach = { activity };
console.log(beach); // { activity: 'Surfing' }
```

</div>
</div>

<div className='wrapper'> 

### this Keyword

<div className='section '> 

```javascript
const cat = {
  name: 'Pipey',
  age: 8,
  whatName() {
    return this.name  
  }
};
console.log(cat.whatName()); // => Pipey
```

</div>
</div>

<div className='wrapper'> 

### Factory functions

<div className='section '> 

```javascript
// A factory function that accepts 'name', 
// 'age', and 'breed' parameters to return 
// a customized dog object. 
const dogFactory = (name, age, breed) => {
  return {
    name: name,
    age: age,
    breed: breed,
    bark() {
      console.log('Woof!');  
    }
  };
};

```
</div>
</div>


<div className='wrapper'> 

### Methods

<div className='section '> 

```javascript
const engine = {
  // method shorthand, with one argument
  start(adverb) {
    console.log(`The engine starts up ${adverb}...`);
  },  
  // anonymous arrow function expression with no arguments
  sputter: () => {
    console.log('The engine sputters...');
  },
};

engine.start('noisily');
engine.sputter();
```

</div>
</div>

<div className='wrapper'> 

### Getters and setters

<div className='section '> 


```javascript
const myCat = {
  _name: 'Dottie',
  get name() {
    return this._name;  
  },
  set name(newName) {
    this._name = newName;  
  }
};

// Reference invokes the getter
console.log(myCat.name);

// Assignment invokes the setter
myCat.name = 'Yankee';
```
</div>
</div>
</div>

JavaScript Classes 
------------

<div className='grid-box'>

<div className='wrapper'> 

### Static Methods

<div className='section '> 

```javascript
class Dog {
  constructor(name) {
    this._name = name;  
  }
  
  introduce() { 
    console.log('This is ' + this._name + ' !');  
  }
  
  // A static method
  static bark() {
    console.log('Woof!');  
  }
}

const myDog = new Dog('Buster');
myDog.introduce();

// Calling the static method
Dog.bark();
```

</div>
</div>

<div className='wrapper'> 

### Class

<div className='section '> 


```javascript

class Song {
  constructor() {
    this.title;
    this.author;
  }
  
  play() {
    console.log('Song playing!');
  }
}

const mySong = new Song();
mySong.play();
```
</div>
</div>

<div className='wrapper'> 

### Class Constructor

<div className='section '> 


```javascript
class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
  }
}

const mySong = new Song('Bohemian Rhapsody', 'Queen');
console.log(mySong.title);
```

</div>
</div>

<div className='wrapper'> 

### Class Methods

<div className='section '> 

```javascript
class Song {
  play() {
    console.log('Playing!');
  }
  
  stop() {
    console.log('Stopping!');
  }
}
```

</div>
</div>

<div className='wrapper'> 


### extends

<div className='section '> 

```javascript
// Parent class
class Media {
  constructor(info) {
    this.publishDate = info.publishDate;
    this.name = info.name;
  }
}

// Child class
class Song extends Media {
  constructor(songData) {
    super(songData);
    this.artist = songData.artist;
  }
}

const mySong = new Song({ 
  artist: 'Queen', 
  name: 'Bohemian Rhapsody', 
  publishDate: 1975
});
```

</div>
</div>
</div>


JavaScript Modules {.cols-2}
------------

<div className ='grid-box grid-col2'>

<div className='wrapper'> 

### Export 

<div className='section '> 

```javascript
// myMath.js

// Default export
export default function add(x,y){
    return x + y
}

// Normal export
export function subtract(x,y){
    return x - y
}

// Multiple exports
function multiply(x,y){
    return x * y
}
function duplicate(x){
    return x * 2
}
export {
    multiply,
    duplicate
}
```

</div>
</div>

<div className='wrapper'> 

### Import 

<div className='section '> 


```javascript
// main.js
import add, { subtract, multiply, duplicate } from './myMath.js';

console.log(add(6, 2)); // 8 
console.log(subtract(6, 2)) // 4
console.log(multiply(6, 2)); // 12
console.log(duplicate(5)) // 10

// index.html
<script type="module" src="main.js"></script>
```

</div>
</div>

<div className='wrapper'> 

### Export Module

<div className='section '> 

```javascript
// myMath.js

function add(x,y){
    return x + y
}
function subtract(x,y){
    return x - y
}
function multiply(x,y){
    return x * y
}
function duplicate(x){
    return x * 2
}

// Multiple exports in node.js
module.exports = {
    add,
    subtract,
    multiply,
    duplicate
}
```

</div>
</div>


<div className='wrapper'> 

### Require Module

<div className='section '> 

```javascript
// main.js
const myMath = require('./myMath.js')

console.log(myMath.add(6, 2)); // 8 
console.log(myMath.subtract(6, 2)) // 4
console.log(myMath.multiply(6, 2)); // 12
console.log(myMath.duplicate(5)) // 10
```


</div>
</div>
</div>

JavaScript Promises {.cols-2}
------------

<div className ='grid-box grid-col2'>

<div className='wrapper'> 

### Promise states 

<div className='section row-span2'> 

```javascript
const promise = new Promise((resolve, reject) => {
  const res = true;
  // An asynchronous operation.
  if (res) {
    resolve('Resolved!');
  }
  else {
    reject(Error('Error'));
  }
});

promise.then((res) => console.log(res), (err) => console.error(err));
```

</div>
</div>

<div className='wrapper'> 

### Executor function

<div className='section'> 

```javascript
const executorFn = (resolve, reject) => {
  resolve('Resolved!');
};

const promise = new Promise(executorFn);
```
</div>
</div>

<div className='wrapper'> 

### setTimeout()

<div className='section'> 

```javascript
const loginAlert = () =>{
  console.log('Login');
};

setTimeout(loginAlert, 6000);
```

</div>
</div>

<div className='wrapper'> 

### .then() method

<div className='section'> 


```javascript
const promise = new Promise((resolve, reject) => {    
  setTimeout(() => {
    resolve('Result');
  }, 200);
});

promise.then((res) => {
  console.log(res);
}, (err) => {
  console.error(err);
});
```


</div>
</div>

<div className='wrapper'> 

### .catch() method

<div className='section'> 

```javascript
const promise = new Promise((resolve, reject) => {  
  setTimeout(() => {
    reject(Error('Promise Rejected Unconditionally.'));
  }, 1000);
});

promise.then((res) => {
  console.log(value);
});

promise.catch((err) => {
  console.error(err);
});
```

</div>
</div>

<div className='wrapper'> 

### Promise.all()

<div className='section'> 

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 300);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 200);
});

Promise.all([promise1, promise2]).then((res) => {
  console.log(res[0]);
  console.log(res[1]);
});
```

</div>
</div>

<div className='wrapper'> 

### Avoiding nested Promise and .then()

<div className='section'> 

```javascript
const promise = new Promise((resolve, reject) => {  
  setTimeout(() => {
    resolve('*');
  }, 1000);
});

const twoStars = (star) => {  
  return (star + star);
};

const oneDot = (star) => {  
  return (star + '.');
};

const print = (val) => {
  console.log(val);
};

// Chaining them all together
promise.then(twoStars).then(oneDot).then(print);
```

</div>
</div>

<div className='wrapper'> 

### Creating

<div className='section'> 

```javascript
const executorFn = (resolve, reject) => {
  console.log('The executor function of the promise!');
};

const promise = new Promise(executorFn);
```

### Chaining multiple .then()

```javascript
const promise = new Promise(resolve => setTimeout(() => resolve('dAlan'), 100));

promise.then(res => {
  return res === 'Alan' ? Promise.resolve('Hey Alan!') : Promise.reject('Who are you?')
}).then((res) => {
  console.log(res)
}, (err) => {
  console.error(err)
});
```

</div>
</div>
</div>


JavaScript Async-Await {.cols-2}
------------

<div className ='grid-box grid-col2'>

<div className='wrapper'> 

### Asynchronous

<div className='section'> 

```javascript
function helloWorld() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello World!');
    }, 2000);
  });
}

const msg = async function() { //Async Function Expression
  const msg = await helloWorld();
  console.log('Message:', msg);
}

const msg1 = async () => { //Async Arrow Function
  const msg = await helloWorld();
  console.log('Message:', msg);
}

msg(); // Message: Hello World! <-- after 2 seconds
msg1(); // Message: Hello World! <-- after 2 seconds
```

</div>
</div>

<div className='wrapper'> 

### Resolving Promises

<div className='section'> 


```javascript
let pro1 = Promise.resolve(5);
let pro2 = 44;
let pro3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([pro1, pro2, pro3]).then(function(values) {
  console.log(values);
});
// expected => Array [5, 44, "foo"]
```

</div>
</div>

<div className='wrapper'> 

### Async Await Promises

<div className='section'> 


```javascript
function helloWorld() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello World!');
    }, 2000);
  });
}

async function msg() {
  const msg = await helloWorld();
  console.log('Message:', msg);
}

msg(); // Message: Hello World! <-- after 2 seconds
```

</div>
</div>


<div className='wrapper'> 

### Error Handling

<div className='section'> 

```javascript
let json = '{ "age": 30 }'; // incomplete data

try {
  let user = JSON.parse(json); // <-- no errors
  console.log( user.name ); // no name!
} catch (e) {
  console.error( "Invalid JSON data!" );
}
```

</div>
</div>


<div className='wrapper'> 

### Aysnc await operator

<div className='section'> 

```javascript
function helloWorld() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello World!');
    }, 2000);
  });
}

async function msg() {
  const msg = await helloWorld();
  console.log('Message:', msg);
}

msg(); // Message: Hello World! <-- after 2 seconds
```

</div>
</div>
</div>


JavaScript Requests {.cols-3}
------------

<div className ='grid-box'>

<div className='wrapper'> 

### JSON 

<div className='section'> 


```json
const jsonObj = {
  "name": "Rick",
  "id": "11A",
  "level": 4  
};
```
Also see: [JSON cheatsheet](/json)

</div>
</div>

<div className='wrapper'> 

### XMLHttpRequest

<div className='section'> 

```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'mysite.com/getjson');
```
`XMLHttpRequest` is a browser-level API that enables the client to script data transfers via JavaScript, NOT part of the JavaScript language.

</div>
</div>

<div className='wrapper'> 

### GET

<div className='section'> 

```javascript
const req = new XMLHttpRequest();
req.responseType = 'json';
req.open('GET', '/getdata?id=65');
req.onload = () => {
  console.log(xhr.response);
};

req.send();
```

</div>
</div>

<div className='wrapper'> 

### POST {.row-span-2}


<div className='section row-span2'> 

```javascript
const data = {
  fish: 'Salmon',
  weight: '1.5 KG',
  units: 5
};
const xhr = new XMLHttpRequest();
xhr.open('POST', '/inventory/add');
xhr.responseType = 'json';
xhr.send(JSON.stringify(data));

xhr.onload = () => {
  console.log(xhr.response);
};
```

</div>
</div>

<div className='wrapper'> 

### fetch api {.row-span-2}

<div className='section row-span2'> 

```javascript
fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
    },
    body: data
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message)
  })
}
```

</div>
</div>

<div className='wrapper'> 

### JSON Formatted

<div className='section '> 

```javascript
fetch('url-that-returns-JSON')
.then(response => response.json())
.then(jsonResponse => {
  console.log(jsonResponse);
});
```

</div>
</div>

<div className='wrapper'> 

### promise url parameter fetch api

<div className='section '> 

```javascript
fetch('url')
.then(
  response  => {
    console.log(response);
  },
 rejection => {
    console.error(rejection.message);
);
```

</div>
</div>

<div className='wrapper'> 

### Fetch API Function

<div className='section '> 

```javascript
fetch('https://api-xxx.com/endpoint', {
  method: 'POST',
 body: JSON.stringify({id: "200"})
}).then(response => {
  if(response.ok){
	  return response.json();  
  }
	throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => {
  console.log(jsonResponse);
})
```

</div>
</div>

<div className='wrapper'> 

### async await syntax {.col-span-2}

<div className='section col-span2 '> 

```javascript
const getSuggestions = async () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  try{
const response = await fetch(endpoint, {cache: 'no-cache'});
    if(response.ok){
      const jsonResponse = await response.json()
    }
  }
  catch(error){
    console.log(error)
  }
}
```

</div>
</div>
</div>

</div>
