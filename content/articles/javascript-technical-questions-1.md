---
title: "JavaScript Technical Questions (Set 1)"
date: 2025-01-15
tags:
  - javascript
  - interview
description: "Closures, memory leaks, dead code elimination, and history of JS performance improvements."
layout: post.njk
---

# JavaScript Technical Questions (Set 1)

## 1. What is a closure?
A closure is a function that retains access to the variables in its outer scope even after the outer function has returned. In JavaScript’s execution context model, the closure “closes over” its lexical environment, allowing you to maintain state across calls.

```js
function outerFunction(x) {
  return function innerFunction(y) {
    return x + y;
  };
}

const add5 = outerFunction(5);
add5(3); // 8
```

Closures, execution contexts, hoisting, and scope all reinforce each other; understanding them is critical for writing effective JS.

## 2. How are memory leaks possible in JavaScript?
Even with garbage collection, leaks occur when references persist unintentionally (e.g., misused closures, circular references, forgotten event listeners, timers). Example from V8: a closure holding on to a growing array prevents the collector from reclaiming memory.

```js
function outer() {
  const largeArray = [];
  return function inner(num) {
    largeArray.push(num);
  };
}

const appendNumbers = outer();
for (let i = 0; i < 1e8; i++) appendNumbers(i);
```

Mitigation: reset references (e.g., `largeArray = []` when size exceeds threshold), monitor event listeners, and profile regularly.

### Low-level mechanics
Leaks happen when references remain reachable, blocking GC. To dive deeper, consult *JavaScript: The Definitive Guide* (David Flanagan) or *Professional JavaScript for Web Developers* (Nicholas C. Zakas).

## 3. Dead code and elimination
- **Dead code**: code paths the engine never executes (e.g., `if (false)` blocks).
- **Elimination**: use linters (ESLint), TypeScript’s type checks, and bundlers (Webpack, Rollup, esbuild, Terser) to remove unreachable or unused code before shipping.
- **Challenge vs static languages**: JS’s dynamic nature complicates static analysis; tooling must be conservative unless aided by TypeScript or explicit configs.

## 4. Key performance milestones in JavaScript history
- **Engine optimisation**: introduction of V8 (Chrome 2008), SpiderMonkey, ChakraCore with JIT compilation and hidden class optimisations.
- **Lazy loading**: load only the code needed for the current task to reduce parse/compile overhead.
- **Garbage collection advances**: from basic mark-and-sweep to incremental and generational collectors.
- **Promises & async/await**: easier asynchronous code, allowing concurrency without callback hell.
- **ES6+ features**: new syntax/features that improve expressiveness and performance.

## 5. Will new language features improve performance?
Often yes: modern browsers optimise new features, and transpilers like Babel allow early adoption while staying compatible. Staying current generally yields better engine optimisations and smaller bundles.

## Related Notes

- [[closures-and-curries|Closures and Curries]]
- [[execution-contexts-hoisting-scopes-and-closures|Execution Contexts, Hoisting, Scopes, and Closures]]
- [[forwarding-ref|Forwarding Ref]]
- [[function-overload|Function Overload]]
- [[generator|Generator]]
- [[interview-ready-javascript|Interview-ready JavaScript Plan — Kyle Simpson v2 (plus cross-skill map)]]
- [[javascript-technical-questions|JavaScript Technical Questions]]
