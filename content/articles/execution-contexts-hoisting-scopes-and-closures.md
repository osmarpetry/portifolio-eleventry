---
title: "Execution Contexts, Hoisting, Scopes, and Closures"
date: 2025-01-15
tags:
  - '#javascript'
  - '#closures'
  - '#hoisting'
  - '#scope'
description: "Execution Contexts, Hoisting, Scopes, and Closures are fundamental concepts in JavaScript programming language."
layout: post.njk
---

# Execution Contexts, Hoisting, Scopes, and Closures

Execution Contexts, Hoisting, Scopes, and Closures are fundamental concepts in JavaScript programming language.
[![](https://paper-attachments.dropbox.com/s_B4DB0F1EB6C873B2F6C21CE0FB064DB6E8C64A79449EB5618EADD67EC736F1CE_1565546217110_Screenshot+from+2019-08-11+14-55-21.png)](https://paper-attachments.dropbox.com/s_B4DB0F1EB6C873B2F6C21CE0FB064DB6E8C64A79449EB5618EADD67EC736F1CE_1565546217110_Screenshot+from+2019-08-11+14-55-21.png)
Screenshot from [https://ui.dev/](https://ui.dev/) course and it were called “Tyler”
- Context refers to the `**this**` keyword, which is always the first parameter that can be received by a function with the `**bind**` method. If it is not received, it will look for it in its parent, until it reaches the `**window**` object. If it cannot be found, it will throw an error.
- Hoisting is the process of declaring a variable before it is used in the code.
- Scope refers to the range of accessibility of a function or a variable.
## Closures
Closures are created when a function is defined inside another function. The inner function creates a closure with its parent function.
When a program starts, the `**window**` object is created, along with the `**this**` keyword that references the `**window**`, and the functions and variables that exist.
When a function is called, a function context is created. Instead of creating the `**window**` object, the `**arguments**` object is created. If a function or an arrow function is used, a different context is created.
Functions have a scope, and a function inside another function is a closure.
- Context refers to the `**this**` keyword, which is the first parameter that can be received by a function. If it is not received, it will look for it in its parent, until it reaches the `**window**` object. If it cannot be found, it will throw an error.
- Hoisting is the process of declaring a variable before it is used.
- Scope is the range of accessibility of a function or a variable.
- Closures occur when a function is created inside another function. The inner function creates a closure with its parent function.
When a program is initiated, the `**window**` object is created, along with the `**this**` keyword that references the `**window**`, and the functions and variables that exist.
When a function is called, a function context is created. Instead of creating the `**window**` object, the `**arguments**` object is created. If a function or an arrow function is used, a different context is created.
Functions have a scope and a function inside another function is a closure.