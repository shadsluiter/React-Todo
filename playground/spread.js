function add(a,b) {
  return a + b;
}

console.log(add(3,1));

var toAdd = [9,5];
console.log(add(...toAdd));


var groupA = ['shad', 'cynthia'];
var groupB = ['Cameron', 'Christy'];

var final = [3, ...groupA, ...groupB, ...groupA];

console.log(final);


var person = [ 'Andrew', 25];
var person2 = ['Shad', 47];

function sayHi(name, age) {
  console.log("Hello " + name + " you are " + age);
}

sayHi(...person);

sayHi(...person2);

var names = ['Mike', 'Ben'];
var final = ['Shad', ...names];

final.forEach(function( name) {
  console.log('Hi ' + name);
});
