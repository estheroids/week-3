/* =====================
  # Lab 1, Part 2 — Functions as Values

  Functions can be passed as values to other functions. Each exercise here builds on that theme.
===================== */

/* =====================
Instructions: Write a function that *always* returns the number 1.
===================== */

var justOne = function(number) {
  return 1;
};

console.log('justOne success:', justOne() === 1);

/* =====================
Instructions: Write a function that returns true if a number is even.
===================== */

var isEven = function(number) {
  if(number%2===0){
  return true;
}
else{
  return false;
}
};

console.log('isEven success:', isEven(2) === true && isEven(3) === false);

/* =====================
Instructions: Write a function that *always* returns false.
              Use functions "justOne" and "isEven" somehow in the definition.
===================== */

var justFalse = function(f) {
  return false;
};

console.log('justFalse success:', justFalse() === false);

/* =====================
Instructions: Write a function that takes a boolean value and returns its opposite.
===================== */

var not = function(opposite) {
  if (opposite === true){
    return false;
  }
else{
  return true;
}
};

console.log('not success:', not(true) === false);

/* =====================
Instructions: Write a function that returns true if a number is odd
              Use functions "isEven" and "not" somehow in the definition.
===================== */

var isOdd = function(number) {
  if (not(isEven()===false)){
    return true;
  }
  else{
    return false;
  }
};

console.log('isOdd success:', isOdd(4) === false);

/* =====================
Instructions: Write a function that takes a list of numbers and returns a list with only numbers above 10
===================== */

function above10(value){
  return value > 10;
}

var filterOutLessThan10 = [4,11].filter(above10);

var test = filterOutLessThan10.length === 1 && filterOutLessThan10[0] === 11;
console.log('filterOutLessThan10 success:', test);

/*console.log('filterOutLessThan10 success:', filterOutLessThan10([4, 11]) === [11]);*/

/* =====================
Stretch goal — NOT required
Instructions: Let's bring it all together. Write a function that returns only odd numbers. It takes:
              1. a list of numbers
              2. a function that takes a number and returns true or false (isOdd, let's say)
===================== */

var oddNum = [];

var filter = function(array, funct){
  for (var i=0; i<array.length; i++){
    if(funct(array[i]) === true);
    oddNum.push(array[i]);
    return oddNum;
  }
};

var test2 = filter([4, 11], isOdd).length === 1 && filter([4, 11], isOdd)[0] === 11;
console.log('filter success:', test2);


/*console.log('filter success:', filter([4, 11], isOdd) === [11]);*/
