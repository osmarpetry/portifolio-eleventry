---
title: React ForwardRef
date: 2025-01-15
tags:
  - react
  - javascript
  - frontend
description: Forwarding Refs is a technique in React where you pass a ref from a parent component to a child component
layout: post.njk
---
Forwarding Refs is a technique in React where you pass a ref from a parent component to a child component, allowing the child component to access the DOM node or instance of the parent component.
Here's an example to demonstrate Forwarding Refs:
```javascript
import React, { useRef, forwardRef } from "react";
const Input = forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});
const App = () => {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <Input ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};
export default App;
```

## Related Notes

- [[form-validation-nextjs|Form Validation in Next.js]]
- [[javascript-performance-course|JavaScript Performance — Steve Kinney (Frontend Masters)]]
- [[javascript-ui-hard-parts|The Hard Parts of UI Development — Will Sentance (Frontend Masters)]]
- [[react-optimizing-with-memoization|Optimizing React with Memoization]]
- [[react-battle-of-monsters-challenge|React Coding Challenge — Battle of Monsters]]
- [[react-suspense|React.Suspense]]
- [[react-useref|useRef]]
- [[2025-03-20 what-react-senior-should-know|What React Senior Should Know]]
