---
title: Platform Roadmap Course — Study Plan + Reading Pack (Requirements & Code Quality)
date: 2025-09-01
tags:
  - "#workflow"
  - "#shape-up"
description: Ordered plan to map current state, gaps, and deliver a platform roadmap using evidence-based requirements engineering and code-quality research.
layout: post.njk
---

## Summary
- Course goal: **show the path** to build the platform.  
- Deliver a **study roadmap** capturing *what we have*, *what is out*, and *what we still can’t do*.  
- Use scientific RE material + code-quality research to **raise story quality** and **reduce rework**.

---

## Objective (outcome)
Produce:
1) **Platform Roadmap v1** (themes → milestones),  
2)  **Refined Backlog** where stories follow the checklist below, and  
3)  **Quality Playbook** (testing, refactoring, pairing, CDD).

**Done when:** all acceptance items in “Deliverables & acceptance” pass.

---

## Ordered plan (step-by-step)
1. **Inventory & scope** → list in/out/not-yet for the platform. Timebox 2h.  
2. **Stakeholder pass** → capture requester context & benefits per theme.  
3. **Read core RE pack** (below). Summarize each in 1 page.  
4. **Adopt story template** (below) and rewrite the first 10 stories.  
5. **Slice with Shape Up** → one bet/slice spec for a critical theme.  
6. **Code-quality sprint** → read & extract rules (aging, refactor, pairing, readability).  
7. **CDD track** → choose **Cognitive-Driven** *or* **Component-Driven** and ship a tiny PoC.  
8. **Publish v1** → roadmap, backlog sample, playbook, and references.

---

## Deliverables & acceptance
- **Platform Roadmap v1**  
  - Horizons (near/next/later) with 3–7 themes, milestones, risks.  
  - *Acceptance:* date ranges, owner per theme, explicit “out of scope”.

- **Backlog sample (≥10 stories) using the checklist**  
  - *Acceptance:* every story has motive, benefit, requester context, mandatory/optional, error flows, dev view, template adherence, and dev path.

- **Shape Up bet doc (1 slice)**  
  - *Acceptance:* appetite, boundaries, rabbit holes, fat marker sketch.

- **Quality Playbook (8–12 rules)**  
  - *Acceptance:* cites at least 5 papers/books from the pack with one rule each.

- **CDD PoC** (Cognitive- or Component-Driven)  
  - *Acceptance:* runnable demo + README explaining the principle and when not to use it.

- **Evidence folder**  
  - *Acceptance:* 1-page summary per reading + links to notes/Anki.

---

## Story template (use for every ticket)
```

Title: <as a ..., I want ... so that ...>

1. Motive / problem:
    
2. Expected benefit / outcome:
    
3. Requester context (who asked, where it runs, constraints):
    
4. Rules: Mandatory | Optional | Error flows
    
5. Developer view (data, APIs, states, observability):
    
6. Template adherence (does it fit our standard? yes/no + why):
    
7. Dev path (happy path steps + rollback):
    

Acceptance criteria:

-  Behavior:
    
-  Scope & constraints:
    
-  Test notes (unit/e2e/fixtures):  
    Evidence: <link to design/doc/PR>
    

```

---

## Research pack (from notes)

### Requirements Engineering — core papers
- **Naming the Pain in Requirements Engineering (NaPiRE).**  
- **Integrated Requirements Engineering: A Tutorial** (Somerville, 2005).  
- **Status Quo in Requirements Engineering: A Theory and a Global Family of Surveys.**

**Helpful books**
- *Software Engineering* — requirements chapter.  
- *Shape Up* (37signals) — slicing bets, keeping only what matters.

### Code quality & design degradation — papers
- **Software Aging.**  
- **Design erosion: problems and causes.**  
- **An Empirical Study of Design Degradation: How Software Projects Get Worse Over Time.**  
- **Dynamics of Software Maintenance.**  
- **Why We Refactor? Confessions of GitHub Contributors.**  
- **Are Two Heads Better than One? On the Effectiveness of Pair Programming.**  
- **Assessing Practitioner Beliefs about Software Engineering** (2020).  
- **What Improves Developer Productivity at Google? Code Quality.**

### CDD tracks (pick one or compare)
- **Cognitive-Driven Development (readability/refactor focus)**  
  - *Toward a definition of cognitive-driven development.*  
  - *To What Extent Cognitive-Driven Development Improves Code Readability?*
- **Component-Driven Development**  
  - Build a small feature with isolated UI/domain components and states.

### Books that help (code quality/design)
- *Effective Software Testing* (Aniche).  
- *Building Maintainable Software.*  
- *Tidy First?*  
- *Simple Object-Oriented Design* (Aniche).  
- *Práticas de código para Devs Eficientes* (ebook).  
- *Philosophy of Software Design.*  
- *Good Code, Bad Code.*

---

## One-page paper summary template
```

Paper: Year:  
Problem it targets (1–2 lines):  
Key findings (bullets):  
Implications for our platform (rules we adopt):  
Limits / when not to apply:  
Reference note:

```

---

## Weekly cadence
- **Mon:** roadmap/backlog work (2h).  
- **Wed:** reading + 1-page summary (1h).  
- **Fri:** implement 1 story or CDD PoC step (1h).  
- **Review:** end of week — update roadmap & playbook.

---

## Tools
Linear/Jira for backlog • Notion/Docs for summaries • Anki for cards • Repo for PoCs.
