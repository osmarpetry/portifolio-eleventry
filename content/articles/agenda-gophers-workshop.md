---
title: "Gophers Workshop — Deploy-First Go Architecture"
date: 2025-08-26
tags:
  - golang
  - software-architecture
  - devops
description: "Full-day workshop notes on domain-driven Go services, Kubernetes deployment, and scheduler tuning."
layout: post.njk
---

# Gophers Workshop — Deploy-First Go Architecture

Bill Kennedy’s full-day session merges “deploy-first” thinking with production-grade Go practices. Below is my structured recap, with added references for follow-up.

## 🗓 Session overview
- **Duration:** 8:30 AM – 5:30 PM (EDT)
- **Level:** Intermediate Go engineers shipping backend services
- **Theme:** Build Go services ready for production from day one; leverage Kubernetes and domain isolation.

## 🧱 Core modules
### 1. Design Philosophy & Deploy-First Mentality
- Ship a vertical slice early to validate build, deploy, and run pipelines.
- Structure projects into layers (app, domain, storage) with clear boundaries.
- Reference: John Ousterhout, *A Philosophy of Software Design* — keep modules deep, interfaces simple.

### 2. Kubernetes Foundations
- Review clusters, nodes, pods, and service abstractions relevant to Go microservices.
- Hands-on: author a Dockerfile, push to registry, deploy via manifest/helm.
- Checklist: liveness/readiness probes, resource requests, config maps, secrets.

### 3. Go Scheduler & Quotas
- Understand how goroutines map to OS threads; profile with `runtime/trace`.
- Tune `GOMAXPROCS` based on CPU quotas in K8s to avoid throttling.
- Use `pprof` and execution tracing to catch blocking operations.

### 4. Domain-Driven, Data-Oriented Architecture (DDDOD)
- Segregate app, business, and storage concerns; avoid leaky layers.
- Isolate domains with package boundaries to minimise ripple effects.
- Embed validation and firewalls between layers to protect invariants.

### 5. Hands-on Build
- Clone the [Ardan Labs service repo](https://github.com/ardanlabs/service) and follow the Makefile for lint/test automation.
- Extend the sample service with new domain logic, deploy to a personal K8s cluster, observe metrics.

## ✅ Decisions & Action Items
- Adopt deploy-first workflows for new Go/K8s services.
- Enforce domain isolation patterns and validation boundaries.
- Prepare environment prior to workshop:
  - [ ] Clone repo & run setup script
  - [ ] Configure local K8s (kind/minikube) or cloud sandbox
  - [ ] Review Makefile targets (`make test`, `make lint`, `make run`)

## ❓Open questions to explore
- Best migration path for legacy Go services into a DDDOD layout.
- Which observability stack slots in best (OpenTelemetry, Prometheus, Grafana) for these patterns.

## 🔗 Resources
- Ardan Labs: Domain-Driven, Data-Oriented Design ([article](https://www.ardanlabs.com/blog/) & [course](https://www.ardanlabs.com/events/domain-driven-data-oriented-design/)).
- CNCF: Kubernetes Production Best Practices.
- Dave Cheney: "Goroutines vs Threads" talk for deeper scheduler context.

## Related Notes

- [[backend-architectures|Backend architectures — monolith, services, serverless (maps + trade-offs)]]
- [[backward-design-go-concurrency|Backward Design for Learning]]
- [[dddod|Domain-Driven, Data-Oriented Design (DDDOD)]]
- [[package-oriented-design-example|Package Oriented Design — Go Example]]
- [[package-oriented-design|Package Oriented Design]]
