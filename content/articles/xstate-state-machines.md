---
title: "State Machines in JavaScript with XState"
date: 2025-05-22
tags:
  - javascript
  - frontend
  - workflow
description: "Key lessons from David Khourshid’s XState course: modeling, parallel states, guards, and testing."
layout: post.njk
---

# State Machines in JavaScript with XState

## 🎯 Course snapshot
- Instructor: David Khourshid (Frontend Masters, December 2021)
- Focus: build predictable UI and backend flows using state machines/statecharts.
- Tools: XState, XState Inspect, model-based testing.

## 🧠 Senior-level questions
1. Why state machines instead of ad hoc flags? — explicit states/transitions avoid impossible combinations.
2. How are side-effects handled? — via `actions`, `invoke`, `assign` to keep logic pure.
3. What are guards? — transition conditions (`cond`) to ensure valid moves.
4. How to compose nested/parallel machines? — use hierarchical states and `type: 'parallel'` to isolate flows.
5. How to express CRUD flows? — state sequences (`idle → loading → success/failure` for each op) with services.
6. Actor model advantage? — spawn child actors for asynchronous work, simplifying cleanup and testing.

## 📚 Modules
- Modeling basics: events, states, transitions, statecharts.
- Vanilla JS implementation vs. XState API (`createMachine`, `interpret`).
- CRUD machine example: `invoke` for async calls, `assign` for context updates.
- Actions, context, guards, history states, final states.
- Parallel state machines and actor model (`invoke`, `spawn`).
- Testing strategies including model-based testing.

## 🛠 Example snippet
```js
const todoMachine = createMachine({
  id: 'todos',
  initial: 'idle',
  context: { todos: [], error: null },
  states: {
    idle: {
      on: { FETCH: 'loading' }
    },
    loading: {
      invoke: {
        src: 'fetchTodos',
        onDone: {
          target: 'success',
          actions: assign({ todos: (_, e) => e.data })
        },
        onError: {
          target: 'failure',
          actions: assign({ error: (_, e) => e.data })
        }
      }
    },
    success: { on: { ADD: 'adding' } },
    failure: { on: { RETRY: 'loading' } },
    adding: { /* additional nested states */ }
  }
});
```

## 🔧 Testing & tooling
- Use XState Inspect to visualise transitions.
- Model-based tests ensure all states/transitions are exercised.

## 🔗 References
- Course: [https://frontendmasters.com/courses/xstate-v2/](https://frontendmasters.com/courses/xstate-v2/)
- XState docs: [https://xstate.js.org/](https://xstate.js.org/)

## Related Notes

- [[forwarding-ref|Forwarding Ref]]
- [[frontend-system-design|Front-End System Design — Course Notes]]
- [[javascript-performance-course|JavaScript Performance — Steve Kinney (Frontend Masters)]]
- [[javascript-ui-hard-parts|The Hard Parts of UI Development — Will Sentance (Frontend Masters)]]
- [[state-machine-xstate|State Machine XState]]
- [[testing-enterprise-ui|Enterprise UI Testing & Quality Ramp-Up]]
- [[xstate-model-ui-bahavior|XState — model UI behavior correctly and make it testable]]
