# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your team lead

1. Describe the biggest difference between `.forEach` & `.map`.

.forEach and .map both iterate over each object in an array and run a function on the items within, but .map collects the values returned by the function as an array, while .forEach does not. So, use .forEach if all you want to do is loop over the items in an array, but use .map if you are trying to get an array of the same size but different data based on the items in the original array.

2. What is the difference between a function and a method?

A method is a function that exists on an object which can be called through dot notation to perform some action based on the data held by that particular object. So, a `Person` object might have a `fullName` method that concatenates the object's first and last names to return a value representing the person's full name when it is called as `person.fullName()`. Non-method functions are not attached to a specific object, so, in order for them to act on objects, those objects need to be passed into the parameters of the function `getFullName(person)`. Methods can also read any property on their object using keyword `this`, e.g. `this.firstName`.

3. What is closure?

Variables and functions defined within a limited scope (inside a function or loop) cannot be accessed outside of that scope. This allows us to reuse code because, for instance, a single variable name within a function could refer to any object that is passed as an argument to that function. Limited scopes, however, can reach outside of their scope to access variables and functions defined globally or within their parent scope (or any ancestor scope), i.e.:

    let counter=0;

    function incrementCounter {
      //inside here is a limited scope
      let counter2 = 0;
      counter ++; //counter can be accessed here because it is a more global scope
      counter2 += 2; //counter2 can be accessed here because it is defined within this scope

      function addEight() {
        //this nested function is an even more limited scope than its parent function (incrementCounter)
        //it can access global variables and functions and those within incrementCounter
        counter2 += 8;
        counter += 8;
      }

      addEight(); //even though it is defined above, it is necessary to call the function addEight, or it does nothing.
      //incrementCounter can access addEight because it is defined within incrementCounter
    }

    console.log(counter); //counter can be globally referenced. `0`
    incrementCounter();
    console.log(counter); //counter will be changed by incrementCounter `9`
    console.log(counter2); //ERROR! counter2 is defined within incrementCounter and cannot be referenced outside its scope




4. Describe the four rules of the 'this' keyword.

  a. Window/Global Object Binding - Invoked in a global scope, `this` refers to
    the window or console. (Important to remember for arrow functions, because
    `this` also refers to the window in these functions.)

  b. Implicit Binding - When used within a function called using dot notation
    `this` refers to the object that precedes the dot.

  c. New binding - When used within an object property or method, `this` refers
    to the instance of that object in which it is invoked.

  d. Explicit binding - When using `.call()` and `.apply()` methods, `this` is
    explicitly defined within the parentheses and linked to the object passed
    to the `call` or `apply` method.

5. Why do we need super() in an extended class?

`super()` calls the constructor method on the parent class, setting up the part of the object that the child class shares in common with the parent class. If you don't do this, properties that are defined by the constructor on the parent class will be inaccessible, and the object will be incomplete, responding in unpredicted ways.

## Project Set up

Follow these steps to set up and work on your project:

- [x] Create a forked copy of this project.
- [x] Add TL as collaborator on Github.
- [x] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [x] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [x] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [x] You are now ready to build this project with your preferred IDE
- [x] Implement the project on your Branch, committing changes regularly.
- [x] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [x] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [x] Add your team lead as a Reviewer on the Pull-request
- [ ] TL then will count the HW as done by  merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays.
* [x] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope.
* [x] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [x] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [x] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
