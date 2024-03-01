 # Search Algorithms

## Liner Search
- Visit one item at a time
    - indexOf
    - includes
    - find
    - findIndex

```javascript
function linearSearch(array, value){
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            return i;
        }
    }
    return -1
}
```

### Linear Search - Big O
- Best O(1), Average O(N), Best O(N)

## Binary Search 
- Binary Search is much faster form of search
- Rather than eliminating one element at a time, you can eliminate *half* of the remaining elements at a time
- Binary search only works on sorted arrays 

### Divide and Conquer
Binary Search Psuedocode
- This function accepts a sorted array
- Create a left pointer at the start of the array and a right pointer comes before the right pointer
    - Create a pointer in the middle
    - If you find the value you want return the index
    - If the value is too small, move the right pointer down 
- If you never find the value return -1

### Big O
- Worst and average case O(log n)
    - as the array length doubles the the number of steps increase by one
    - 2 to the x power
- Best case: O(1)

## Naive Search 
- Suppose you want to count the number of times a smaller string appears in a longer string
- A straightforward approach involves checking pairs of characters individually