---
title: "Package Oriented Design"
date: 2025-05-12
tags:
  - golang
  - software-architecture
description: "Bill Kennedy’s approach to Go package design: purpose-driven packages, clear boundaries, and modular structure."
layout: post.njk
---

# Package Oriented Design

## 🧭 Summary
Bill Kennedy’s Package Oriented Design (POD) emphasises starting and ending architectural decisions at the package level. Each package should provide a focused solution for a domain problem to keep code composable, testable, and maintainable.

## 🧾 Definition
POD identifies where each package belongs and the design rules it follows. Packages act as the building blocks of Go applications, supporting composition and isolation.

## 🛠 Guiding philosophy
- **Purpose over storage**: packages should provide behaviour, not just hold utilities.
- **Encapsulation**: expose only necessary APIs, hide implementation details.
- **Portability**: consistent package structure eases discussions and reuse across projects.
- **Layering**: structure code into purposeful layers (e.g., kit, application, service) with dedicated interaction rules.

## ✅ Benefits
- **Modularity**: domain-specific packages reduce unwanted coupling.
- **Maintainability**: clear responsibilities make testing and refactoring easier.
- **Scalability**: well-defined package boundaries support growth in complexity and team size.

## 📦 Package responsibilities
- Live in one place per domain (e.g., `internal/user`, `internal/platform`).
- Provide a specific solution; avoid generic buckets like `common` or `util`.
- Export only the API needed by consumers and keep implementation details private.
- Name files to reflect behaviour so callers understand what the package delivers.

## 🏗 Layering cheat-sheet
- **kit**: shared libraries with zero dependency on application packages.
- **application**: domain/business logic that depends on kit.
- **service**: entrypoints (`cmd/...`) that compose everything and wire external systems; can depend on both kit and application.

## 📦 Example structure
- `kit` project for shared libraries.
- Multiple `application` projects depending on `kit`, organised by business domain.
- Service layer (e.g., `cmd/api`) wires repositories, services, and handlers following the POD rules.

## 🔗 References
- Bill Kennedy, “Package-Oriented Design” — Ardan Labs blog & talks.
- Ardan Labs Service repository as a POD example.

## Related Notes

- [[agenda-gophers-workshop|Gophers Workshop — Deploy-First Go Architecture]]
- [[backward-design-go-concurrency|Backward Design for Learning]]
- [[books-to-study|Books & Papers to Study]]
- [[dddod|Domain-Driven, Data-Oriented Design (DDDOD)]]
- [[package-oriented-design-example|Package Oriented Design — Go Example]]
- [[software-architecture-overview|Software Architecture Overview]]
