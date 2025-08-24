---
title: "Forwarding Ref"
date: 2025-01-15
tags:
  - '#react'
  - '#refs'
  - '#javascript'
  - '#frontend'
description: "Forwarding Refs is a technique in React where you pass a ref from a parent component to a child component"
layout: post.njk
---

# Forwarding Ref

Forwarding Refs is a technique in React where you pass a ref from a parent component to a child component, allowing the child component to access the DOM node or instance of the parent component.
Here's an example to demonstrate Forwarding Refs:
```javascript
javascriptCopy code
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