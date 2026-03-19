---
title: "Databases for Front-End Developers"
date: 2025-09-19
tags:
  - frontend
  - databases
  - resources
description: "Primer on ACID guarantees, primary database families, and hands-on steps to build intuition as a front-end engineer."
layout: post.njk
---

# Databases for Front-End Developers

## 🌐 Why front-end engineers should care
- Modern front-ends design caching, optimistic updates, and offline modes that depend on understanding backend storage semantics.
- Knowing the trade-offs between database families decodes API constraints (eventual consistency, limited transactions, query costs).

## 🧱 Core database guarantees (ACID)
- **Atomicity** — operations succeed or rollback entirely; consider when batching UI changes into a single commit.
- **Consistency** — transactions move data between valid states; align client validations with backend invariants.
- **Isolation** — concurrent transactions behave as if executed sequentially; surface conflicts to users when isolation levels are relaxed.
- **Durability** — once committed, data survives failures; informs UX for confirmation states and retries.

## 🗂 Primary database families
| Family | Example platforms | Strengths | Common front-end impact |
| --- | --- | --- | --- |
| **Document / NoSQL** | MongoDB, Firestore | Flexible schema, JSON-like storage, rapid iteration | Schemaless payloads; version documents to avoid breaking changes. |
| **Wide column** | Cassandra, Bigtable | Huge throughput, event logs, time-series | Favor append-only writes; design UIs around eventual consistency. |
| **Search engines** | Elasticsearch, Meilisearch | Full-text, relevance scoring | Query latency tied to index freshness; show “results may vary” messaging. |
| **Multi-model** | ArangoDB, Cosmos DB | Graph + document + key-value under one roof | Coordinate query capabilities with product discovery features. |

> Tip: map each API you consume to its underlying storage—knowing the source clarifies pagination, filtering, and consistency expectations.

## 🧪 Hands-on practice plan
1. **Spin up MongoDB locally**
   ```bash
   docker run --name test-mongo -dit -p 27017:27017 --rm mongo:4.4.1
   docker exec -it test-mongo mongo
   ```
2. Insert JSON documents, then query them via the shell and a minimal Node/Go script; observe how missing fields are tolerated.
3. Compare with a relational sandbox (e.g., SQLite + Prisma) to feel the difference in migrations and validation.
4. Record API responses before/after writes to see how each system handles transactions and latency.

## 📓 Study checklist
- [ ] Identify which services in your stack rely on ACID vs eventual consistency.
- [ ] Prototype a small feature twice: once assuming strict transactions, once assuming eventual consistency.
- [ ] Document pagination/ordering expectations for APIs backed by search engines or sharded stores.

## 🔗 References
- Brian Holt, *Complete Intro to Databases* — installation & query walkthrough: https://btholt.github.io/complete-intro-to-databases/installation-notes
- Martin Kleppmann, *Designing Data-Intensive Applications* — consistency models and real-world patterns.
- Prisma Data Guide — approachable explanations for SQL + NoSQL trade-offs.

## Related Notes

- [[12-principles-of-animation|12 Principles of Animation]]
- [[algorithms-course-intro|Design & Analysis of Algorithms — Course Overview]]
- [[backward-design-go-concurrency|Backward Design for Learning]]
- [[books-to-study|Books & Papers to Study]]
- [[front-end-system-design|Front-End System Design — Evgenii Ray (Frontend Masters)]]
- [[frontend-system-design|Front-End System Design — Course Notes]]
- [[good-publications-to-read|Good Publications to Read]]
