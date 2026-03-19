---
title: "Front-End System Design — Course Notes"
date: 2025-05-20
tags:
  - frontend
  - performance
  - workflow
description: "Key takeaways from Evgenii Ray’s Frontend Masters course on scalable UI architecture."
layout: post.njk
---

# Front-End System Design — Course Notes

## 🎯 Course overview
- Instructor: Evgenii Ray (Frontend Masters, July 2024)
- Audience: senior UI engineers building scalable, performant interfaces.
- Focus areas: rendering pipeline, state management, virtualization, network patterns, and interview prep.

## 🧠 Senior-level questions
1. **What is reflow and its impact?** — DOM layout recalculation; batch DOM reads/writes to avoid thrashing.
2. **IntersectionObserver vs scroll handlers** — efficient viewport detection vs manual event listeners.
3. **MutationObserver vs ResizeObserver** — observe DOM tree changes vs element size changes.
4. **Virtualization pool** — reuse DOM nodes to render massive lists efficiently.
5. **WebSockets vs SSE vs REST** — choose transport based on bidirectional needs and frequency.
6. **Scaling infinite feeds** — combine observers, virtualization, state caching, and real-time updates (SSE/WebSockets).

## 📚 Sections
- **Core fundamentals**: box model, formatting contexts, layers, rendering pipeline.
- **DOM API efficiency**: selector performance, templating with `<template>` and fragments.
- **Advanced Web APIs**: IntersectionObserver, MutationObserver, ResizeObserver use cases.
- **Virtualization**: windowing strategies, bidirectional infinite scroll.
- **State & network**: storage options (IndexedDB, LocalStorage), transport protocols (REST, GraphQL, SSE, WebSockets).
- **Performance**: Web Vitals (LCP, INP, CLS), bundling tactics, image/font optimization.
- **System design interview**: breaking down social feed requirements, streaming updates, diffing strategies.

## 🛠 Tools & patterns
- Monitor rendering with Chrome DevTools (Performance tab).
- Libraries: React Window, TanStack Virtual for virtualization; SWR/React Query for caching.
- Observability: integrate Web Vitals analytics (e.g., `web-vitals` package).

## 🔗 Resources
- Frontend Masters course page: [https://frontendmasters.com/courses/front-end-system-design/](https://frontendmasters.com/courses/front-end-system-design/)
- MDN docs for IntersectionObserver, MutationObserver, ResizeObserver.
- Google Web Fundamentals: Web Vitals guidance and case studies.

## Related Notes

- [[enterprise-ui-development|Enterprise UI Development — Testing, Standards, and Ego Control]]
- [[front-end-system-design|Front-End System Design — Evgenii Ray (Frontend Masters)]]
- [[javascript-performance-course|JavaScript Performance — Steve Kinney (Frontend Masters)]]
- [[system-design-notes|Distributed System Design Notes]]
- [[system-design-old|System Design Study Plan]]
- [[testing-enterprise-ui|Enterprise UI Testing & Quality Ramp-Up]]
- [[xstate-state-machines|State Machines in JavaScript with XState]]
