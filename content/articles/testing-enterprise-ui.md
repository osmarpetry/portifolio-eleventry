---
title: "Enterprise UI Testing & Quality Ramp-Up"
date: 2025-06-12
tags:
  - testing
  - frontend
  - typescript
  - workflow
description: "Testing strategy, tooling, and CI setup for React/TypeScript enterprise projects based on Steve Kinney’s course."
layout: post.njk
---

# Enterprise UI Testing & Quality Ramp-Up

## TL;DR
- Recap from Steve Kinney’s Enterprise UI Testing course (May 2023).
- Covers unit/component/E2E/accessibility testing with Vitest, Testing Library, Playwright, axe.
- Includes CI setup (GitHub Actions), coverage, mocking with MSW, standards via ESLint + Husky.
- Use as quick ramp-up before starting a new React testing stack.

## 🎯 Course context
- Instructor: Steve Kinney (Frontend Masters, May 2023)
- Stack: React, TypeScript, Vitest, Testing Library, Playwright, ESLint, Husky, lint-staged, MSW, Axe.

## 🧪 Test types & tools
| Type | Purpose | Tooling |
| --- | --- | --- |
| Unit | Pure functions, logic | Vitest |
| Component | DOM interactions | Testing Library |
| Integration | Modules working together | Vitest + MSW |
| E2E | Full browser flows | Playwright |
| Accessibility | Detect issues | axe-core + Testing Library |

## ⚙️ Vitest setup
```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
npx vitest --ui
```
Configure `testEnvironment: 'jsdom'` (or `happy-dom`) in `vitest.config.ts`.

## 🧩 Component testing tips
- Use `screen.getBy...`, `fireEvent`, `userEvent` for interactions.
- Create test utilities to reuse render logic.
- Reset DOM/mocks before each test.
- Await asynchronous logic with `waitFor`, `findBy...`, fake timers when needed.

## 🔄 Continuous Integration (GitHub Actions)
```yaml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npm run test -- --coverage
```
Cache dependencies with `actions/cache` for faster runs.

## 📦 Coverage
Add to `vitest.config.ts`:
```ts
coverage: {
  reporter: ['text', 'json', 'html'],
  include: ['src/**/*.{ts,tsx}'],
}
```
Upload artifacts in CI for coverage reports.

## 🪄 Mocking & spying
| Scenario | Tool |
| --- | --- |
| Mock module | `vi.mock('module')` |
| Spy on functions | `vi.spyOn(obj, 'method')` |
| Fake timers | `vi.useFakeTimers()` |
| Mock network | Mock Service Worker (MSW) |

## 🌐 Playwright (E2E)
```bash
npx playwright install
npx playwright codegen <url>
```
Supports screenshots, HAR traces, API mocking.

## ♿ Accessibility
```bash
npm install --save-dev @axe-core/react
```

```ts
import { toHaveNoViolations } from 'jest-axe';
expect(await axe(container)).toHaveNoViolations();
```

## ✅ Code standards
```bash
npm install --save-dev eslint husky lint-staged
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"
```

`.lintstagedrc`:
```json
{
  "*.{ts,tsx}": ["eslint --fix", "vitest run --changed"]
}
```

## 🧠 Quick reminders
- Group tests with `describe` blocks.
- Mock network calls, not DOM interactions.
- CI should run linters, tests, coverage.
- Use `@testing-library/user-event` for realistic user flows.
- Keep tests fast; prefer component/unit tests before E2E.

## Related Notes

- [[enterprise-ui-development|Enterprise UI Development — Testing, Standards, and Ego Control]]
- [[form-validation-nextjs|Form Validation in Next.js]]
- [[frontend-system-design|Front-End System Design — Course Notes]]
- [[tdd-systematic-review|TDD Effects on Quality and Productivity]]
- [[testing-concepts-notes|Testing Concepts Notes]]
- [[xstate-model-ui-bahavior|XState — model UI behavior correctly and make it testable]]
- [[xstate-state-machines|State Machines in JavaScript with XState]]
