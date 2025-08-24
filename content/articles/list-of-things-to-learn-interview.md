---
title: "List of Things to Learn (Interview)"
date: 2025-01-15
tags:
  - '#career'
  - '#resources'
description: "List of things to learn for interviews - notes from @frangelli"
layout: post.njk
---

# List of Things to Learn (Interview) - @frangelli notes
A while back, I posted a mind map of the frontend things that were appearing the most in senior interviews outside of Brazil. I think it would also be useful to have a small list of the type of questions that are most common. I will create a document or blog post to document this but for now, it will be here because it can help someone who is about to be interviewed:
1. `**this**` context: In various different ways, they will try to make "tricks" with it... calling functions in different ways.. `**arrow function**`, `**inside a literal object (method)**`, `**inside an instance like new MyObject**`, `**borrowing the function from somewhere else like: const m = myObject.m; m();**`...
2. `**Promise API**`... they are keeping a close eye on this... and in 3 different places, they asked to write my own `**Promise.all**` that takes an array of promises and returns an array with the results in the SAME ORDER as the array of promises.
3. Event Loop / Execution Context... Classic trick questions like: What order will the following functions be called:
```javascript
fn1();
fn2();
setTimeout(() => {
  fn3();
}, 0);
```
And also questions like: If javascript is a "single-threaded language," how does it handle more than one task at the same time...
1. REACT: Component vs PureComponent? What's a HOC? Can you please write one? Which component composition methodologies do you know? (render props, HOC, function as children...)
2. Event Delegation: is a technique in front-end web development where an event handler is attached to a parent element rather than individual child elements. This allows the event handler to capture events that occur on the child elements and handle them efficiently.
3. VanillaJS DOM manipulation: They like it when they see a `**createDocumentFragment()**` 7. Master the `**reduce**`, `**map**`, `**filter**`... of life... 8. Closures: The last one I saw was: Create a function called `**redGreen**` that when called without any parameter once it returns `**red**` and the other time it returns `**green**`. Do not use ANY place outside the function to store any variables and also do not change the way the function is called:
```javascript
redGreen(); //red
redGreen(); //green
redGreen(); //red
redGreen(); //green
```
# List to learn
- Rx.js
- TypeScript
- JavaScript
- ES6
- Destructuring
- Class
- Static properties
- Arrow functions
- let / const
- Spread operator
- IIFE
- Design patterns
- Revealing module pattern
- Dependency injection
- Underlying of language
- Prototypes
- Stack / Event Loop
- Memory leaks / GC
- Hoisting
- Differences between let, const, and var
- this scope
- Promises
- Web Workers
- Service Workers
- Data structures
    - Map
    - WeakMap
    - Literal objects
    - Arrays
    - Set
- Iterables
    - for
    - for...in
    - for...of
    - .forEach
    - .map
    - .reduce
    - .filter
- Event bubbling
- Event delegation
- Date API
- localStorage / sessionStorage
- CSS / SCSS
    - flexbox
    - positioning
- Responsiveness
- Media queries
- HTML5
- Use of semantic components
    - header
    - section
    - article
    - ...
- HTTP Protocol
    - GET vs POST
- Webpack
    - Minification
- Babel
    - presets
    - loaders
- The DOM
- Accessing nodes
    - NodeList vs Array
    - Traversing the DOM
    - DocumentFragment
- Loading sequence
    - Script at the bottom of the page
    - defer and async attribute of script
- Testing
    - TDD
    - Jest
    - Enzyme
    - Assertions
- Types of testing
    - Unit
    - Integration
    - e2e
- Security
    - CSRF
    - SSL BREACH
    - CORS
    - XSS
    - OWASP
- React
    - Styled components
- Redux
    - Middlewares
    - Hooks
    - Context API
    
[![](https://paper-attachments.dropbox.com/s_1B6DD2872D82AC6DA21C0E0DE272D72596DCEF5696665E8B2C2352E4239F9706_1579641743508_Senior+Engineer-1.jpg)](https://paper-attachments.dropbox.com/s_1B6DD2872D82AC6DA21C0E0DE272D72596DCEF5696665E8B2C2352E4239F9706_1579641743508_Senior+Engineer-1.jpg)