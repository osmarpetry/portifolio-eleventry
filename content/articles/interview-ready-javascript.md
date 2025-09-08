---
title: "Interview-ready JavaScript Plan — Kyle Simpson v2 (plus cross-skill map)"
date: 2025-09-01
tags:
  - '#javascript'
  - '#career'
  - '#devops'
description: "Revise JS core (scope/closure/this/prototypes) for interviews, add AWS/Mobile/Go touchpoints, and craft a clear professional brand."
layout: post.njk
---

## Summary
- Tighten **JS fundamentals** with Kyle Simpson’s track: *scope → closure → this → prototypes → modules (IIFE vs block scope)*.  
- Build **interview answers** + **1–2 code examples** each.  
- Create a **clear brand line**; map **AWS/Mobile/Go** talking points.

---

## 7-day revision (45–60 min/day)
1. **Scope & Block Scoping**  
   - *Prompt:* “Instead of an IIFE?” → Use `{}` + `let/const` for local scope; IIFE still useful for older targets.  
   - *Snippet:*  
     ```js
     { 
       let hidden = 1; 
     } // not on window / outer scope
     ```

2. **Closures**  
   - *Answer (≤20s):* Closure = function + its lexical env, enabling private state/deferred access.  
   - *Snippet:*  
     ```js
     function counter() {
       let n = 0;
       return () => ++n;
     }
     ```

3. **this & call/apply/bind**  
   - *Answer:* `this` = call-site bound; arrow keeps lexical `this`. `call/apply/bind` set it explicitly.  

4. **Prototype & OO delegation**  
   - *Answer:* Objects delegate via `[[Prototype]]`; methods shared on prototype save memory.  

5. **Modules & Patterns**  
   - *Answer:* Prefer ES Modules; IIFE useful for immediate execution/legacy bundling.  

6. **Data Structures & Perf (light)**  
   - Pick 2: array vs map/set; big-O for common ops.  

7. **Mock Interview**  
   - Record 10–15 min, review and extract 3 improvements.  

---

## Interview Quick Cards
- **Closure:** “A closure lets a function remember variables from its definition site.”  
- **Block vs IIFE:** “Modern JS uses block scope with `let/const`; IIFE is a legacy isolation pattern.”  
- **this:** “`this` is about *how* a function is called; arrows don’t rebind it.”  
- **Prototype:** “Behavior sharing by delegation chain (`obj.__proto__` → `Ctor.prototype`).”

---

## Cross-skill Hooks (30–60s each)
- **AWS (DevOps):** IAM least-privilege, S3 static hosting, Lambda + API GW, CloudWatch logs; CI/CD with least steps to prod.  
- **Mobile:** JS strength → **React Native** modules, perf via FlatList/memoization.  
- **Go:** Concurrency story — goroutines, channels, context cancellation; build small REST service.  

---

## Accessibility One-liner
“Keyboard first, semantic HTML, visible focus, ARIA only when native isn’t enough.”  
(Have one example: fixing a modal’s focus trap.)

---

## Brand (Resume/LinkedIn)
> **JavaScript-first engineer** who bridges **frontend depth** and **DevOps pragmatism**. I ship accessible UIs, automate delivery, and can discuss trade-offs across **AWS**, **mobile**, and **Go**.

---

## Acceptance Checks
- Explain **closure/this/prototype** each in **≤45s** with one code example.  
- Whiteboard **IIFE vs block scope** and when to use either.  
- Deploy a tiny **Lambda + API GW** (hello) and describe logs/rollbacks.  
- Record one **mock interview**; extract 3 improvements.

---

## Practice Prompts
- “When would you still use an IIFE today?”  
- “Debug a `this` bug in an event handler.”  
- “Optimize: large list rendering in React.”  
- “Design a small auth flow (JWT) and CI/CD steps.”
