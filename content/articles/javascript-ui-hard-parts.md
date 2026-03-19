---
title: "The Hard Parts of UI Development — Will Sentance (Frontend Masters)"
date: 2025-04-15
tags:
  - javascript
  - frontend
  - system-design
description: "Course summary on building UIs from first principles: DOM, virtual DOM, data binding, reactivity, and performance."
layout: post.njk
---

# The Hard Parts of UI Development — Will Sentance (Frontend Masters)

Deep dive into how UIs work without frameworks: DOM internals, data flow, virtual DOM, state management, and performance optimisations.

## 🎓 Senior-level interview prompts
- **Virtual DOM** — JS representation of UI; diff old vs new to update only what changed.
- **Data ↔ DOM binding** — callbacks/setters update state, trigger `dataToView` re-render.
- **Separation of concerns** — split data logic from view rendering for predictability.
- **Functional components** — functions returning DOM linked to state; foundation of React-style components.
- **Hooks concept** — functions intercept state changes to trigger updates/side effects.
- **Reconciliation (diffing)** — compare old/new virtual DOM, patch only changed nodes.

## 📚 Module breakdown
### 🧭 Introduction (7 min)
- Objectives: understand DOM, virtual DOM, render pipeline.
- Emphasises communication + abstraction skills.

### 🎨 State & visualization (1h)
- User ↔ data ↔ render loop.
- DOM (C++ structures), CSSOM, render pipeline.
- How user actions propagate through state to UI.

### 🧩 JavaScript, DOM & events (38 min)
- Browser internals: HTML + JS engines, WebIDL/WebCore.
- Event storage/execution in C++.

### 🔁 Data binding (37 min)
- One-way binding: data → view.
- `dataToView` function centralises updates.
- User input updates state, triggers re-render.

### 🪞 Virtual DOM (1h02)
- Declarative UI representation in JS.
- Automatic render with loops/timers.
- Functional components + template strings for readability.

### 🧱 Composition & componentisation (26 min)
- Lists via `map`, composition patterns, spread props.
- Event API for generic UI interactions.

### ⚡ Performance and hooks (30 min)
- Update-on-demand via `updateDOM()` abstraction.
- Hooks reacting to state changes (`useEffect` analogies).
- Diffing strategies to avoid redundant renders.

### ✅ Conclusion (3 min)
- Declarative UIs, single source of truth, predictable composition, reconciliation benefits.

## 🔗 Resources
- [Frontend Masters — The Hard Parts of UI Development](https://frontendmasters.com/courses/hard-ui/)
- Published: June 2023 — Instructor: Will Sentance (Codesmith).
- Slides/exercises available with subscription.

---
title: "The Hard Parts of UI Development — Course Notes"
date: 2025-05-10
tags:
  - '#frontend'
  - '#javascript'
  - '#workflow'
description: "Will Sentance’s course on building declarative UIs from first principles."
layout: post.njk
---

# The Hard Parts of UI Development — Course Notes

## 🎯 Overview
- Instructor: Will Sentance (Frontend Masters, June 2023)
- Goal: understand UI fundamentals from DOM manipulation to virtual DOM, data binding, and reconciling updates.
- Audience: senior engineers who need predictable, performant UI architecture.

## 🧠 Senior-level questions
1. **Virtual DOM benefits** — diffing avoids full DOM re-renders by applying minimal changes.
2. **State ↔ DOM binding** — callbacks/setters update state and trigger `dataToView` re-render pipeline.
3. **Separating data & view** — reduces repetition, ensures predictable updates, supports single source of truth.
4. **Functional UI components** — pure functions mapping state to UI; basis for modern component architectures.
5. **Hooks concept** — functions capturing state changes or side-effects, auto-subscribing to updates.
6. **Diffing algorithm** — compare prev/new virtual trees, update only nodes that changed.

## 📚 Course modules
- **Introduction**: DOM, Virtual DOM, render cycle, state management
- **State & view**: linking data updates to UI redraws
- **JavaScript & DOM internals**: how browser engines expose APIs
- **Events**: event handling via WebIDL/WebCore, callback storage
- **Data binding**: one-way binding patterns, central `dataToView`
- **Virtual DOM**: building a diffing system with JS objects
- **Componentization**: lists, composition, events across components
- **Performance**: targeted updates, hooks, precise reactivity
- **Wrap-up**: consolidating declarative UI principles

## 🔧 Takeaways
- Construct UI from first principles to understand framework abstractions.
- Manage state transitions explicitly to avoid hidden mutations.
- Use diffing to minimize DOM work and maintain performance.

## 🔗 Resources
- Course: [https://frontendmasters.com/courses/hard-ui/](https://frontendmasters.com/courses/hard-ui/)
- Codesmith resources on UI architecture and functional patterns.

## Related Notes

- [[closures-and-curries|Closures and Curries]]
- [[execution-contexts-hoisting-scopes-and-closures|Execution Contexts, Hoisting, Scopes, and Closures]]
- [[forwarding-ref|Forwarding Ref]]
- [[front-end-system-design|Front-End System Design — Evgenii Ray (Frontend Masters)]]
- [[javascript-performance-course|JavaScript Performance — Steve Kinney (Frontend Masters)]]
- [[rick-and-morty-front-test|Rick and Morty Front-End Technical Test]]
- [[vuejs|Vue.js]]
