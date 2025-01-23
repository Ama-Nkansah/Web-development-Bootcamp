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
