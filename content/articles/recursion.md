---
title: "Recursion"
date: 2025-01-15
tags:
  - '#recursion'
  - '#algorithms'
  - '#programming'
  - '#computer-science'
description: "Recursion concepts and examples"
layout: post.njk
---

# Recursion
[![](https://paper-attachments.dropbox.com/s_38650F99D9B78272187664185C912CC33071ED06894BA64FDADDC66AE31FF024_1565533807349_Screenshot+from+2019-08-11+11-29-25.png)](https://paper-attachments.dropbox.com/s_38650F99D9B78272187664185C912CC33071ED06894BA64FDADDC66AE31FF024_1565533807349_Screenshot+from+2019-08-11+11-29-25.png)
function call themselves - Screenshot from [Fun Fun Function](https://www.youtube.com/@funfunfunction)
  
[![](https://paper-attachments.dropbox.com/s_38650F99D9B78272187664185C912CC33071ED06894BA64FDADDC66AE31FF024_1565534587447_Screenshot+from+2019-08-11+11-42-48.png)](https://paper-attachments.dropbox.com/s_38650F99D9B78272187664185C912CC33071ED06894BA64FDADDC66AE31FF024_1565534587447_Screenshot+from+2019-08-11+11-42-48.png)
makeTree(categories, null) - Screenshot from [Fun Fun Function](https://www.youtube.com/@funfunfunction)
Recursion is a technique in programming where a function calls itself repeatedly until a specific condition is met. This allows solving complex problems by breaking them down into smaller, easier to solve sub-problems.
In JavaScript, a recursive function has a base case, which is the condition that stops the recursion, and a recursive case, which is the logic that calls the function again with a modified argument.
Here's an example of a recursive function that calculates the factorial of a number:
```javascript
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
```
In this example, the base case is `**if (n === 0)**`, which returns `**1**` and stops the recursion. The recursive case is `**return n * factorial(n - 1)**`, which calls the `**factorial**` function again with `**n - 1**` as an argument.
Recursion can be used to solve many types of problems in JavaScript, including tree traversal, searching and sorting, and more. However, it's important to be careful with recursion, as it can easily lead to infinite loops and stack overflow errors if the base case is not properly defined.
  
Video from the screenshots:
[http://youtube.com/watch?v=k7-N8R0-KY4](http://youtube.com/watch?v=k7-N8R0-KY4)