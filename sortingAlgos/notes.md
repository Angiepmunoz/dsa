# Sorting Algos

## JS Sorting 
- The built-in sort method accepts an optional comparator function
- You can use this comparator function to tell JS how you want it to sort 
- The comparator looks at pairs of elements (a and b), determines their sort order based on the return value
    - If it returns a negative number, a should come before b
    - If it returns a positive number, a should come after b
    - If it returns 0, a and b are the same as far as sort is concerned

## Bubble Sort
- A sorting algo where the largest values bubble to the top

Time Complexity:
- O(N^2) worst case scenario
- O(1) - if array is mostly sorted


## Selection Sort 
- Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position
- Worst O(n^2)

## Insertion Sort
- Builds up the sort by gradually creating a larger left half which is always sorted
- Worst O(n^2)


## Merge sort 
- Bubble, Insertion, and Selection don't scale well 
- Can improve time complexity from O(n^2) to O(n log(n))

- It's  a combination of merging and sorting
- Exploits the fact that arrays of 0 or 1 element are always sorted
- Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array


 ## Quick Sort
 - Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
 - Works by selecting one element (called the "pivot")and finding the index where the pivot should end up in the sorted array
 - Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot 

### Pivot Helper
- In order to implement merge sort, it's useful to first implement a function responsible arranging elements in an array on either side of a pivot 
- Given an array, this helper function should designate an element as the pivot
- It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot 
- The order of the elements on either side of the pivot doesn't matter!
