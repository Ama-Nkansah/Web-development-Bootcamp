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

