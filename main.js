

// don't forget to push it to github


/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
my.pop();
my.pop();
my.reverse();
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

my.shift();
my.pop();
console.log(my.slice(zero)); // ["Elham", "Mazero"]

my.push("Elzero")
my.reverse()
my.pop();
my.pop();
console.log(my); // "Elzero"

console.log(my.join().slice(++counter , counter+counter)); // "rO"
