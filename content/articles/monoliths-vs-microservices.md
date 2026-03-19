---
title: "Monoliths vs Microservices — Article Review"
date: 2025-04-15
tags:
  - software-architecture
  - backend
description: "Comparison of Martin Fowler’s MonolithFirst vs Don’t Start with a Monolith and Phil Calçado’s migration story."
layout: post.njk
---

# Monoliths vs Microservices — Article Review

## 📄 Abstract
Compares three foundational texts: Martin Fowler’s “MonolithFirst”, Fowler’s follow-up “Don’t Start with a Monolith”, and Phil Calçado’s “How We Ended Up with Microservices”. Explores when to start with monoliths, risks of both approaches, and lessons from real migrations.

## 🔑 Key points
- **MonolithFirst (Fowler)**
  - Start with monoliths for simplicity: easier build, test, deploy.
  - Emphasise internal modularisation to enable future splitting.
  - Move to microservices only after hitting real scale/deploy/team pain.
- **Don’t Start with a Monolith**
  - Warns monoliths can become tangled; migrations later may be expensive.
  - Microservices can be right from day one for multiple teams or large scale.
  - Highlights risk of underestimating big monolith complexity.
- **How We Ended Up with Microservices (Calçado)**
  - SoundCloud migration story: monolith worked until scale and team coordination became bottlenecks.
  - Transition demanded heavy investment in infrastructure, automation, observability, and team culture.

## 🔗 Connections
- Ties to DDD and bounded contexts for modularisation.
- Relates to technical debt, modularity, evolving architectures.
- Complements DevOps discussions (deploy automation, autonomous teams).

## ❓ Questions
- How to know the right time to move from monolith to microservices?
- Which metrics indicate the monolith is a bottleneck?
- Best practices to modularise monoliths to ease future transitions?
- Pitfalls of adopting microservices prematurely?

## 📝 Personal reflections
- Align with Fowler: monoliths are great for validating ideas; modularise from day one.
- SoundCloud shows migration is hard, requiring organisational maturity.
- Microservices are not silver bullets; they raise operational complexity and only pay off with scale or domain separation.
- Biggest risk: unstructured monolith becoming impossible to split—modularise constantly.

## 📊 Comparison table
| Criterion | MonolithFirst | Don’t Start with a Monolith | How We Ended Up… |
| --- | --- | --- | --- |
| Focus | Simplicity & modularisation | Scalability & decoupling | Practical migration lessons |
| Best for | New projects, uncertain scope | Large teams, immediate scale | Fast-growing companies |
| Risks | Future coupling | Early operational complexity | Cost/difficulty of transition |

## 💻 Example: Modularising a Node.js monolith
```js
// payments-module.js
class PaymentService {
  constructor(repository) {
    this.repository = repository;
  }
  process(order) {
    // payment processing logic
  }
}

// users-module.js
class UserService {
  constructor(repository) {
    this.repository = repository;
  }
  register(userData) {
    // user registration logic
  }
}
```
**Tip:** Separate responsibilities into modules from the start.

## 📚 References
- Martin Fowler, “MonolithFirst” — [https://martinfowler.com/bliki/MonolithFirst.html](https://martinfowler.com/bliki/MonolithFirst.html)
- Martin Fowler, “Don’t Start with a Monolith” — [https://martinfowler.com/articles/dont-start-monolith.html](https://martinfowler.com/articles/dont-start-monolith.html)
- Phil Calçado, “How We Ended Up with Microservices” — [https://philcalcado.com/2015/09/08/how-we-ended-up-with-microservices.html](https://philcalcado.com/2015/09/08/how-we-ended-up-with-microservices.html)

## Related Notes

- [[agenda-gophers-workshop|Gophers Workshop — Deploy-First Go Architecture]]
- [[backend-architectures|Backend architectures — monolith, services, serverless (maps + trade-offs)]]
- [[cqrs-critical-analysis|CQRS — Critical Analysis]]
- [[introduction-to-be-archtitectures|Backend Architectures — history, case studies & dogfooding]]
- [[parnas-modularization|Modularization Criteria — Parnas 1972]]
- [[software-architecture-overview|Software Architecture Overview]]
- [[system-design-notes|Distributed System Design Notes]]
- [[system-design-old|System Design Study Plan]]
