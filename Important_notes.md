# Why is JavaScript Called an Object-Oriented Programming Language?

### **Question:**  
Why is JavaScript called an object-oriented programming language?

### **Answer:**  
JavaScript is called object-oriented because it uses **objects** to organize code. Objects allow us to group **data** (called properties) and **behavior** (called methods) together.  

Additionally, JavaScript supports key concepts of object-oriented programming like:  
1. **Encapsulation:** Bundling data and behavior in one place.  
2. **Inheritance:** Allowing objects to share or extend features from other objects, enabling code reuse.  

This makes JavaScript a flexible and powerful tool for writing clean, structured, and manageable code.  


# JavaScript Prototypes

### **What is a Prototype?**

A **prototype** is like a blueprint in JavaScript. It allows objects to share methods and properties, so you don’t need to duplicate them for every object.

When you create an object, it can look up methods or properties it doesn’t have in its **prototype**. This is called the **prototype chain**.

---

### **Built-in Prototypes**

JavaScript already provides built-in prototypes for commonly used objects, such as:

1. **Object.prototype**: Every object inherits from this. Examples:
   - `toString()`
   - `hasOwnProperty()`

2. **Array.prototype**: Arrays inherit methods like:
   - `push()`
   - `pop()`
   - `map()`

3. **String.prototype**: Strings inherit methods like:
   - `toUpperCase()`
   - `substring()`

Example:

```javascript
let fruits = ["Apple", "Banana"];
fruits.push("Orange"); // Uses Array.prototype.push
console.log(fruits); // ["Apple", "Banana", "Orange"]

let text = "Hello";
console.log(text.toUpperCase()); // Uses String.prototype.toUpperCase
```

---

### **Creating Your Own Prototype**

You can add your own methods to a prototype to share them across objects created by a constructor function:

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the prototype
Person.prototype.greet = function () {
  return `Hi, my name is ${this.name} and I'm ${this.age} years old!`;
};

let robbie = new Person("Robbie", 25);
let alice = new Person("Alice", 30);

console.log(robbie.greet()); // "Hi, my name is Robbie and I'm 25 years old!"
console.log(alice.greet());  // "Hi, my name is Alice and I'm 30 years old!"
```

---

### **Prototype Chain**

If a method or property is not found on an object, JavaScript looks for it in the object’s prototype, and then its prototype’s prototype, and so on, until it reaches `null`. This is the **prototype chain**.

Example:

```javascript
let obj = {};
console.log(obj.toString()); // Found in Object.prototype
```

---

### **Extending Built-in Prototypes (Be Careful!)**

You can add methods to built-in prototypes, but it’s usually not a good idea because it can cause conflicts in your code or with libraries.

Example:

```javascript
Array.prototype.sayHi = function () {
  console.log("Hi from Array!");
};

let myArray = [1, 2, 3];
myArray.sayHi(); // "Hi from Array!"
```

While this works, modifying built-in prototypes can break other code, so use it with caution.



# JavaScript Constructor Functions

### **What is a Constructor Function?**

A **constructor function** is a special function used to create objects with the same structure and methods. It acts as a blueprint for building objects.

### **How to Create a Constructor Function**

1. Define a function with a capitalized name (by convention).
2. Use the `this` keyword to set properties specific to each object.
3. Use `new` to create objects from the constructor.

Example:

```javascript
function Person(name, age) {
  this.name = name; // Assigns a name property
  this.age = age;   // Assigns an age property
}

let robbie = new Person("Robbie", 25);
let alice = new Person("Alice", 30);

console.log(robbie.name); // "Robbie"
console.log(alice.age);  // 30
```

### **Adding Methods with Prototypes**

Instead of defining methods inside the constructor, use the prototype to share methods among all objects:

```javascript
Person.prototype.greet = function () {
  return `Hi, I'm ${this.name}!`;
};

console.log(robbie.greet()); // "Hi, I'm Robbie!"
console.log(alice.greet());  // "Hi, I'm Alice!"



# Difference Between jQuery Object and Normal JavaScript Object

### Normal JavaScript Object
- **Purpose**: To store and manage data as key-value pairs.
- **Access**: Use dot or bracket notation to retrieve values.
- **Example**:
  ```javascript
  const person = {
      name: "Robbie",
      age: 25
  };
  console.log(person.name); // "Robbie"
  ```

### jQuery Object
- **Purpose**: To work with and manipulate DOM elements.
- **Access**: Use jQuery methods like `.val()`, `.css()`, `.html()`.
- **Example**:
  ```javascript
  const element = $('#myDiv'); // jQuery object
  element.text('Hello, World!');
  ```

### Key Differences
| Feature                  | Normal JavaScript Object       | jQuery Object                          |
|--------------------------|---------------------------------|----------------------------------------|
| **Purpose**              | Data storage                  | DOM manipulation                      |
| **Created By**           | `{}` or `new Object()`         | jQuery selector (e.g., `$('#id')`)    |
| **Methods Available**    | Native/custom methods          | jQuery methods (e.g., `.val()`)        |
| **Contains**             | Data                           | DOM elements wrapped by jQuery        |

### Converting Between Them
- **jQuery to DOM**: `$('#myDiv')[0]`
- **DOM to jQuery**: `$(document.getElementById('myDiv'))`



# Understanding Terminal Emulator and Shell

## What is a Terminal Emulator?
A **terminal emulator** acts as a modernized window for interacting with your computer's command line. It enhances the experience with features like:
- Themes
- Tabs and split panes
- Smooth visuals and better usability

Think of it as a polished interface that makes using the command line more user-friendly.

### Example: **WezTerm**
WezTerm is a terminal emulator that provides a sleek and feature-rich environment for your command-line workflows. With support for GPU rendering, Unicode, and tabs, it ensures smooth interactions.

---

## What is a Shell?
A **shell** is the translator inside the terminal emulator. It:
1. Takes the commands you type in the terminal emulator.
2. Sends those commands to the operating system for execution.
3. Returns the results back to the terminal emulator for display.

The shell is the brain behind the operation, handling all the logic and processing.

### Example: **Bash**
Bash (Bourne Again Shell) is a popular shell that interprets your commands and executes them. It’s widely used for scripting and day-to-day command-line tasks.

---

## Workflow: How It All Fits Together
1. You open your terminal emulator (e.g., **WezTerm**).
2. Inside the terminal emulator, your shell (e.g., **Bash**) starts running.
3. You type a command like `ls` or `mkdir`.
   - The shell interprets the command and tells the operating system what to do.
   - The operating system performs the task.
   - The result is sent back and displayed beautifully in the terminal emulator.

---

## Summary
- **Terminal Emulator:** The stylish window (e.g., WezTerm) that hosts your shell and enhances the visual and interactive experience.
- **Shell:** The translator (e.g., Bash) that processes your commands and communicates with the operating system.

Together, they create a seamless and efficient environment for working on your computer!



## On the frontend, you always use fetch() to talk to the backend. You tell it what method to use (GET, POST, etc.).

Example: `fetch(url, { method: 'GET' })` for getting data or `fetch(url, { method: 'POST' })` for sending data.

## On the backend, you create routes with .get(), .post(), etc., to handle the requests from the frontend.

Example: `app.get()` to respond to a GET request or `app.post()` to respond to a POST request.

## The frontend method (GET/POST) in fetch() must match the backend route method (.get()/.post()) for them to work together.
