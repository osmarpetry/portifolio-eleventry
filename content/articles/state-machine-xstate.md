---
title: "State Machine XState"
date: 2025-01-15
tags:
  - '#state-machine'
  - '#xstate'
  - '#javascript'
  - '#state-management'
description: "State Machine XState"
layout: post.njk
---

# State Machine XState

## Why state machines
State machines make implicit UI states explicit. They eliminate impossible states and race conditions by modeling events, transitions, and guards in one place.

## XState essentials
- Model states (`idle`, `loading`, `success`, `error`) and transitions triggered by events.
- Use guards for conditional transitions; actions for side-effects; services for async work.
- Visualize machines to align product and engineering on behaviors.

```ts
import { createMachine } from 'xstate';

export const fetchMachine = createMachine({
  id: 'fetch',
  initial: 'idle',
  states: {
    idle: {
      on: { FETCH: 'loading' }
    },
    loading: {
      invoke: {
        src: 'load',
        onDone: { target: 'success', actions: 'setData' },
        onError: { target: 'error', actions: 'setError' }
      }
    },
    success: { on: { REFRESH: 'loading' } },
    error: { on: { RETRY: 'loading' } }
  }
});
```

## React integration
- Use `@xstate/react`’s `useMachine(machine, { services, actions })` to wire data and effects.
- Co-locate the machine with the UI for small components; move to a `/machines` folder for shared flows.

## When to use
- Complex async flows, multi-step forms, retries/cancellations, and “wizard” UIs.
- Shared sequences across screens (auth, upload, checkout) that benefit from a single source of truth.

## References
- What/why state machines: https://blog.smartive.ch/what-state-machines-are-and-why-we-use-them-5ea55183be09
- XState docs: https://xstate.js.org/docs/
