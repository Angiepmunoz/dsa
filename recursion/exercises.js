//  Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

function power(base, exp) {
  // 2,3
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}

// console.log(power(2,3));
// console.log(power(2,4));

// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

// console.log(factorial(4));

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(arr) {
  if (arr.length === 1) return arr[0];
  return arr[0] * productOfArray(arr.slice(1));
}
// console.log(productOfArray([1,2,3]))
// console.log(productOfArray([1,2,3,10]))

// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

function recursiveRange(num) {
  if (!num) return num;
  return num + recursiveRange(num - 1);
}

// console.log(recursiveRange(6));
// console.log(recursiveRange(10));
// console.log(recursiveRange(55));

// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

function fibonacci(num) {
  if (num <= 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str) {
  if (str.length === 1) return str;
  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
  // console.log(str.slice(-1))
}

// console.log(reverse("reverse"))

// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

function isPalindrome(str) {
  if (str.length === 1) return true;
  else if (str[0] !== str[str.length - 1]) return false;
  else {
    let cutStr = str.slice(1, str.length - 1);
    return isPalindrome(cutStr);
  }
}

// console.log(isPalindrome('foobar'))// false
// console.log(isPalindrome('tacocat')) // true

// Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

function someRecursive(arr, cb) {
  if (!arr.length) return false;
  if (cb(arr[0])) return true;
  return someRecursive(arr.slice(1), cb);
}
const isOdd = (val) => val % 2 !== 0;

// console.log(someRecursive([1,2,3,4], isOdd)) // true
// console.log(someRecursive([4,6,8,9], isOdd))  // true
// console.log(someRecursive([4,6,8], isOdd)) // false

// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

function flatten(arr) {
  if (!arr.length && !Array.isArray(arr[0])) return arr;
  else if (!Array.isArray(arr[0])) {
    return arr.slice(0, 1).concat(flatten(arr.slice(1)));
  } else {
    return flatten(arr[0].concat(arr.slice(1)));
  }
}
// console.log(flatten([1, 2, 3, [4, 5] ]))
// console.log(flatten([1, [2, [3, 4], [[5]]]]))
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))

// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
  if (arr.length === 1) return [arr[0][0].toUpperCase() + arr[0].slice(1)];
  return [arr[0][0].toUpperCase() + arr[0].slice(1)].concat(
    capitalizeFirst(arr.slice(1))
  );
}
// console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']

// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum(nestedObjs) {
  let sum = 0;
  for (let key in nestedObjs) {
    const value = nestedObjs[key];
    if (typeof value === "number" && value % 2 === 0) {
      sum += value;
    } else if (typeof value === "object") {
        sum += nestedEvenSum(value);
    }
  }
  return sum;
}

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

const obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };

// console.log(nestedEvenSum(obj1));
// console.log(nestedEvenSum(obj2))

// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.