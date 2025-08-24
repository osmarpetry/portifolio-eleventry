---
title: "BDD"
date: 2025-01-15
tags:
  - '#bdd'
  - '#testing'
description: "It's like TDD but without the bad things and even more good things"
layout: post.njk
---

# BDD

It's like TDD but without the bad things and even more good things
Just follow what is there:
- https://stackoverflow.com/questions/12060011/is-it-acceptable-to-write-a-given-when-then-when-then-test-in-gherkin
- https://automationpanda.com/bdd/
- https://www.agilealliance.org/glossary/three-amigos/
- http://jenkins.ngi.com.br/view/Keepfy/job/keepfy-frontend-cypress/
- https://automationpanda.com/2017/01/30/bdd-101-writing-good-gherkin/
## **Benefits**
|   |   |
|---|---|
|Inclusion|Anyone can write BDD scenarios, because they are written in plain English. Think of The Three Amigos.|
|Clarity|Scenarios focus specifically on the expected behavior of the product under development, resulting in less ambiguity for what to develop.|
|Streamlining|Requirements = acceptance criteria = test cases. Modular syntax expedites automation as well.|
|Shift-Left|Test case definition inherently becomes part of grooming.|
|Artifacts|Scenarios form a collection of test cases. Any tests not automated can be added to a known automation backlog.|
|Automation|BDD frameworks make it easy to turn scenarios into automated tests.|
|Test­-Driven|Most BDD frameworks can run scenarios to fail until the feature is implemented.|
|Code Reuse|“Given-When­-Then” steps can be reused between scenarios.|
|Parameterization|Steps can be parameterized. For example, a step to click a button can take in its ID.|
|Variation|Using parameters, example tables make it easy to run the same scenario with different combinations of inputs.|
|Momentum|Scenarios become easier and faster to write and automate as more step definitions are added.|
|Adaptability|Scenarios are easy to rewrite as the products and features change.|
Since BDD focuses on actual feature behavior, behavior specs are best for higher-level, functional, black box tests. For example, BDD is great for testing APIs and web UIs. Gherkin excels for acceptance testing. However, behavior specs would be overkill for unit tests, and it is also not a good choice for performance tests that focus on metrics and not pass/fail results. Read more about this in the article BDD 101: Unit, Integration, and End-to-End Tests.
## Check how to do table (scenario outline)
Read ‘[less is more](https://automationpanda.com/2017/01/30/bdd-101-writing-good-gherkin/)’ to not write shit code with scneario outline,
```javascript
Feature: Google Searching
  
  Scenario: Simple Google search
    Given a web browser is on the Google page
    When the search phrase "panda" is entered
    Then results for "panda" are shown
    And the following related results are shown
      | related       |
      | Panda Express |
      | giant panda   |
      | panda videos  |

Feature: SNES Mario Controls
  Scenario Outline: Mario jumps
    Given a level is started
    When the player pushes the "<letter>" button
    Then Mario jumps straight up
    
    Examples: Buttons
      | letter |
      | A      |
      | B      |
```
---
## Tags
Scenarios must be classified as manual or automated. When [BDD frameworks](https://automationpanda.com/2017/02/04/bdd-101-frameworks/) run tests, they need a way to exclude tests that are not automated. Otherwise, test reports would be full of errors! In [Gherkin](https://automationpanda.com/2017/01/26/bdd-101-the-gherkin-language/), **scenarios should be classified using tags**. For example, scenarios could be tagged as either “@manual” or “@automated”. A third tag, “@automatable”, could be used to distinguish scenarios that are not yet automated but are targeted for automation. Some BDD frameworks have nifty features for tags. In [Cucumber-JVM](https://github.com/cucumber/cucumber-jvm), tags can be set as [runner class options](http://toolsqa.com/cucumber/junit-test-runner-class/) for convenience. This means that [tag options could be set to “~@manual”](https://stackoverflow.com/questions/37841594/cucumber-tags-options-from-command-line) to avoid manual tests. In [SpecFlow](http://specflow.org/), any scenario with the special [“@ignore” tag](https://specflow.org/documentation/Using-Gherkin-Language-in-SpecFlow/) will automatically be skipped. Nevertheless, I strongly recommend using custom tags to denote manual tests, since there are many reasons why a test may be ignored (such as known bugs