---
title: "XState — model UI behavior correctly and make it testable"
date: 2025-07-12
tags:
  - frontend
  - javascript
  - testing
description: "State modeling in React with XState: finite states, events, guards, effects. Clear behavior and cheap tests."
layout: post.njk
---

## Summary
- Model behavior with **finite states** and **events**.  
- Keep logic **outside** React components.  
- Add **guards**, **actions**, and **services** to reflect the real flow.  
- Test transitions as **pure functions**.

---

## Core ideas
- **States:** mutually exclusive (“idle”, “loading”, “success”, “failure”).  
- **Events:** what happens (“SUBMIT”, “RESOLVE”, “REJECT”, “RETRY”).  
- **Guards:** boolean conditions that gate transitions.  
- **Actions:** synchronous effects (assign, log).  
- **Services:** async work (fetch, timers).  
- **Determinism:** given `(state, event)` the next state is predictable.

---

## Quickstart (TypeScript)
```ts
import { createMachine, assign } from 'xstate';

type Ctx = { query: string; data?: unknown; error?: string };
type Ev =
  | { type: 'SUBMIT'; query: string }
  | { type: 'RESOLVE'; data: unknown }
  | { type: 'REJECT'; error: string }
  | { type: 'RETRY' };

export const searchMachine = createMachine<Ctx, Ev>({
  id: 'search',
  initial: 'idle',
  context: { query: '' },
  states: {
    idle: {
      on: {
        SUBMIT: {
          target: 'loading',
          cond: 'hasQuery',
          actions: 'setQuery',
        },
      },
    },
    loading: {
      invoke: { src: 'runSearch' },
      on: {
        RESOLVE: { target: 'success', actions: 'setData' },
        REJECT: { target: 'failure', actions: 'setError' },
      },
    },
    success: { on: { RETRY: 'idle' } },
    failure: { on: { RETRY: 'idle' } },
  },
},
{
  guards: {
    hasQuery: (_ctx, ev) => ev.type === 'SUBMIT' && ev.query.trim().length > 0,
  },
  actions: {
    setQuery: assign((ctx, ev) =>
      ev.type === 'SUBMIT' ? { ...ctx, query: ev.query } : ctx
    ),
    setData: assign((ctx, ev) =>
      ev.type === 'RESOLVE' ? { ...ctx, data: ev.data, error: undefined } : ctx
    ),
    setError: assign((ctx, ev) =>
      ev.type === 'REJECT' ? { ...ctx, error: ev.error, data: undefined } : ctx
    ),
  },
});
````

### React hook

```tsx
import { useMachine } from '@xstate/react';
import { searchMachine } from './machine';

export function SearchBox() {
  const [state, send] = useMachine(searchMachine, {
    services: {
      runSearch: async (ctx) => {
        const r = await fetch(`/api/search?q=${encodeURIComponent(ctx.query)}`);
        if (!r.ok) throw new Error('network');
        return r.json();
      },
    },
  });

  return (
    <div>
      {/* UI derived from state */}
      {state.matches('idle') && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const q = new FormData(form).get('q') as string;
            send({ type: 'SUBMIT', query: q });
          }}
        >
          <input name="q" placeholder="Search..." />
          <button type="submit">Go</button>
        </form>
      )}

      {state.matches('loading') && <p>Loading…</p>}
      {state.matches('success') && <pre>{JSON.stringify(state.context.data, null, 2)}</pre>}
      {state.matches('failure') && (
        <div>
          <p role="alert">Error: {state.context.error}</p>
          <button onClick={() => send({ type: 'RETRY' })}>Try again</button>
        </div>
      )}
    </div>
  );
}
```

---

## Unit tests without React

```ts
import { searchMachine } from './machine';
import { createActor } from 'xstate';

test('happy path', async () => {
  const actor = createActor(searchMachine.provide({
    guards: searchMachine.options!.guards!,
    actions: searchMachine.options!.actions!,
    services: {
      runSearch: async () => ({ ok: true }),
    },
  })).start();

  actor.send({ type: 'SUBMIT', query: 'xstate' });
  expect(actor.getSnapshot().value).toBe('loading');

  actor.send({ type: 'RESOLVE', data: { ok: true } });
  expect(actor.getSnapshot().value).toBe('success');
});
```

---

## When to use

- Flows with **3+ states** or tricky branches.
    
- You need **predictability**, clear **guards**, and **cheap tests**.
    
- You want a **single source of truth** for UI + business transitions.
    

---

## Template

```ts
createMachine<Ctx, Ev>({
  id: '<name>',
  initial: '<state>',
  context: {/* … */},
  states: {
    /* stateA: { on: { EVENT: { target: 'stateB', cond, actions } } } */
  },
}, { guards: {/* … */}, actions: {/* … */}, services: {/* … */} });
```

---

## References

- Course: **State Modeling in React with XState** — David Khourshid.
    
- Library: XState docs and @xstate/react examples.

## Related Notes

- [[enterprise-ui-development|Enterprise UI Development — Testing, Standards, and Ego Control]]
- [[form-validation-nextjs|Form Validation in Next.js]]
- [[react-forwardRef|Forwarding Ref]]
- [[javascript-performance-course|JavaScript Performance — Steve Kinney (Frontend Masters)]]
- [[javascript-ui-hard-parts|The Hard Parts of UI Development — Will Sentance (Frontend Masters)]]
- [[xteam-state-machine|State Machine XState]]
- [[xstate-state-machines|State Machines in JavaScript with XState]]
