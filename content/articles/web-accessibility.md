---
title: "Web Accessibility V3 — Topics cheat-sheet & decision guide"
date: 2025-09-01
tags:
  - '#frontend'
  - '#css'
  - '#javascript'
description: "Compressed guide to the Web Accessibility (V3) course topics with quick heuristics, team workflow, and checklists."
layout: post.njk
---

## Summary
- Course map covers **Screen Readers**, **Accessible HTML**, **ARIA**, **Focus Management**, and **Visual Considerations** plus **Debugging & team process**. :contentReference[oaicite:0]{index=0}  
- Aim: ship **perceivable, operable, understandable, robust** experiences (POUR) with practical exercises and team-ready debugging habits. :contentReference[oaicite:1]{index=1}

---

## Topics → what to do (at a glance)
- **Screen Readers:** learn how they work, enable them, write solid **alt text**, and test. :contentReference[oaicite:2]{index=2}  
- **Accessible HTML:** prefer **semantic elements** and set **document language**; fix invalid markup. :contentReference[oaicite:3]{index=3}  
- **ARIA:** add only when semantics aren’t enough; know **roles, states, properties**, **names/Descriptions**, **live regions**. :contentReference[oaicite:4]{index=4}  
- **Focus Management:** full keyboard support, **skip links**, logical **Tab** order, avoid **focus traps**, review shortcuts. :contentReference[oaicite:5]{index=5}  
- **Visual:** check **color contrast**, **reflow/zoom**, **reduced motion** and **prefers-color-scheme**, link perf with a11y. :contentReference[oaicite:6]{index=6}  
- **Debugging:** linters/devtools, team workflows, go **beyond compliance**; hands-on exercises. :contentReference[oaicite:7]{index=7}

---

## Decision heuristics
- **Semantics first → ARIA last.** If native element communicates role/state, **don’t add ARIA**. :contentReference[oaicite:8]{index=8}  
- **Keyboard is the truth.** If it’s not operable with keyboard and visible focus, it’s not accessible. :contentReference[oaicite:9]{index=9}  
- **Name, role, value:** can a screen reader expose them correctly? If not, fix semantics/labels/ARIA. :contentReference[oaicite:10]{index=10}  
- **Respect user prefs:** `prefers-reduced-motion`, `prefers-color-scheme`, zoom/reflow without loss. :contentReference[oaicite:11]{index=11}

---

## Team workflow (from course)
1. **Set standards** (WCAG targets, browser/AT matrix).  
2. **Lint & test early** (HTML validity, axe, devtools).  
3. **Exercise mindset:** practice with SRs and keyboard on real UI (modals, forms, nav).  
4. **Go beyond checklists:** usability for AT users, not just box-ticking. :contentReference[oaicite:12]{index=12}

---

## Dev checklist (quick)
- [ ] Landmark structure (`header/nav/main/aside/footer`).  
- [ ] Page language (`<html lang>`).  
- [ ] Forms: `<label>` + programmatic names; error text announced.  
- [ ] Interactive controls are **native** or fully re-created (role, keyboard, focus, ARIA).  
- [ ] Focus order & **visible** focus style.  
- [ ] Contrast meets WCAG; no info by color alone.  
- [ ] Motion: provide **reduced motion** path; avoid parallax autoplay by default.  
- [ ] Respect zoom/reflow at 200–400% without horizontal scroll. :contentReference[oaicite:13]{index=13}

---

## References
- **Web Accessibility — All Topics (Frontend Masters companion site)**: https://web-accessibility-v3.vercel.app/topics . :contentReference[oaicite:14]{index=14}  
- GitHub repo: https://github.com/marcysutton/frontend-masters-web-accessibility-v3 . :contentReference[oaicite:15]{index=15}

