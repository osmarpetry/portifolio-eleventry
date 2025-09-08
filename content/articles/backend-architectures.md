---
title: "Backend architectures — monolith, services, serverless (maps + trade-offs)"
date: 2025-09-01
tags:
  - '#backend'
  - '#devops'
  - '#performance'
description: "How to pick an architecture by performance, cost, DX, and failure isolation — with quick maps for each."
layout: post.njk
---

## Summary
- Keep a **map per architecture** and compare **performance, cost, developer experience, and failure isolation**.  
- Favor **team independence** (deploy without waiting on others).  
- Good defaults: **FE = S3/CF static hosting**; API via **gateway**; choose **mono → services → serverless** as needs grow.

---

## Decision factors (score each 1–5)
- **Perf/scale:** latency, burst, cold start.
- **Cost:** infra + ops + on-call.
- **DX:** speed to ship, local dev, cognitive load.
- **Failure isolation:** blast radius when pieces fail.

| Style         | Perf/Scale | Cost | DX (speed) | Failure isolation | When it shines |
|---|---:|---:|---:|---|
| **Monolith**  | 3 | 3 | **5** | 2 | Ship v1 fast; one team; tight coupling OK |
| **Services**  | 4 | 3 | 3 | 4 | Multiple teams; clear bounded contexts |
| **Serverless**| 4* | **5** (pay-per-use) | 4 | **5** | Spiky/unknown load; event-driven; minimal ops (*watch cold starts) |

---

## Maps (one per architecture)

### Monolith
```

Users → CDN → FE (S3/CloudFront)  
│  
▼  
LB → App (Monolith) → DB

```

### Distributed / services
```

Users → CDN → FE (S3/CloudFront)  
│  
▼  
API Gateway  
├── Service A (container) → DB A  
└── Service B (container) → DB B

```

### Serverless (from notes)
```

Users → FE (serverless S3/CF)  
Users → API Gateway → Lambda(AddToCart / ProcessOrder) → DB (serverless)

```

---

## Guidance
- **Start mono, extract services when teams/throughput demand it.**
- Ensure each team can **deploy independently** (no “everyone must ship together”).
- For serverless, design around **events**, cache hot paths, and budget for **cold-start mitigation**.
- Always document: **perf, cost, DX, failure plan** for the chosen map; note what happens **if a piece falls**.

---
