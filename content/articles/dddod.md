---
title: "Domain-Driven, Data-Oriented Design (DDDOD)"
date: 2025-06-01
tags:
  - golang
  - software-architecture
description: "Bill Kennedy’s Go-centric take on DDD focusing on data flow, validation, and layered boundaries."
layout: post.njk
---

# Domain-Driven, Data-Oriented Design (DDDOD)

## 🔍 Overview
Bill Kennedy adapts Domain-Driven Design principles to Go by emphasising data flow and simplicity. DDDOD keeps the focus on reliable data transformations while preserving idiomatic Go patterns.

## 🧩 Why not pure DDD?
- Traditional DDD can introduce excessive abstraction and ceremony in Go projects.
- Too many layers and interfaces obscure intent, reducing maintainability.

## 🏗 Core pillars
- **Data-oriented design**: prioritise data models and their transformations; ensure data can cross layers safely.
- **Validation & trust**: embed validation logic early; fail fast to maintain integrity.
- **Structured layers**: app → business → storage; each layer defines clear contracts and side-effects.
- **Domain isolation**: separate bounded contexts to prevent accidental coupling and cascading failures.

## 🛠 Implementation tips
- Use packages to reflect domains (`internal/user`, `internal/auth`); avoid grab-bag packages like `common`.
- Expose only necessary APIs; keep implementation details private.
- Guard entry points with validation and logging to catch anomalies early.
- Leverage functional options or constructors to initialize services with dependencies explicitly.

## 📚 References
- Bill Kennedy, “Domain-Driven, Data-Oriented Design” talk and articles (Ardan Labs).
- Ardan Labs Service repository as a starter kit: [https://github.com/ardanlabs/service](https://github.com/ardanlabs/service)

## Related Notes

- [[agenda-gophers-workshop|Gophers Workshop — Deploy-First Go Architecture]]
- [[backward-design-go-concurrency|Backward Design for Learning]]
- [[books-to-study|Books & Papers to Study]]
- [[cqrs-critical-analysis|CQRS — Critical Analysis]]
- [[domain-driven-design-tackling-complexity-in-the-heart-of-software|Domain-Driven Design: Tackling Complexity in the Heart of Software]]
- [[package-oriented-design-example|Package Oriented Design — Go Example]]
- [[package-oriented-design|Package Oriented Design]]
