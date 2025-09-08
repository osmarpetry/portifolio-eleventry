---
title: "Learning Machine — Goal Ladder + Acceptance Criteria (Ordered Plan)"
date: 2025-09-01
tags:
  - '#workflow'
  - '#resources'
  - '#project-management'
description: "Ordered method to set goals as ladders, define tools/conditions, use Bloom levels, Anki, GPT checks, and acceptance criteria."
layout: post.njk
---

## Summary
- Separate **theory** from **practice**.  
- Turn goals into a **ladder** of steps with **tools** and **conditions**.  
- Use **Bloom** to target depth.  
- Validate with **acceptance criteria**, **Anki**, and a **GPT review**.

---

## Method (step-by-step — ordered)
1. **Select a theory source** (book/course/paper).  
2. **Define the goal** and the **Bloom level** you will hit (Remember → Create).  
3. **Build the goal ladder** (small steps ↑), each with tools and conditions.  
4. **Write acceptance criteria** per step.  
5. **Execute practice** (PoC, refactor, teaching).  
6. **Run checks**: fitness metrics + GPT clarity + peer feedback.  
7. **Capture Anki cards** (terms, when/when-not, trade-offs).  
8. **Review weekly**; adjust steps, not the goal.

---

## Goal ladder template
Use this for every step on the ladder.

```

Step N —  
Tools: <SDKs, libs, docs, environments>  
Conditions: <context constraints, datasets, accounts, timebox>  
Acceptance:  
Evidence: <link to code/bench/diagram>

```

**Example (from notes):**
```

Step 1 — Use AWS SDK to do X in a sandbox account  
Tools: AWS SDK, IAM role, test bucket  
Conditions: sandbox only, 1-hour timebox  
Acceptance: CLI+unit test succeed; idempotent; no prod creds  
Evidence: repo link + test output

```

---

## Bloom level → deliverable
- **Remember/Understand:** glossary + 10 Anki cards.  
- **Apply:** runnable PoC with README.  
- **Analyze:** compare 2 approaches with metrics.  
- **Evaluate:** ADR with trade-offs and a decision.  
- **Create:** teach it (5–10 min talk or written guide).

---

## Context fit (10 steps to complex learning → your use)
- Always state **where** you’ll apply it (e.g., hospital vs battlefield analogy).  
- Add **constraints**: time, data volume, failure modes, stakeholders.  
- Each constraint becomes a **condition** in the ladder.

---

## Acceptance criteria checklist
- Specific behavior, metric, and scope.  
- Observable by test/benchmark/review.  
- Tied to the chosen Bloom level.  
- Includes **feedback** path.

---

## GPT validation prompts (paste with your goal)
- *“Assess clarity and SMARTness of this goal and steps. List missing conditions or ambiguous phrases. Propose tighter acceptance tests.”*  
- *“Given these Bloom targets, what deliverable is still missing?”*  
- *“Given this context, when **not** to use this approach?”*

---

## High Performance Cycle anchors (keep motivation)
- **Commitment & importance:** write *why now*.  
- **Self-efficacy:** start with small wins; grow difficulty.  
- **Feedback:** tests, code review, mentor check-ins.  
- **Task complexity:** one step per session.

---

## Daily/weekly operating rules
- Read sources **≥3×** before claiming “I didn’t understand.”  
- Keep **fixed routines** to cut decisions (diet/exercise/examples).  
- Set **motivating deadlines**; if you miss a slot, **don’t carry over**—schedule the next.  
- Maintain a **definitions doc/spreadsheet** for what you will learn.  
- Research **Schema Theory** for memory scaffolding (use to design cards/notes).

---

## Anki deck (build as you go)
- **Terms & signals:** when to use/avoid, trade-offs, examples.  
- **Communication:** dev vs C-team phrasing of the same decision.  
- **QA cards:** “Given this context, which condition is missing?”

**Card format**
```

Front: Scenario/question  
Back: Rule + 2 pros/2 cons + metric  
Tags: topic/chapter/bloom-level

```

---

## One-page goal example (fill and execute)
```

Goal: Teach a 10-min lesson on (Bloom: Create)

Ladder

1. Outline lesson (Tools: Notion; Conditions: 30 min) — Accept: 5 bullets
    
2. Build PoC demo (Tools: ; Conditions: sandbox) — Accept: runs end-to-end
    
3. Record 5-min dry-run — Accept: ≤2 stumbles; time ≤6 min
    
4. Deliver to 1 person — Accept: 1 actionable feedback item
    
5. Revise and publish — Accept: README + link
    

Checks

- Tests/benchmarks attached
    
- GPT clarity review result pasted
    
- 12+ Anki cards created
    

```

---

## References from notes
- *Fundamentals of Software Architecture* (Richards & Ford).  
- Bloom’s Taxonomy overview (Colorado College).  
- High Performance Cycle diagram (ResearchGate).  
- Dev.Eficiente “Máquina de aprender” lesson link.
