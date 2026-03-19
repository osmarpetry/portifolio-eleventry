---
title: "Vim Productivity Cheatsheet"
date: 2025-08-28
tags:
  - workflow
  - resources
description: "Essential Vim commands, modes, and learning links for fast navigation."
layout: post.njk
---

# Vim Productivity Cheatsheet

## 🧭 Core navigation
- `h j k l` — move left/down/up/right
- `w / b` — next and previous word; `W / B` for whitespace-delimited words
- `0 / $` — start and end of line; `^` jumps to first non-blank character
- `gg / G` — top and bottom of file; `:{line}` jumps to a specific line

## ✍️ Editing essentials
- `i` insert, `a` append, `o` open new line below
- `ciw` change word, `caw` change word incl. whitespace, `C` change to end of line
- `dd` delete line (with yank), `D` delete to end of line, `p` paste below, `P` paste above
- `u` undo, `Ctrl+r` redo; `.` repeats last command

## 🔄 Visual & multi-line operations
- `v` visual mode, `V` line-wise, `Ctrl+v` block mode
- With selection: `>` indent, `<` outdent, `y` yank, `d` delete, `c` change
- `:%s/old/new/g` global substitution; `:%s/old/new/gc` confirm each change

## 🔁 Registers & macros
- `"a` specify register `a` for yank/put (`"ayy`, `"ap`).
- `q{register}` start recording a macro; `q` stop recording, `@{register}` replay.
- `@@` repeat last macro invocation.
- Use macros with counts (`5@a`) to repeat sequences efficiently.

## 🎓 Learning resources
- Vim Adventures (interactive): [https://vim-adventures.com](https://vim-adventures.com)
- Open Vim (online practice): [https://openvim.com](https://openvim.com)
- Practical Vim (book) by Drew Neil for advanced techniques.

## Related Notes

- [[anki-memory-palace-for-french-learning|Technique 'Inki' & Memory Palace for French Learning]]
- [[backward-design-go-concurrency|Backward Design for Learning]]
- [[french-learning|French Vocabulary & Study Ritual]]
- [[how-to-study-better|How to Study Better]]
- [[interview|Interview Prep Playbook — Ordered Notes from Courses and Slides]]
- [[tools-to-check|Tools to Check!]]
