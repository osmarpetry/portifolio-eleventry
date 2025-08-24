---
title: "React with Responsiveness"
date: 2025-01-15
tags:
  - '#react'
  - '#responsive'
  - '#frontend'
  - '#web-design'
description: "React with responsiveness"
layout: post.njk
---

# React with Responsiveness

In any application, you can grab the reference (useRef) of it and check its width, and then ask to remove it from the DOM. In React, there is a popular library for this, whose name I don't remember, and another one called [react-media](https://www.npmjs.com/package/react-media). I discovered react-media because it works with Server-Side Rendering (SSR). The problem with using the CSS @media was due to performance issues after the build.

## Practical approaches
- Prefer CSS for layout (container queries if available) and reserve JS for dynamic calculations (virtualization, canvas, complex charts).
- If you need runtime breakpoints in JS, use `matchMedia` or a hook wrapper (SSR-friendly) and hydrate consistently.
- Measure on container, not window, when the component is reused in variable widths.

```tsx
function useBreakpoint() {
  const [bp, setBp] = useState<'sm'|'md'|'lg'>("md");
  useEffect(() => {
    const q = [
      window.matchMedia('(max-width: 640px)'),
      window.matchMedia('(min-width: 1024px)')
    ];
    const onChange = () => setBp(q[1].matches ? 'lg' : q[0].matches ? 'sm' : 'md');
    q.forEach(m => m.addEventListener('change', onChange));
    onChange();
    return () => q.forEach(m => m.removeEventListener('change', onChange));
  }, []);
  return bp;
}
```

## Testing responsive UI
- Snapshot at multiple widths; use Storybook viewports or Playwright for e2e.
- Ensure hydration-safe conditions if using SSR — avoid conditional markup that diverges server/client.
