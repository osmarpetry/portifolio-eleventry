---
title: "Code Smells and Maintainability"
date: 2025-04-15
tags:
  - software-architecture
  - testing
  - resources
description: "Insights from Palomba et al. on how code smells diffuse through systems and affect change- and fault-proneness."
layout: post.njk
---

# Code Smells and Maintainability

## 📄 Abstract
Large-scale study (Palomba et al., Empirical Software Engineering 2018) analysing 395 releases across 30 open-source projects. Investigated whether classes with code smells are more change- and fault-prone and how smell introduction/removal influences future maintenance. Main findings:
- Smelly classes are changed and faulted more often than clean ones.
- Removing smells lowers change frequency but does not fully eliminate failure tendency.

## 🔑 Key points
- Dataset: 30 popular OSS projects, 395 releases, 17k+ classes manually validated.
- Most frequent smells: Long Method, Complex Class; strongly linked to change/fault proneness.
- Multiple smells in one class increase maintenance risk further.
- Introducing smells raises chance of future modifications; removing them reduces change frequency but residual failures can persist.
- Classes with historical faults tend to remain problematic even post-refactor.
- Emphasises internal quality from project inception instead of “fix later” mindset.

## 🔗 Connections
- Related to technical debt and software aging discussions.
- Complements critiques of rushed development in agile contexts.
- Aligns with literature on defect prediction and quality metrics.
- Comparable to preventive maintenance in other engineering fields.

## ❓ Questions for follow-up
- How to enforce smell prevention under delivery pressure?
- Domain-specific smell criticality?
- Measuring smell impact in proprietary systems with limited failure data?
- Strategies to break cycles of recurring faults in problematic classes?

## 📝 Personal reflections
- Use findings when analysing legacy systems’ internal quality.
- Persistent fault-prone classes suggest inspecting coupling, knowledge silos, and process gaps beyond smells.
- Integrate continuous reviews and monitoring into DevOps/CI pipelines.
- Explore developer interviews on “born good” code culture vs. trade-offs.

## 📚 Detailed notes
- Projects include systems like H2, Cassandra; smells catalogued per Fowler’s *Refactoring*.
- Smelly classes show higher cyclomatic complexity and LOC.
- Confirmed literature that defective classes often stay defective.
- Advocates blending academic methods with industry practice for better quality outcomes.

## 🧾 References
- Palomba, F., Bavota, G., De Penta, M., Oliveto, R., & De Lucia, A. (2018). *On the diffuseness and the impact on maintainability of code smells: a large scale empirical investigation*. Empirical Software Engineering, 23, 491–541. [https://link.springer.com/article/10.1007/s10664-017-9520-2](https://link.springer.com/article/10.1007/s10664-017-9520-2)
- Related study on fault prediction: [https://trello-attachments.s3.amazonaws.com/5e4b6e2e7b6e2e7b6e2e7b6e/5e4b6e2e7b6e2e7b6e2e7b6e/x/1234567890/predicao-falhas.pdf](https://trello-attachments.s3.amazonaws.com/5e4b6e2e7b6e2e7b6e2e7b6e/5e4b6e2e7b6e2e7b6e2e7b6e/x/1234567890/predicao-falhas.pdf)

## Related Notes

- [[agenda-gophers-workshop|Gophers Workshop — Deploy-First Go Architecture]]
- [[books-to-study|Books & Papers to Study]]
- [[conways-law-birth|Conway’s Law — origins, literature, and team design]]
- [[design-pattern|Design Pattern]]
- [[ordered-study-plan-anki|Fundamentals of Software Architecture — Ordered Study Plan + Anki]]
- [[software-aging|Software Aging]]
- [[tdd-systematic-review|TDD Effects on Quality and Productivity]]
- [[tidy-first|Tidy First? — Field Notes + React/TypeScript & Go Examples]]
