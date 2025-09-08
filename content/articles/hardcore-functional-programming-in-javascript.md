---
title: "Hardcore Functional Programming in JavaScript — Notes + Personal Dictionary"
date: 2025-07-13
tags:
  - '#javascript'
  - '#algorithms'
  - '#resources'
description: "Notes from Brian Lonsdorf’s course on Hardcore Functional Programming, focusing on pure functions, monads, and functional patterns — building a personal dictionary of FP terms."
layout: post.njk
---

## Summary
- Course by **Brian Lonsdorf (Frontend Masters)**.  
- Covers **mathematical functions, purity, effects, monads, and functional architecture patterns**.  
- Use this material to **build a dictionary of functional programming terms** in my own words.  
- With GPT, I can practice rephrasing these terms in my style and prepare examples that feel natural for me to recall in interviews.  

---

## Functional Foundations
- **Pure Functions:** total, deterministic, and free of side-effects.  
- **Mathematical framing:** every input → deterministic output.  
- **Closure & Context:** understanding how lexical scope and `this` behave in FP.  
- **Effects:** strategies to isolate I/O, randomness, or mutations.  

---

## Monads & Advanced Patterns
- Learn to apply **functors, applicatives, and monads** in JavaScript.  
- **Real problems in JS** used to demonstrate FP abstractions.  
- **Functional Architecture:** composition, immutability, and controlled side-effects.  

---

## Personal Dictionary Project
- Build a **Markdown glossary** from the course.  
- Each entry should follow this format:

```markdown
Term: <keyword>  
Definition (in my words): <simple phrasing>  
Formal Definition: <course/book definition>  
Example: <JS snippet>  
Analogy: <real-world metaphor>  
````

**Example**

```markdown
Term: Pure Function  
Definition (in my words): A function that never surprises me — same input, always same output.  
Formal Definition: A total function with no side-effects, deterministic mapping input → output.  
Example: (x) => x * 2  
Analogy: A vending machine that always gives you exactly one soda for one coin, no matter the day.  
```

---

## Personal Notes

- I want this **dictionary at my fingertips** to answer **interview questions** quickly.
    
- Cross-link terms with other courses (_Dev Eficiente — Máquina de Aprender_, _JavaScript Performance_, _Tidy First_).
    
- Use GPT to **simulate interview Q&A** with my dictionary terms, so I can rehearse explanations in my own voice.
    

---

## Next Steps

- Start with 10 key FP terms: Pure Function, Closure, Side-Effect, Higher-Order Function, Functor, Applicative, Monad, Composition, Immutability, Referential Transparency.
    
- Expand to cover **functional architecture patterns** from the companion course _Hardcore Functional Architecture in JavaScript_.
    
- Review weekly; refine examples with **React/TypeScript** and **Go** where applicable.
    

---

## References

- [Frontend Masters — Hardcore Functional Programming v2 (Brian Lonsdorf)](https://frontendmasters.com/courses/hardcore-js-v2/)
    
- [Frontend Masters — Hardcore Functional Architecture (Brian Lonsdorf)](https://frontendmasters.com/courses/hardcore-js-architecture/)
    

