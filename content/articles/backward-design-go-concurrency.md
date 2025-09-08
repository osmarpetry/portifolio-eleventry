---
title: Backward Design for Learning
date: 2025-09-01
tags:
  - "#resources"
  - "#golang"
  - "#workflow"
description: Deveficiente notes merged with an ordered step-by-step method and a Go concurrency worked example.
layout: post.njk
---

## Summary
- Start from the end. Define the final artifact and success criteria.
- Turn the goal into guiding questions. Gather 2–3 pieces of evidence per question.
- Build an outline from answers. Then draft.
- Log progress and communicate in bullets.
- Focus on application, not only exam tactics.

---

## Method (step-by-step — ordered)
1. **Define the outcome**
   - Final format: essay, solution, code, talk.
   - Success criteria: what a reviewer marks correct/complete.

2. **Form guiding questions**
   - 3–7 questions: what, why, how, trade-offs.

3. **Collect evidence (2–3 per question)**
   - Sources: books, docs, code, experiments, benchmarks.
   - Keep citations or reproducible steps.

4. **Build the outline**
   - Intro → Questions → Evidence → Synthesis → Conclusion.
   - Sequence ideas logically.

5. **Draft**
   - Write to teach. Short sentences. Compare alternatives.

6. **Review**
   - Each question answered with evidence.
   - Remove unsupported claims. Convert notes to final artifact.

7. **Progress logging and comms**
   - Daily: done, next, blockers.
   - Weekly: what changed in understanding + open risks.

> Key ideas from the notes: plan the end, pair each question with evidence, outline before writing, prioritize real application.

---

## Worked example: Go concurrency

### 1) Outcome and criteria
- **Artifact**: post + repo with worker pool, `context` cancellation, and timeouts.
- **Criteria**:
  - Clear choice between ad-hoc goroutines vs bounded pool.
  - Correct `context` usage. No goroutine leaks.
  - Simple benches plus failure cases.

### 2) Guiding questions → evidence → interim answers
**Q1. When to use free goroutines vs a worker pool?**  
- Evidence:
  - Go Blog on concurrency patterns.
  - `x/sync/errgroup` examples.
  - Microbench with 10k tasks.  
- Interim answer: free goroutines for few tasks or latency hiding. Pool for bounded parallelism and resource caps.

**Q2. How to cancel correctly?**  
- Evidence:
  - `context` docs.
  - Test ensuring all goroutines exit on cancel.
  - `pprof` before/after.  
- Interim answer: pass `context` top-down, check `<-ctx.Done()` in `select`, use `errgroup.WithContext`.

**Q3. How to handle timeouts and retries without leaks?**  
- Evidence:
  - `http.Client` timeouts.
  - `select` with `time.After`.
  - Race detector runs.  
- Interim answer: per-op `WithTimeout`, backoff with idempotency, always drain channels.

**Q4. Common pitfalls?**  
- Evidence:
  - Repro of fan-out leak without draining.
  - Memory spike with unbounded goroutines.
  - Data race caught by `-race`.  
- Interim answer: avoid unbounded fan-out, close producers, drain channels, guard shared state.

### 3) Outline built from answers
- **Intro**: problem + thesis (safe, bounded, cancelable concurrency).
- **Sec 1**: goroutines vs pool → trade-offs → microbench.
- **Sec 2**: cancellation with `context` → `errgroup` example.
- **Sec 3**: timeouts, retries, backoff → HTTP example.
- **Sec 4**: pitfalls and diagnostics → leaks, races, pprof.
- **Conclusion**: when to choose each pattern and anti-signals.
- **References**: official docs and repo links.

### 4) Draft checklist
- Each claim has 2–3 evidences above.
- Include one counterexample: “goroutine per request” leak.
- Write fail-first tests, then fix.

---

## Progress format for mentor (≤5 bullets)
- **Goal**: implement worker pool with cancellation.
- **Tried**: `errgroup` + bounded channel.
- **Worked**: tasks finish under cap; leak test passes.
- **Failed**: first version starved workers under backpressure.
- **Next**: HTTP timeout demo; question: best pattern for per-task timeouts inside a shared group?

---

## Final checklist before publish
- Thesis in 1–2 lines.
- Each section answers a guiding question.
- 2–3 evidences per claim.
- One limitation acknowledged.
- Conclusion states when **not** to use the pattern.

---

## Code pointers (repo)
- `pool.go`: bounded worker pool with `ctx`.
- `pool_test.go`: leak guard and `-race`.
- `cmd/httpdemo/main.go`: timeout + retry with backoff.
