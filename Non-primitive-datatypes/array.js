// ARRAY 
// What is an array?
// In JavaScript, an array is an ordered list of values. It can store multiple values in a single variable.
// Each value, known as an element, is assigned a numeric position in the array called its index.
// The indexing starts at 0, so the first element is at position 0, the second at position 1, and so on.
// Arrays can hold any type of data-such as numbers, strings, objects or even other arrays-making them a flexible and essential part of JavaScript programming.


// instead of creating seperate variables like,
let car1 = 'tata';
let car2 = 'benz';
let car3 = 'bmw';

// we can store all values inside single array
let cars = ['tata', 'benz', 'bmw'];
console.log(cars);

// why are are used because they store multiple values together, they reduce code repetition,
// easy to organize related information in realworld applications.


// Syntax of an arrays:  
let arrayname = ['value1', 'value2', 'value3'];
// example: 
let fruitscart = ['apple','banana','orange'];

// Breakdown of above Syntax
// let                 = variable declarattion
// fruitscart          = name of array variavle 
// []                  = array brackets
// apple,banana,orange = element    

// Index in array:- Array use index numbers, and index starts from 0.
// in above code:- apple->0,  banana->1,  orange->2.

// creating empty array: 
let array = [];
console.log(array); //[]

// creaing array and initializing with values: 
let arraynumbers = [1,2,3,4,5];
console.log(arraynumbers);  // [1,2,3,4,5]  //index = 1->0, 2->1, 3->2, 4->3, 5->4.

// Accessing array elements:
let movies = ['dune','avengers','dragon']; 
// To access the above array: 
console.log(movies);  //[ 'dune', 'avengers', 'dragon' ]
// To access the above array individually:
console.log(movies[0]); //dune
console.log(movies[1]); //avengers
console.log(movies[2]); //dragon
// To access only first element:
let first_movie = movies[0];
console.log('first movie: '+first_movie); //first movie: dune
//TO access the last element
let last_movie = movies[movies.length-1];
console.log('last movie: ' +last_movie); //last movie: dragon 
//length-1 means, total length is 3, so 3-1 is 2, index of 2 is dragon
//lenth-2 is 3-1, so the output is avengers

// changing array element: 
let movies1 = ['dune','avengers','dragon'];
movies1[1] = 'spirit';
console.log(movies1);  // ['dune', 'spirit', 'dragon']

// checking array length:
let movies2 = ['dune','avengers','dragon'];
console.log(movies2.length); //3

let numbers = [1,2,3,4,5];
console.log(numbers.length); //5


//Adding elements using push()
//Definition:- push() adds elements to the END of an array
//syntax: arrayName.push(value)
let colors = ['red', 'yellow', 'blue'];
colors.push('pink');
console.log(colors);   //[ 'red', 'yellow', 'blue', 'pink' ]

//Removing element using pop()
//defination:- pop() removes Last element
let flowers = ['rose', 'sunflower', 'jasmine'];
flowers.pop();
console.log(flowers); //[ 'rose', 'sunflower' ]

//Adding element using unshift()
//defination:- adds elemets at the FIRST 
//syntax: arrayname.unshift(value)
let mobiles = ['vivo','redmi','samsung'];
mobiles.unshift('apple');
console.log(mobiles); //[ 'apple', 'vivo', 'redmi', 'samsung' ]

//removing element using shift()
//defination: shift() removes the FIRST element
let ages = [25,32,56,78,91];
ages.shift();
console.log(ages);  //[ 32, 56, 78, 91 ]

//Slice method
//def:-  slice() copies part of an array and doesn't change the original array
//syntax:- arrayname.slice(start, end)
let jersey = [33,7,10,18,45,99];
let result = jersey.slice(1,4);
console.log(result);  //[ 7, 10, 18 ]
// it print 7, 10, 18  because slice method sliced the array from index  1 to 3. 
// because (1, 4) deosn't include the end index, so it stops before index 4


//splice method
//def:- Splice() can add, remove and replace elements. oroginal array changes.
//syntax: arrayName.splice(start, deleteCount, item1, item2)

//remove element
// Parameters
// Parameter    = Meaning
// start	    = Index where changes begin
// deleteCount	= How many elements to remove
// item1...     = Optional items to insert
let cricketers = ['sachin','dhoni','virat','rohit','hardhik'];
cricketers.splice(1, 2);
console.log(cricketers);  //[ 'sachin', 'rohit', 'hardhik' ]
//splice(1, 2) here 1 -> starts at index  1 
// 2-> indicates how many elemnts should remove 
// so index one contains dhoni, from dhoni to 2 elements means dhoni and virat
// final array becomes ['sachin', 'rohit', 'hardhik']

// Add element
let cart = ['pencil','book','box'];
cart.splice(2,0, 'bottle');
console.log(cart); // [ 'pencil', 'book', 'bottle', 'box' ]
//To add element set deletecount to 0
//here 2 -> starts at index 2, 0 means remove 0 items, and add bottle
//so index becomes [ 'pencil', 'book', 'bottle', 'box' ]

//Replace element
let players = ['hardhik','samson','dube','gaikwad','nkr'];
players.splice(0,1, 'jadeja');
console.log(players); //[ 'jadeja', 'samson', 'dube', 'gaikwad', 'nkr' ]
// here 0-> starts at index 0
// to replace element set deletecount to how many elements you want to replace
// last give how many elements you want to add.
// so the index becomes [ 'jadeja', 'samson', 'dube', 'gaikwad', 'nkr' ]


















