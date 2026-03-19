---
title: "JavaScript Technical Questions"
date: 2025-02-24
tags:
  - javascript
  - performance
  - algorithms
description: "Interview-style questions covering closures, memory leaks, dead code elimination, performance history, and future language features."
layout: post.njk
---

# JavaScript Technical Questions

## 1. What is a closure?
A closure is a function that captures variables from its lexical environment even after the outer function finishes executing. This allows stateful behaviour and encapsulation.

### Example
```js
function outerFunction(x) {
  return function innerFunction(y) {
    return x + y;
  };
}
const add5 = outerFunction(5);
console.log(add5(3)); // 8
```

## 2. Memory leaks in JavaScript
### a) How do leaks happen in garbage-collected languages?
Reference cycles, lingering event listeners, improperly cleared timers, or closures holding large structures prevent the GC from reclaiming memory.

### b) Example scenario
```js
function outer() {
  const largeArray = [];
  return function inner(num) {
    largeArray.push(num);
  };
}
const appendNumbers = outer();
for (let i = 0; i < 1e8; i++) {
  appendNumbers(i);
}
```
Resetting the array when it grows prevents the leak.

## 3. Dead code
- **Definition**: code that will never execute, often due to static conditions.
- **Elimination**: run linters (ESLint), TypeScript, or bundlers (Rollup, Webpack) with tree-shaking and minification.
- **Challenges**: dynamic language features, reflection, and runtime evaluation make static analysis harder than in C++/Java.

## 4. JavaScript performance evolution
- Chrome’s V8 engine (2008) introduced JIT compilation and hidden classes.
- Lazy loading and modular bundling reduced initial parse/execute time.
- Garbage collectors improved with incremental and concurrent algorithms.
- Promises and `async/await` simplified asynchronous code and improved throughput.
- ES6+ features enhanced readability and runtime optimizations.

## 5. Future language features & performance
New features can improve performance when engines optimise around them (e.g., `async/await`, `BigInt`). Tooling like Babel allows early use while emitting backward-compatible code. Engineers should evaluate the trade-offs between expressiveness and bundle size.

## Related Notes

- [[algorithms-course-intro|Design & Analysis of Algorithms — Course Overview]]
- [[big-o-notation|Big O Notation]]
- [[dev-interview-exercises|Interview Practice Notes]]
- [[essential-algorithms|Essential Algorithms in Programming]]
- [[hardcore-functional-programming-in-javascript|Hardcore Functional Programming in JavaScript — Notes + Personal Dictionary]]
- [[interview-ready-javascript|Interview-ready JavaScript Plan — Kyle Simpson v2 (plus cross-skill map)]]
- [[javascript-performance-course|JavaScript Performance — Steve Kinney (Frontend Masters)]]
- [[javascript-technical-questions-1|JavaScript Technical Questions (Set 1)]]
