# Recursion

## Objectives
- Define what recursion is and how it can be used
- Understand the two essential components of a recursive function
- Visualize the call stack to better debug recursive functions 
- Use helper method recursion and pure recursion to solve more difficult problem

## What is recursion?
- A process (a function in our case) that calls itself

## The Call Stack
- In almost all program languages, there is a built in data structure that manages what happens when the functions are invoked
- It's a stack data structure 
- Any time a function is invoked it is places (pushed) on the top of the call stack
- When JS sees the return keyword or when the function ends, the compiler will remove (pop)

Two essential parts of a recursive function 
- Base case
- Different input 

