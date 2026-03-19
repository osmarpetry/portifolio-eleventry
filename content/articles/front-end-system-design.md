---
title: "Front-End System Design — Evgenii Ray (Frontend Masters)"
date: 2024-07-01
tags:
  - frontend
  - performance
  - system-design
description: "Course summary covering rendering fundamentals, virtualization, advanced Web APIs, state and network design, and interview practice."
layout: post.njk
---

# Front-End System Design — Evgenii Ray (Frontend Masters)

Intensive workshop for engineers who want to scale front-end systems predictably. Covers rendering, state, virtualization, performance, and system design interviews.

## 🎓 Senior-level check prompts
- **Reflow & performance** — reflow recalculates layout; avoid triggering layout thrashes.
- **IntersectionObserver vs scroll handlers** — Observer is reactive and efficient; ideal for lazy loading.
- **Mutation vs Resize observer** — Mutation tracks DOM changes; Resize tracks size changes; both avoid manual polling.
- **Virtualization pool** — reuse DOM nodes for long lists; boosts FPS and memory efficiency.
- **WebSockets vs SSE vs REST** — WebSockets for two-way realtime, SSE for lightweight server → client streams, REST for on-demand requests.
- **Infinite scroll feed design** — combine IntersectionObserver, virtualization, global state, SSE feed, and progressive rendering.

## 📚 Module breakdown
### 🚀 Introduction (5 min)
- Overview of front-end systems: APIs, UI, state, rendering.
- Ends with simulated system design interview.

### 📐 Core fundamentals (15 min)
- Box model, formatting contexts (flex/grid), positioning.
- Rendering pipeline: style → layout → paint → composite.
- Layering and GPU considerations.

### 🔎 DOM API (11 min)
- Selector performance (`getElementById` vs `querySelector`).
- Avoid complex selectors; use templates/fragments.

### 👁️ Advanced Web APIs (14 min)
- IntersectionObserver, MutationObserver, ResizeObserver with exercises.

### 📊 Virtualization (23 min)
- Render only visible items.
- Pooling technique with absolute positioning.
- Bi-directional infinite scroll using observers.

### 🧠 Application state & network (17 min)
- Local storage options (IndexedDB, SessionStorage, LocalStorage).
- Connectivity trade-offs (UDP vs TCP, polling, SSE, WebSockets).
- REST vs GraphQL decisions.

### ⚡ Performance (10 min)
- Web Vitals (LCP, INP, CLS).
- Bundling (code splitting, lazy loading, minification).
- Asset optimisation (WebP, deferred fonts, compression).

### 🧪 System design interview (15 min)
- Social feed requirements & mockups.
- Global state, media handling, SSE streaming, diffing strategies.

### ✅ Conclusion (2 min)
- Recap of fundamentals, modern techniques, and interview practice tips.

## 🔗 Resources
- Course: [Frontend Masters — Front-End System Design](https://frontendmasters.com/courses/front-end-system-design/)
- Released: July 2024
- Instructor: Evgenii Ray (Staff UI Engineer)
- Code & slides available on the platform.

## Related Notes

- [[enterprise-ui-development|Enterprise UI Development — Testing, Standards, and Ego Control]]
- [[frontend-system-design|Front-End System Design — Course Notes]]
- [[javascript-performance-course|JavaScript Performance — Steve Kinney (Frontend Masters)]]
- [[javascript-ui-hard-parts|The Hard Parts of UI Development — Will Sentance (Frontend Masters)]]
- [[rick-and-morty-front-test|Rick and Morty Front-End Technical Test]]
- [[system-design-notes|Distributed System Design Notes]]
- [[system-design-old|System Design Study Plan]]
