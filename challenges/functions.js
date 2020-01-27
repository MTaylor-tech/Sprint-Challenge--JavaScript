// ==== Callbacks ====

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/
function consume (a, b, cb) {
	return cb(a, b);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add (a, b) {
	return a+b;
}
function multiply (a, b) {
	return a*b;
}
function greeting (firstName, lastName) {
	return `Hello ${firstName} ${lastName}, nice to meet you!`;
}


/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!

// ==== Closures ====

// Explain in your own words why nestedfunction can access the variable internal.

/* Explanation: The variable `internal` is defined within the scope of myFunction().
   So is nestedFunction(), Therefore, internal and nestedFunction can be accessed
   within myFunction but cannot be directly accessed outside of it. A nested function
   i.e. a function defined within another function can access variables and functions
   defined within its limited scope or within the scope of its parent function.
*/

const external = "I'm outside the function"; //global scope, accessible anywhere

function myFunction() {
  //creates a limited scope. variables defined here cannot be accessed within
  //the global scope, but can be accessed by functions defined herein
  console.log(external); //okay, because external is defined in the global scope
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    //creates a further limited scope.
    console.log(internal); //okay, because internal is defined inside nestedFunction's
    //parent parent function (myFunction)
  };
  nestedFunction();
}
myFunction();
