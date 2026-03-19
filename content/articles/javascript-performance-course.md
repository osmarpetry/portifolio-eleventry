---
title: "JavaScript Performance — Steve Kinney (Frontend Masters)"
date: 2025-04-15
tags:
  - javascript
  - performance
  - frontend
description: "Course notes covering V8 internals, render pipeline, load optimisation, and tooling to diagnose bottlenecks."
layout: post.njk
---

# JavaScript Performance — Steve Kinney (Frontend Masters)

Full-stack toolkit for diagnosing and optimising JS apps across engine, render, and network layers.

## 🎓 Senior-level prompts
- **V8 optimisation** — JIT prefers monomorphic shapes; mutating object shape (e.g., `delete`) triggers deoptimisation.
- **Layout thrashing** — avoid interleaving DOM reads/writes; batch operations (FastDOM, `requestAnimationFrame`).
- **`will-change` usage** — pre-promote elements to their own layer when frequent transforms are expected.
- **Babel tax** — transpilation for legacy browsers increases bundle cost; use targeted plugins.
- **Measure first** — rely on metrics, benchmarks, Lighthouse, DevTools, Bundle Analyzer before adjusting code.
- **Lazy vs split loading** — lazy loads only when needed; split bundles by route/module to speed initial render via caching.

## 📚 Course outline
### 🧠 Introduction to Performance (29 min)
- Why performance matters (UX, conversions).
- Three pillars: network, JavaScript, rendering.
- “Measure before you optimise” mantra.

### ⚙️ JavaScript Performance (1h26)
- Parsing/AST, compiler pipeline.
- Monomorphic vs megamorphic inline caches, hidden classes.
- Deoptimisation triggers (object shape changes, `arguments`, `delete`).
- Function inlining and prototype access patterns.

### 🎨 Rendering Performance (1h29)
- DOM/CSSOM/render tree pipeline, reflows.
- Layout thrashing mitigation, batching, FastDOM.
- Layers, compositor thread, GPU.
- `will-change` hints for frequent animations.

### 🚀 Load Performance (54 min)
- CDN placement, latency reduction.
- HTTP cache vs Service Workers.
- Lazy loading of components, dependency trimming.
- React Loadable and code-splitting strategies.

### 🔧 Tooling (16 min)
- Babel taxation, plugin choices.
- Prepack (experimental precompilation).

### 🎤 Conclusion (7 min)
- Key takeaways, continuous measurement mindset.
- Further resources for advanced tuning.

## 🔗 References
- [Frontend Masters — JavaScript Performance](https://frontendmasters.com/courses/performance/)
- Slides/materials available with course subscription.
- Published: April 2018 — Instructor: Steve Kinney (Temporal).

---
title: "JavaScript Performance — Course Notes"
date: 2025-04-05
tags:
  - '#javascript'
  - '#performance'
  - '#frontend'
description: "Highlights from Steve Kinney’s Frontend Masters course on diagnosing and improving JavaScript performance."
layout: post.njk
---

# JavaScript Performance — Course Notes

## 🎯 Course snapshot
- Instructor: Steve Kinney (Frontend Masters, April 2018)
- Duration: 8h+ deep dive into V8 internals, rendering, network, and tooling
- Toolkit: Webpack, Babel, React Loadable, DevTools

## 🧠 Senior-level questions
1. **V8 optimizations & deoptimization** — monomorphic call sites stay optimized; property deletions, type changes, or megamorphic usage trigger deopt.
2. **Layout thrashing** — alternating reads/writes forces repeated reflow; batch operations or use FastDOM.
3. **`will-change` usage** — hint to promote elements to new layers when transforms/opacity changes are expected.
4. **Babel impact** — transpilation increases bundle size and parse time; use targeted presets/plugins.
5. **Performance measurement** — collect metrics before optimizing; leverage DevTools, Web Vitals, custom profiling.
6. **Lazy vs split loading** — lazy loads on-demand components; code-splitting pre-chunks bundles for faster first load.

## 📚 Course structure
- **Intro**: why performance matters, categories (network, JS, render)
- **V8 internals**: parsing, AST, hidden classes, inline caches, garbage collection
- **Rendering pipeline**: DOM/CSSOM, render tree, layout/paint/composite, GPU threads
- **Load performance**: CDN, HTTP/2, caching, lazy loading, dependency trimming
- **Tooling**: Webpack analysis, Babel config, Prepack (experimental)
- **Closing**: continuous measurement mindset, additional resources

## 🔧 Practical tips
- Use Webpack Bundle Analyzer for visualising bundle weight.
- Audit dependencies; import specific functions (tree-shaking friendly).
- Implement service workers for offline caching and quicker repeat loads.
- Monitor runtime with `PerformanceObserver`, Chrome DevTools, Lighthouse.

## 🔗 Resources
- Frontend Masters course: [https://frontendmasters.com/courses/performance/](https://frontendmasters.com/courses/performance/)
- Google Web Fundamentals: Web Vitals guidance and case studies.
- Addy Osmani’s performance articles and tooling guides.

## 🔗 References
- Steve Kinney, *JavaScript Performance* (Frontend Masters, 2018).
- Google Web Fundamentals — Web Vitals documentation.
- Addy Osmani, *The Cost of JavaScript*.

## Related Notes

- [[enterprise-ui-development|Enterprise UI Development — Testing, Standards, and Ego Control]]
- [[forwarding-ref|Forwarding Ref]]
- [[front-end-system-design|Front-End System Design — Evgenii Ray (Frontend Masters)]]
- [[frontend-system-design|Front-End System Design — Course Notes]]
- [[javascript-technical-questions|JavaScript Technical Questions]]
- [[javascript-ui-hard-parts|The Hard Parts of UI Development — Will Sentance (Frontend Masters)]]
- [[optimizing-react-with-memoization|Optimizing React with Memoization]]
- [[webpack-optimization|Webpack Optimization]]
