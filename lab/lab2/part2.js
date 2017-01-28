/* =====================
# Lab 2, Part 2 — Underscore Each Function

## Introduction

Up to this point, we have used Javascript's for loop to loop through data. Underscore's _.each function provides us with an easy to read, simple way to accomplish the same goal.

## Task

Find two previous labs that use for loops. Rewrite these labs to use _.each.

## Syntax
You can see an example of how to use ._each in the underscore documentation: http://underscorejs.org/#each and in the code below.

var myArray = [1, 10, 100, 1000];

_.each(myArray, function(value, key, list) {
  console.log(value, key, list);
});
===================== */

/* week-3 lab1 part1.js
=====================
Instructions: "Write a function which counts the number of times a value occurs in an array "
Example: "countItem(['a', 'b', 'a'], 'a') should return 2"
===================== */

/* original with for-loop */


/* var countItem = function(array,value){
  var count = 0;
  for (var i=0; i < array.length; i++){
    if (value === array[i]){
      count++;
    }
  }
  return count;
};

console.log('countItem success:', countItem([1, 2, 3, 4, 5, 4, 4], 4) === 3);
*/

var countItem = function(array,value){
  return _.countBy(countItem[0])[countItem[1]];
};

console.log('countItem success:', countItem([1, 2, 3, 4, 5, 4, 4], 4) === 3);


/* week-3 lab 1 part2.js */

/* =====================
Instructions: Write a function that takes a list of numbers and returns a list with only numbers above 10
===================== */

function above10(value){
  return value > 10;
}

var filterOutLessThan10 = [4,11].filter(above10);

var test = filterOutLessThan10.length === 1 && filterOutLessThan10[0] === 11;
console.log('filterOutLessThan10 success:', test);


/* week-2 lab 2 part1 */

/* =====================

# Lab 2, Part 1 — Functions help us organize our code (and our thoughts)

## Introduction

It is common, in programming, to rewrite code so that it is easier to read and understand.
In this exercise, we start with an array and a loop. In this loop, we try to count the
different values in different ways: we add number values (e.g. 1 is worth 1, 2 is worth 2)
to string lengths (e.g. 'cat' is worth 3 and 'banana' is worth 6). We ignore all other types.

===================== */


var theArray = ['A short story.', 42, 55, ['Another story'], 23, 12, 2, 4, 5, 6, 'bar', 'foo'];
var yourSum = 0;

var sumArrayContents = function(contents){
      if (typeof contents === 'string'){
        return yourSum += contents.length;
      }
      else if (typeof contents === 'number'){
        return yourSum += contents;
      }
      else
      {
        console.log ("Not sure how to proceed with value:", contents);
      }
  };

_.each(theArray, sumArrayContents);

console.log("Success: ", yourSum === 169);
