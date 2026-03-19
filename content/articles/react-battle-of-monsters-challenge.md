---
title: "React Coding Challenge — Battle of Monsters"
date: 2025-04-15
tags:
  - frontend
  - react
  - assessment
description: "Instructions, requirements, and strategy for the Battle of Monsters React take-home/recorded challenge."
layout: post.njk
---

# React Coding Challenge — Battle of Monsters

## 🎥 Recording requirements
- Record a single continuous screen-share (clock visible) covering both coding (45 min target) and problem-solving (25 min) segments.
- No edits, no hidden screens; explain your thinking throughout.
- Upload .mp4 (<4GB) to Google Drive and share the link.

## 🧪 Challenge overview
- Finish a partially built React app that lets the user select a monster and battle a randomly chosen opponent.
- Implement missing UI, logic, and tests so the app matches the Figma design and passes tests.

## 🔧 Stack
- React + TypeScript, Redux Toolkit, Material UI.
- Testing with Jest, jest-fetch-mock, React Testing Library.

## 🚀 Suggested time split
- Styling: 15 min
- Component creation: 10 min
- Services & logic: 10 min
- Unit testing: 10 min

## 🗃 API details
- Run `npm run serve:data` for the local server.
- `GET /monsters` → list of monsters to render.
- `POST /battle` → send `{ monster1Id, monster2Id }`, receive battle result to display.

## ✅ Acceptance criteria
1. UI matches the Figma design.
2. Tests cover new code and pass.
3. Computer selects a random monster (different from player’s choice).
4. Display the winner after the battle.

## 🎨 Design reference
- Login to Figma and use the “Inspect” tab for styles.
- Design link: [Battle of Monsters Figma](https://www.figma.com/file/wXA5toXu2tZJyhXNY5b5zB/Battle-of-Monsters---Front-End)

## Related Notes

- [[form-validation-nextjs|Form Validation in Next.js]]
- [[forwarding-ref|Forwarding Ref]]
- [[react-suspense|React.Suspense]]
- [[react-with-responsiveness|React with Responsiveness]]
- [[remix-is-react-router|Remix is React Router — what that means in practice]]
- [[testing-library|Testing Library]]
- [[what-react-senior-should-know|What React Senior Should Know]]
