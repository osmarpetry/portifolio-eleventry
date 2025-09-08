---
title: "Fundamentals of Software Architecture — Ordered Study Plan + Anki"
date: 2025-09-01
tags:
  - '#software-architecture'
  - '#resources'
  - '#workflow'
description: "Book notes turned into practice: ordered method, Anki deck, chapter highlights, and proofs of mastery."
layout: post.njk
---

## Summary
- Separate **book points** from **practice**. Reading is not enough.  
- Use **Anki** for spaced repetition.  
- Communicate with **devs** and **C-team** using clear trade-offs and “why”.

---

## Method (step-by-step — ordered)
1. **Skim chapter → list terms and decisions.**
2. **Generate questions** you must answer for your context.
3. **Practice** on a small codebase (PoC or refactor).
4. **Capture proofs** (benchmarks, diagrams, ADRs).
5. **Make Anki cards** (definitions, trade-offs, heuristics).
6. **Review weekly**: what you can **explain**, **measure**, **decide**.

---

## Communication checklist (devs ↔ C-team)
- Lead with **goal → options → trade-offs → decision → why**.  
- Quantify with **fitness functions** or SLIs.  
- Keep a **one-page ADR** per decision.

---

## Anki deck (templates)
- **Definition:** “What is *architecture*?” → *Structure + characteristics + decisions + principles.*  
- **Law:** “Two fundamental laws?” → *Everything is a trade-off; why > how.*  
- **Heuristic:** “When NOT to use microservices?” → *Small team, low scale, weak ops maturity.*  
- **Quality → measure:** “How to test scalability?” → *Load profile + throughput/latency SLO + cost.*  
- **Connascence type → example.**  
- **Diagram level (C4) → purpose.**

Card format:
```

Front: Prompt / scenario  
Back: Decision rule + 2 pros / 2 cons + metric to verify  
Tag: chapter/topic

```

---

## Chapter highlights → practice

### 1) Introduction
- Architecture = **structure, -ilities, decisions, principles**.  
- Laws: **trade-offs** and **why**.  
**Practice:** Explain both laws with one example from your code.

### 2) Architectural thinking
- Analyze **trade-offs**, know the **business**, keep **breadth**, still **code**.  
**Practice:** For a new requirement, list 3 options and the deciding quality.

### 3) Modularity
- **Cohesion**, **coupling**, **connascence**.  
**Practice:** Refactor one module to reduce connascence level; note before/after.

### 4) Architectural characteristics (“-ilities”)
- Prioritize by context; choose the **least-bad** architecture.  
**Practice:** Pick top 3 -ilities for a product; define acceptance metrics.

### 5) Identifying -ilities
- Translate stakeholder phrases to explicit qualities.  
**Practice:** 15-min mock interview to elicit non-functionals; turn into a list.

### 6) Measuring & governing
- **Fitness functions** automate quality checks.  
**Practice:** Add a perf test or static rule to CI; store the threshold.

### 7) Scope of -ilities
- **Architecture quantum**: deployable, cohesive slice with its own qualities.  
**Practice:** Map quanta in your system; assign primary -ilities per quantum.

### 8) Component thinking
- Components with clear **responsibilities**; avoid **Entity Trap**.  
**Practice:** Draw a component diagram; rewrite one interface as capability.

### 9–18) Styles (quick cues)
- **Layered:** simple; risk of sinkhole.  
- **Pipes & Filters:** sequential data processing.  
- **Microkernel:** core + plugins.  
- **Service-Based:** coarse services, often shared DB.  
- **Event-Driven:** mediator vs broker; eventual consistency.  
- **Space-Based:** in-memory grid for extreme scale.  
- **SOA (orchestrated):** ESB governance.  
- **Microservices:** autonomy vs high ops complexity.  
**Practice:** For each style, write 2 pros/2 cons + one good fit scenario.

### 20) Risk analysis
- Impact × Probability; run **risk storming**.  
**Practice:** List top 3 risks for your current architecture and mitigations.

### 21) Diagrams & presentation
- Use **C4** levels; audience-appropriate detail; tell a story.  
**Practice:** Produce C1 and C2 diagrams for one service.

### 22–23) Effective architecture teams & leadership
- Profiles, negotiation, checklists, **DIKW** pyramid.  
**Practice:** Write a 5-bullet narrative to sell one decision to the C-suite.

---

## Proof of mastery (deliverables)
- 3 ADRs with **context → options → decision → consequences**.  
- 1 repo with a **fitness function** in CI.  
- C4 **C1/C2** diagrams in the README.  
- Anki deck export (`.apkg`) with ≥50 cards.

---

## Weekly cadence
- **Build:** 1 focused PoC or refactor.  
- **Measure:** add/adjust one fitness function.  
- **Explain:** 1-page write-up or 5-min loom to a peer.  
- **Review:** 3–4 Anki sessions (spaced).

---
