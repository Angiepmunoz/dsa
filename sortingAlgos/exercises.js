// Bubble sort

function bubbleSort(array) {
  // [5,8,1,5,0]
  let noSwaps;
  for (let i = array.length - 1; i >= 0; i--) { // i = 4
    // i = 4
    noSwaps = true;
    for (let j = 0; j <= i - 1; j++) { 
      // j = 0 , 
      if (array[j] > array[j + 1]) {
        // 5 > 8
        let temp = array[j]; // 5
        array[j] = array[j + 1]; //
        array[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return array;
}

// console.log(bubbleSort([5,8,1,5,0]))

function selectionSort(arr) {
  // [5,8,1,5,0]
  let min = Infinity; // 5
  let minIndex; // 0
  let index = 0;
  let pass = 0;
  while (pass < arr.length) {
    if (arr[index] < min) {
      // 5 < infinity
      min = arr[index];
      minIndex = index;
    }
    if (index === arr.length) {
      const temp = arr[pass];
      arr[pass] = min;
      arr[minIndex] = temp;
      min = Infinity;
      pass++;
      index = pass;
    } else index++;
  }
  return arr;
}

// console.log(selectionSort([5,8,1,5,0]))
// console.log(selectionSort([5,8,24, 89, 1,5,0]))

function insertionSort(arr) {
  // [3,5,15,38,44,48]
  for (let i = 1; i < arr.length; i++) {
    //i = 5
    let current = arr[i]; //15
    for (let j = i - 1; j >= 0; j--) {
      // j=1
      if (current < arr[j]) {
        // 15 < 5
        arr[j + 1] = arr[j];
      } else {
        arr[j + 1] = current;
        break;
      }
    }
  }
  return arr;
}
// console.log(insertionSort([3, 44, 38, 5, 48, 15]));

/************* MERGE SORT */
function merge(arr1, arr2) {
  let length = Math.max(arr1.length, arr2.length);
  const mergedArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  };
  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }

  return mergedArr;
}
// console.log(merge([1, 10, 50], [2, 14, 99, 100]));



function mergeSort(arr){
    if(arr.length <= 1) return arr;
    const left = arr.slice(0, arr.length/2);
    const right= arr.slice(arr.length/2)

    return merge(mergeSort(left), mergeSort(right))

}
 console.log(mergeSort([87,5,90,100,74,44]))

