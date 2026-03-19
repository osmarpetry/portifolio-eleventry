---
title: "Distributed System Design Notes"
date: 2025-04-16
tags:
  - software-architecture
  - backend
  - performance
description: "Notes on caching, load balancing, scalability, and consistency pillars for large-scale system design."
layout: post.njk
---

# Distributed System Design Notes

## 🎯 Summary
Design challenge: build scalable, resilient systems that handle millions of users with low latency, high availability, and consistent data. Techniques include geo-distributed servers, intelligent load balancing, caching strategies, and consistency models.

## 📚 Video breakdowns
### 1. Server Distribution & Caching
- Layered caching (browser, CDN, server) can cut backend load by ~70%.
- Geo-distributed servers + smart load balancing deliver <100 ms responses.
- Sizing formula: `Servers = Requests/sec ÷ (Throughput per server × Cache hit rate)`.

### 2. Load Balancing & Cache Strategies
- Least Connections algorithm reduces response time ~40% compared to Round Robin.
- Profile-based caching raises hit rate to ~85% for personalised platforms.
- Cost reduction formula: `(1 - Miss rate) × Average request cost`.

### 3. Horizontal vs Vertical Scalability
- Horizontal scale: add servers; unlimited growth but higher coordination complexity.
- Vertical scale: scale up hardware; simple but limited by physical CPU/memory caps.
- Cost crossover when QPS > 10k often favours horizontal scaling.

### 4. Replication & Consistency
- Synchronous replication for strong consistency (e.g., finance), asynchronous for availability (e.g., social feeds).
- CAP theorem trade-offs: choose two of Consistency, Availability, Partition tolerance.

## 🔗 Resources
- CDN overview: [https://en.wikipedia.org/wiki/Content_delivery_network](https://en.wikipedia.org/wiki/Content_delivery_network)
- Load balancing: [https://en.wikipedia.org/wiki/Load_balancing_(computing)](https://en.wikipedia.org/wiki/Load_balancing_(computing))
- CAP theorem references and scaling talks (see original note citations for video links).

## Related Notes

- [[backend-architectures|Backend architectures — monolith, services, serverless (maps + trade-offs)]]
- [[cqrs-critical-analysis|CQRS — Critical Analysis]]
- [[front-end-system-design|Front-End System Design — Evgenii Ray (Frontend Masters)]]
- [[frontend-system-design|Front-End System Design — Course Notes]]
- [[monoliths-vs-microservices|Monoliths vs Microservices — Article Review]]
- [[parnas-modularization|Modularization Criteria — Parnas 1972]]
- [[system-design-old|System Design Study Plan]]
