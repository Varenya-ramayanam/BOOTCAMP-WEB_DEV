VARIABLES AND DATATYPES IN JAVASCRIPT:

1. What Are Variables?
  Variables are named containers used to store data values.

  In JavaScript, variables are declared using:
    let: For variables that can be reassigned.
    const: For variables that remain constant.
    var: An older way to declare variables (not recommended in modern JavaScript).

JavaScript Data Types:

  JavaScript has two main categories of data types:
  
  1. Primitive Data Types: These are immutable (cannot be changed) and represent simple, indivisible values.
  2. Non-Primitive Data Types: These are mutable and can store collections of values or more complex entities.
     
      1. Primitive Data Types
        a. Number
        Represents numerical values, including integers and floating-point numbers.
        Can also represent special numeric values like Infinity, -Infinity, and NaN (Not-a-Number).
        b. String
        Represents sequences of characters enclosed in single, double, or backtick quotes.
        Used to store text and allows embedding variables and expressions using template literals.
        c. Boolean
        Represents logical values: true or false.
        Typically used in conditions and comparisons.
        d. Undefined
        A variable that is declared but not assigned a value automatically gets the value undefined.
        e. Null
        Represents an intentional absence of value or empty object reference.
        Used when you explicitly want to indicate "no value."
        f. Symbol
        Represents a unique, immutable value.
        Often used as unique keys in objects to avoid property name collisions.
        g. BigInt
        Represents numbers that are too large to be safely represented by the Number type.
        Useful for performing calculations with very large integers.

      2. Non-Primitive Data Types
        a. Object
        Represents collections of key-value pairs.
        Includes more complex structures like arrays, functions, and instances of classes.
        b. Array
        A special kind of object that stores ordered lists of values.
        Values can be of any data type, including other arrays or objects.
        c. Function
        Represents reusable blocks of code that perform specific tasks or calculations.
        Functions are objects but can be executed.
        d. Date
        Represents date and time values.
        Provides methods to perform operations like formatting dates, comparing dates, etc.
        e. Regular Expressions (RegExp)
        Represents patterns used for string matching or replacement.
        f. Map and Set
        Map: Stores key-value pairs where keys can be of any type.
        Set: Stores unique values of any type.
        g. WeakMap and WeakSet
        Similar to Map and Set, but hold weak references to their keys/values.


