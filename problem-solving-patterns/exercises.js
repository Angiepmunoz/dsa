// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positives integers, find out if the two numbers have the same frequency of digits. 

// Your solutions MUST have the following complexities TIME: O(N);

// console.log(sameFrequency(182,281)) // true
// console.log(sameFrequency(34,14)) // false
// console.log(sameFrequency(3589578, 5879385)) // true
// console.log(sameFrequency(22,222)) // false

function sameFrequency(numOne,numTwo){
    const numOneFreqObj = {};
    const numTwoFreqObj = {};
    const numOneString = numOne.toString();
    const numTwoString = numTwo.toString();
    for(let i = 0; i < numOneString.length; i++){
        numOneFreqObj[numOneString[i]] = (numOneFreqObj[numOneString[i]] || 0) + 1
    }
    for(let i = 0; i < numTwoString.length; i++){
        NumTwoFreqObj[numTwoString[i]] = (numTwoFreqObj[numTwoString[i]] || 0) + 1
    }
    for(let num in numOneFreqObj){
        if(!numTwoFreqObj[num] || (numOneFreqObj[num] !== numTwoFreqObj[num])) return false;
    }
    return true;
}

// Frequency Counter/ Multiple Pointers
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern or the multiple pointers pattern.

// console.log(areThereDuplicates(1, 2, 3)) // false
// console.log(areThereDuplicates(1, 2, 2)) // true 
// console.log(areThereDuplicates('a', 'b', 'c', 'a'))// true 

function areThereDuplicates(){
    const nArgs = [...arguments];
    const argFreqObj = {};
    for(let i = 0; i < nArgs.length; i++){
        if(argFreqObj[`${nArgs[i]}`]){
            return true;
        }else{
            argFreqObj[`${nArgs[i]}`] = 1;
        }
    }
    return false;
}

// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair  of values in the array where the average of the pair equals the target average. The may be more that one par that matches the average target. 
// console.log(averagePair([1,2,3],2.5)) // true
// console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
// console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
// console.log(averagePair([],4)) // false


function averagePair(arr, avgTarget){
    if(!arr.length) return false;
    let i = 0;
    let j = arr.length-1;

    while(j > i){
        const avg = (arr[i] + arr[j])/2
        if(avg === avgTarget) return true;
        if(avg < avgTarget){
            i++;
        }else {
            j--;
        }
    }
    return false;
}

// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// console.log(isSubsequence('hello', 'hello world')); // true
//             //    i         j
// console.log(isSubsequence('sing', 'sting')); // true
// console.log(isSubsequence('abc', 'abracadabra')); // true
// console.log(isSubsequence('abc', 'acb')); // false (order matters)

function isSubsequence(stringOne, stringTwo){ 
    let i = 0; 

    for (let j = 0; j < stringTwo.length && i < stringOne.length; j++){ 
        if(stringOne[i] === stringTwo[j] && i !== stringOne.length -1){ 
            i++;
        }else if(stringOne[i] === stringTwo[j] && i === stringOne.length -1){
            return true;
        }
    }
    return false;
}

// Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
                            
// console.log(maxSubarraySum([100,200,300,400], 2)) // 700
// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39 
// console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
// console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
// console.log(maxSubarraySum([2,3], 3)) // null


function maxSubarraySum(arr, subarrayLength){
    if(subarrayLength > arr.length) return null;
    let maxSum = 0;
    let currentSum = 0
    for(let i = 0; i < subarrayLength; i++){
        maxSum += arr[i];
    }
    currentSum = maxSum;
    for(let j = subarrayLength; j < arr.length; j++){
        // console.log(arr[j-subarrayLength], arr[j+1])
        currentSum = currentSum - arr[j-subarrayLength] + arr[j];
        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum;
}

// Sliding Window - minSubArrayLen
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
5 + 16 + 22 + 5
20 + 22 + 5 + 7
38 + 5 + 7 + 8
27 + 7 + 8 + 9
12 + 8 + 9 + 10
15 + 9 + 10 
17 + 10
19

                            //    | |
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0

// function createSubarraySums(array, subarrayLength){}

function minSubArrayLen(arr, num){
    const arrayOfSums = []
    let subArraySum = 0;
    let windowSize = 2;
    let windowCount = 1;
    let start = 0;
    if (Math.max(...arr) >= num ) return 1;
    for( let i = 0; i < num; i++){
        subArraySum += arr[i];
    }


}