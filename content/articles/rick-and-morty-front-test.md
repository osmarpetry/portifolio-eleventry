---
title: "Rick and Morty Front-End Technical Test"
date: 2025-04-15
tags:
  - frontend
  - react
  - system-design
description: "Requirements summary for the Next.js + Tailwind + Hero UI + Apollo Client challenge using the Rick and Morty GraphQL API."
layout: post.njk
---
# Front-End Developer Technical Test — Rick & Morty

## 🎯 Objective
Build a responsive Next.js application (TypeScript) that consumes the Rick and Morty GraphQL API, delivering search, pagination, and detail experiences using Tailwind CSS and Hero UI.

## 🧱 Tech stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Hero UI components
- **Data**: GraphQL via Apollo Client
- **API**: [https://rickandmortyapi.com/graphql](https://rickandmortyapi.com/graphql)

## 🧩 Features
1. **Setup**
   - Initialize Next.js + TypeScript project
   - Configure Tailwind CSS and Hero UI
   - Set up Apollo Client with GraphQL endpoint

2. **Search interface**
   - Input box with debounce
   - Query `characters(filter: { name: $name })`

3. **Paginated table/list**
   - Display character columns: Name, Status, Species, Gender
   - Implement pagination using `characters(page: $page)`
   - Provide Next/Previous controls

4. **Detail drawer**
   - On row/card click, open side panel
   - Show character image, origin, location, episode count, etc.

## 📏 Evaluation criteria
- **Responsiveness**: Works on mobile, tablet, desktop
- **Code quality**: Clean structure, naming, modularization, type safety, no dead code
- **UI design**: Polished interface aligned with Hero UI patterns
- **Functionality**: All core features implemented with good UX

## 📦 Deliverables
- GitHub repository with source code
- README including setup instructions, assumptions, and decisions

## 🕒 Time guidance
- No strict deadline; more time implies higher expectations. Ask questions if needed.

## Related Notes

- [[form-validation-nextjs|Form Validation in Next.js]]
- [[forwarding-ref|Forwarding Ref]]
- [[front-end-system-design|Front-End System Design — Evgenii Ray (Frontend Masters)]]
- [[javascript-ui-hard-parts|The Hard Parts of UI Development — Will Sentance (Frontend Masters)]]
- [[react-battle-of-monsters-challenge|React Coding Challenge — Battle of Monsters]]
- [[testing-library|Testing Library]]
