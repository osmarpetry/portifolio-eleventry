---
title: "TDD Effects on Quality and Productivity"
date: 2025-04-15
tags:
  - testing
  - software-architecture
  - algorithms
description: "Summary of Bissia et al.’s systematic review on Test-Driven Development impacts."
layout: post.njk
---

# TDD Effects on Quality and Productivity

## 📄 Abstract
Systematic review of 127 empirical studies (2000–2023) on Test-Driven Development (TDD). Evaluates internal code quality, external product quality, and productivity. Findings: TDD generally improves cohesion and reduces coupling; external quality gains are strongest in critical systems; productivity results vary by team experience and context.

## 🔑 Key points
- **Internal quality**: Lower coupling, reduced cyclomatic complexity, higher cohesion (often measured via CK Metrics).
- **External quality**: Significant defect reduction in critical systems (e.g., medical); modest improvements in commercial web apps.
- **Productivity**: Mixed outcomes. Some studies show gains after 3–6 months; others report initial slowdown.
- **Moderators**: Prior unit testing experience and continuous integration adoption amplify benefits.
- **Limitations**: Selection bias, uncontrolled environmental variables, self-reported productivity metrics.

## 🔗 Connections
- Aligns with Clean Code principles and CK metrics usage.
- Supports discussions on technical debt in agile processes.
- Contrasts with test-last approaches in rapid prototyping.
- Relates to research on developer psychology and TDD adoption.

## ❓ Questions
- How to tailor TDD for volatile requirements?
- What is the maintenance cost of large test suites over time?
- Are metrics like branch coverage sufficient to gauge TDD effectiveness?
- How does TDD coexist with generative AI in testing workflows?

## 📝 Personal reflections
- TDD excels for complex business logic; less so for simple CRUD modules.
- CK metrics help quantify internal quality gains.
- Variability explains why some companies abandon TDD after superficial adoption.
- Integrating TDD with BDD could boost external quality.

## 📚 Detailed notes
- **Methodology**: PRISMA-based review of 127 studies.
- **Variables**: Internal quality (CBO, LCOM, WMC, RFC), external quality (defects, MTBF, user satisfaction), productivity (delivery speed, cognitive effort).
- **Results**: 15–30% coupling reduction, ~20% cohesion increase, lower cyclomatic complexity; critical systems saw defect reduction from 4.1 to 2.4 defects/KLOC under TDD; proficiency reached after ~240–500 hours with initial productivity dip.
- **Limitations**: 61% of studies lacked controls for prior testing expertise; productivity data often self-reported; publication bias toward positive outcomes.

## 💻 Example in Go
```go
package cpf

import "testing"

func TestCPFRejectsAllZero(t *testing.T) {
    if IsValid("00000000000") {
        t.Error("All-zero CPF should be invalid")
    }
}

func TestCPFValidKnownValue(t *testing.T) {
    if !IsValid("52998224725") {
        t.Error("Valid CPF was rejected")
    }
}

func IsValid(cpf string) bool {
    if len(cpf) != 11 {
        return false
    }
    for i := 1; i < len(cpf); i++ {
        if cpf[i] != cpf[0] {
            return true // Simplified logic for example
        }
    }
    return false
}
```

## 📎 References
- Bissia, W., Seca Neto, A. G., Figueiredo, M. C., & Emer, P. (2023). *The Effects of Test Driven Development on Internal Quality, External Quality and Productivity: A systematic review.*
- Additional supporting documents (ResearchGate, CK Metrics literature).

## Related Notes

- [[agenda-gophers-workshop|Gophers Workshop — Deploy-First Go Architecture]]
- [[algorithms-course-intro|Design & Analysis of Algorithms — Course Overview]]
- [[assembly-study-plan|Assembly Study Plan]]
- [[bdd|BDD]]
- [[code-smells-impact-maintainability|Code Smells and Maintainability]]
- [[enterprise-ui-development|Enterprise UI Development — Testing, Standards, and Ego Control]]
- [[testing-concepts-notes|Testing Concepts Notes]]
