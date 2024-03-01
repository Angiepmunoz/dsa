function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((right + left) / 2);
    if (arr[middle] === value) return middle;
    if (value > arr[middle]) left = middle + 1;
    else if (value < arr[middle])  right = middle - 1;
  }
  return -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
// console.log(binarySearch([1,2,3,4,5],3)) // 2
// console.log(binarySearch([1,2,3,4,5],5)) // 4
// console.log(binarySearch([1,2,3,4,5],6)) // -1
// console.log(binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 10)) // 2
// console.log(binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 95)) // 16
// console.log(binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 100)) // -1

function naiveSearch(string, subString){
    let count = 0;
    for(let i = 0; i < string.length; i++ ){
        for(let j = 0; j < subString.length; j++){
            if(string[i+j] !== subString[j]) break;
            if(j === subString.length-1) count++
        }
    }
    return count;
}
// console.log(naiveSearch("loriedlol loledlol", "lol"))

