                /* FREQUENCY COUNTERS */

// Write a function called same, which accepts two arrays. The func should return true if every value in the array has it's corresponding value squared in the second array. The freq of values most be the same

// console.log(same([1,2,3], [4,1,9]),"expected: true");
// console.log(same([1,2,3], [1,9]),"expected: false");
// console.log(same([1,2,1], [4,4,9]),"expected: false");

function same(array, squaredArray){

  // if(array.length !== squaredArray.length) return false;
  let i = 0;
  let j = 0;
  while(i < array.length){
    let numSq = Math.pow(array[i],2);
    if(numSq !== squaredArray[j] && j !== squaredArray.length){
      j++;
    }else if(numSq === squaredArray[j]) {
      squaredArray.splice(j,1);
      i++;
      j = 0;
    }else{
      return false
    }
  }
  return true;
};

// using frequency 
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another.
function checkForAnagrams(stringOne, stringTwo){
  const characterCount = {};

  for(let char of stringOne){ //o(n)
    const char = stringOne[i]

    characterCount[char] ? characterCount[char] +=1 : characterCount[char] = 1;
  }

  for( let char of stringTwo){ // o(n)
    if(!characterCount[char]){
      return false;
    }else{
      characterCount[char] -=1;
    }
  }

  return true;
}

// console.log(checkForAnagram("aaz", "zza"), "expected: false");
// console.log(checkForAnagrams("anagram", "nagaram"), "expected: true");
// console.log(checkForAnagrams("awesome", "awesom"), "expected: false");
// console.log(checkForAnagrams("", ""), "expected: true");

                  /* MULTIPLE POINTERS */

//countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the values in the array. There can be negative numbers in the array, and it will always be sorted. 

// console.log(countUniqueValues([1,1,1,1,1,2]))  //2
// console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) //7
// console.log(countUniqueValues([])) //0
// console.log(countUniqueValues([-2,-1,-1,0,1])) //4


// my solution 
function countUniqueValues(sortedArray){
  let uniqueValues = 0; // 1
  let index = 0
  while(index < sortedArray.length){
   if(sortedArray[index] !== sortedArray[index +1]){
     uniqueValues++
   } 
    index++
  }
  return uniqueValues
}
                                 // i
// console.log(countUniqueValuesTwo([1,1,1,1,1,2]))  //2
                                         // j
// console.log(countUniqueValuesTwo([1,2,3,4,4,4,7,7,12,12,13])) //7
// console.log(countUniqueValuesTwo([])) //0
// console.log(countUniqueValuesTwo([-2,-1,-1,0,1])) //4

function countUniqueValuesTwo(sortedArray){
  let i = 0;
  let j = 1;
  while(j < sortedArray.length){
    // console.log("i: ", i,"j: ", j)
    if(sortedArray[i] !== sortedArray[j]){
      sortedArray[i+1] = sortedArray[j];
      ++i;
    }else{
      j++;
    }
  }
  // console.log(sortedArray)
  return sortedArray.length ? (i + 1): i;
}

                    /* SLIDING WINDOW */

// write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array 

// currentMax = 3
// workingSum = 3
// mumCount = n
                                  // i
// console.log(maxSubarraySum([1,2,5,2,8,1,5], 2)) //10
                                    // j 
// console.log(maxSubarraySum([1,2,5,2,8,1,5], 4)) //17
// console.log(maxSubarraySum([4,2,1,6], 1)) //6
// console.log(maxSubarraySum([4,2,1,6,2], 4)) //13
// console.log(maxSubarraySum([], 4)) //null
//mySolution 
function maxSubarraySum(numberArray, n){
  if(numberArray.length < n) return  null;
  let i = 0; // 3
  let j = 0; // 4
  let maxSum = 0;  // 10
  let currentSum = 0; // 10

  while (j < numberArray.length){
    if((j - i +1) !== n){ // 3 - 3 + 1 !== 2
      currentSum += numberArray[j]; 
      j++
    } else if((j - i +1) === n){
      currentSum += numberArray[j]; 
      if(currentSum > maxSum){
        maxSum = currentSum;
      }
      i++;
      j = i;
      currentSum = 0;
    }
  }
  return maxSum
}


function maxSubarraySumTwo(arr, num){
  let maxSum = 0;
  let tempSum = 0; // 3
  if(arr.length < num) return null;
  for( let i = 0; i < num; i++){
    maxSum += arr[i]
    // current window ==> |1 , 2|
  }
  console.log(maxSum);
  tempSum = maxSum;
  for(let i = num; i < arr.length; i++){ // i = 2
    tempSum = tempSum - arr[i - num] + arr[i]; // 3 - 1 + 5
    // you already have the sum of sum of the nums so as you move right one, you subtract the previous number in the window and add the num number in the window
    // first window ==> |1, 2| = 3
    // new window after i++ |2, 5|
    // last sum - num out of window + new num in window
    // 3 - 1 + 5 
    maxSum = Math.max(maxSum, tempSum);  
  }
  return maxSum; 
}

// console.log(maxSubarraySumTwo([1,2,5,2,8,1,5], 2)) //10


/* DIVIDE AND CONQUER */

