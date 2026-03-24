---
title: "Prototype"
date: 2025-01-15
tags:
  - javascript
description: "JavaScript prototype chain and inheritance"
layout: post.njk
---

```javascript
function talk() {
  console.log(this)
  console.log(this.sound)
}

let animal = {
  talk
}

let cat = {
  sound: 'meow!'
}

Object.setPrototypeOf(cat, animal)

cat.talk()
````

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

## Related Notes

- [[javascript-closures-and-curries|Closures and Curries]]
    
- [[execution-contexts-hoisting-scopes-and-closures|Execution Contexts, Hoisting, Scopes, and Closures]]
    
- [[react-forwardRef|Forwarding Ref]]
    
- [[function-overload|Function Overload]]
    
- [[javascript-generator|Generator]]

- [[javascript-this-object-inside-call-apply-and-bind|This Object Inside Call, Apply and Bind]]