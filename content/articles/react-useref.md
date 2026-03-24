---
title: "useRef"
date: 2025-01-15
tags:
  - react
  - frontend
description: "useRef hook in React"
layout: post.njk
---
The useRef hook in React works similarly to the useState hook, but with a few key differences. The main difference between useRef and useState is that useRef does not cause re-renders of the component, while useState will trigger a re-render every time it is updated. This makes useRef a useful tool for storing and accessing values that don't need to trigger re-renders, such as a DOM element or an instance of an object.

## Typical patterns
- Imperative DOM focus/scroll:
```tsx
const inputRef = useRef<HTMLInputElement>(null);
useEffect(() => { inputRef.current?.focus(); }, []);
```
- Persist values across renders without re-rendering (timeouts, previous values, counters not shown in UI).
- Store mutable instances (e.g., external libraries) between renders.

## Anti-patterns
- Don’t replace state with refs for UI state — refs won’t trigger re-renders.
- Avoid reading/writing refs during render; prefer effects.

## When to choose useRef vs state
- If UI must update -> state.
- If value is only for effects/imperative logic -> ref.

## Related Notes

- [[form-validation-nextjs|Form Validation in Next.js]]
- [[react-forwardRef|Forwarding Ref]]
- [[react-optimizing-with-memoization|Optimizing React with Memoization]]
- [[react-battle-of-monsters-challenge|React Coding Challenge — Battle of Monsters]]
- [[react-suspense|React.Suspense]]
- [[react-with-responsiveness|React with Responsiveness]]
- [[2025-03-20 what-react-senior-should-know|What React Senior Should Know]]
