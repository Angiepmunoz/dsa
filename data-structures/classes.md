# Data Structures

## What do they do
- Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data

## ES2015 Class Syntax
- A class is a blue print for creating objects w/ ore defined properties and methods

**The syntax**
```javascript
class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
```
- Constructor - a special method to instantiate new instances. When a new instance is created the new instance will have the properties in the constructor 
- The method to create new objects must be called constructor
- The class keyword creates a constant, so you cannot redefine it. 

**Creating objects from classes**

```javascript
let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele");
```

**This**
- This refers to the individual instance of the class (student )
- Inside all of our instance methods an constructor, the keyword `this` refers to the object created from that class (also known as an instance)

**Instance methods**
- Provide functionality that correspond to individual instances

**The syntax**
```javascript
class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.tardies = 0;
        this.scores = [];
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`
    }
    markLate(){
        this.tardies +=1
        return `${this.firstName} ${this.lastName} have been late ${this.tardies} times`
    }
    addScore(score){
        this.scores.push(score)
        return this.scores
    }
}
let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele");

firstStudent.fullName()

```

**Class Methods**
- the method is pertinent to classes but not the instances
    - the instance cannot access it and can only be access by the class itself
    - has the static keyword

```javascript
class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    static distance(a,b){
        const dx = a.x - b.x;
        const dy = a.y = b.y;
        return Math.hypot(dx, dy)
    }
}

const p1 = new Point(5,5);
const p2 = new Point(10,10);

Point(p1, p2) //7.07
```


**How we'll be using classes**
```javascript
class DataStructure(){
    constructor(){
        // what default properties should it have
    }
    someInstanceMethod(){
        //what should each object created from this class be able to do?
    }
}
```





