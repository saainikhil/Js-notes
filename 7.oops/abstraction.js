// Parent
// class Vehicle {
//   start() {
//     console.log("Vehicle started");
//   }
// }

// Child
// class Car extends Vehicle {
//   drive() {
//     console.log("Car is driving");
//   }
// }

// let c = new Car();
// c.start(); // inherited

// Demonstration of assignment vs comparison in `if`:
let a = 20;
// Wrong: if (a = 1) { ... } // assignment — would change `a`
// Correct: use comparison. Here we check for 20 so the block runs and `b` is defined.
if (a === 20) {
  var b = 'nikhil';
}
console.log(b); // prints 'nikhil'
console.log(a); // prints 20

