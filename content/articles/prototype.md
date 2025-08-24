---
title: "Prototype"
date: 2025-01-15
tags:
  - '#javascript'
  - '#prototype'
  - '#object-oriented'
  - '#programming'
description: "JavaScript prototype chain and inheritance"
layout: post.njk
---

# Prototype
[![](https://paper-attachments.dropbox.com/s_A5A518F9BFA49B351A3D5B16CD2D9F18CD65AE3FA779F5F2B78641F2ADD4C8E6_1565490899027_Screenshot+from+2019-08-10+23-33-30.png)](https://paper-attachments.dropbox.com/s_A5A518F9BFA49B351A3D5B16CD2D9F18CD65AE3FA779F5F2B78641F2ADD4C8E6_1565490899027_Screenshot+from+2019-08-10+23-33-30.png)
Example of use of Protype in Javascript
In JavaScript, prototypes are a way to share properties and methods among objects. Every object in JavaScript has a prototype property, which is a reference to another object, called its prototype. When an object is asked for a property that it does not have, its prototype is searched for the property instead.
For example, consider the following code:
```javascript
function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name);
};
var john = new Person("John");
john.sayHello(); // prints "Hello, my name is John"
```
In this example, we create a `**Person**` constructor function, and add a `**sayHello**` method to its prototype. This allows all objects created using the `**Person**` constructor to access the `**sayHello**` method, even though it is not defined directly on the object. When we create a new `**Person**` object using `**new Person("John")**`, and call the `**sayHello**` method, the output is `**"Hello, my name is John"**`.