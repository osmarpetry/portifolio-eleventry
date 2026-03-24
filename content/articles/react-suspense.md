---
title: "React.Suspense"
date: 2025-01-15
tags:
  - react
  - frontend
description: "React.Suspense for lazy loading"
layout: post.njk
---

## Why use Suspense
Suspense lets you declaratively handle loading states for code-splitting and async data (with frameworks that support it). It improves first-load performance and keeps your UI logic focused on states that matter.

## Core patterns
- Lazy load routes and components with `React.lazy(() => import('./Component'))`.
- Wrap sections with `Suspense fallback={<Spinner />}` to show a non-blocking loader.
- Group multiple lazy components under one `Suspense` to avoid nested spinners.

```tsx
import { Suspense, lazy } from 'react';
const Settings = lazy(() => import('./Settings'));

export default function Account() {
  return (
    <Suspense fallback={<div>Loading settings…</div>}>
      <Settings />
    </Suspense>
  );
}
```

## Practical notes
- Keep fallbacks small and visually consistent.
- Prefer route-level splits for biggest wins; split deep leaf widgets when large/heavy.
- Combine with bundler hints (webpack/chunk names, vite dynamic import) to keep chunks predictable.
- Metrics to watch: TTI/TTFB, interaction delay, route transition time.

## References
- React docs: https://react.dev/reference/react/Suspense
- Lazy loading: https://react.dev/reference/react/lazy

## Related Notes

- [[form-validation-nextjs|Form Validation in Next.js]]
- [[react-forwardRef|Forwarding Ref]]
- [[react-optimizing-with-memoization|Optimizing React with Memoization]]
- [[react-battle-of-monsters-challenge|React Coding Challenge — Battle of Monsters]]
- [[react-with-responsiveness|React with Responsiveness]]
- [[remix-is-react-router|Remix is React Router — what that means in practice]]
- [[simple-custom-hook-called-usefetch|Simple Custom Hook Called useFetch]]
- [[2025-03-20 what-react-senior-should-know|What React Senior Should Know]]
