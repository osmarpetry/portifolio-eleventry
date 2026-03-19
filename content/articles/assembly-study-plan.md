---
title: "Assembly Study Plan"
date: 2025-03-01
tags:
  - resources
  - algorithms
description: "Curated roadmap and resource list for learning assembly language fundamentals."
layout: post.njk
---

# Assembly Study Plan

## 🎯 Goal
Understand low-level execution, registers, and memory operations to improve performance intuition and systems programming skills.

## 🧱 Foundation
- Start with CPU architecture basics (ALU, control unit, registers, memory hierarchy).
- Learn binary arithmetic and bitwise operations.
- Review calling conventions and stack frames.

## 📚 Resources
- Book: "Programming from the Ground Up" by Jonathan Bartlett.
- Online course: Oregon State CS271 videos (Intel x86 focus).
- Interactive: [https://godbolt.org](https://godbolt.org) for compiler output comparisons.
- Reference: Intel® 64 and IA-32 Architectures Developer Manuals.

## 🛠 Practice Projects
- Implement simple math routines (factorial, Fibonacci) in NASM or GAS.
- Build a command-line calculator using system calls.
- Reverse-engineer a compiled C program using `objdump` and annotate the assembly.

## 🔍 Tools
- Assemblers: NASM (Intel syntax), GAS (AT&T syntax).
- Debuggers: `gdb`, `lldb`, `radare2`.
- Emulators: `qemu`, `emu8086`.

## ✅ Checkpoints
- Translate small C functions to assembly manually and verify outputs.
- Understand stack manipulation (`push`, `pop`, `call`, `ret`).
- Read and explain an assembly listing for a loop with conditionals.

## Related Notes

- [[algorithms-course-intro|Design & Analysis of Algorithms — Course Overview]]
- [[anki-memory-palace-for-french-learning|Technique 'Inki' & Memory Palace for French Learning]]
- [[backward-design-go-concurrency|Backward Design for Learning]]
- [[big-o-notation|Big O Notation]]
- [[hardcore-functional-programming-in-javascript|Hardcore Functional Programming in JavaScript — Notes + Personal Dictionary]]
