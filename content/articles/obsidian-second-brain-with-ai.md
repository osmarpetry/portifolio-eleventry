---
title: "Obsidian as a Second Brain with AI — Lessons from Syntax Podcast"
date: 2026-03-18
tags:
  - '#resources'
  - '#career'
description: "How Wes Bos and Scott Tolinski use Obsidian + AI (OpenClaw, QMD, Claude Code) to build a personal knowledge system — practical takeaways from the Syntax podcast."
layout: post.njk
---

## The Problem

Information scattered across Apple Notes, email, text messages, random Markdown files. Every time you need something — a window measurement, a t-shirt size, a meeting note — you can't remember where you put it. Wes Bos described this exact frustration on a recent Syntax episode and shared his solution: Obsidian as a second brain, powered by AI.

## The Setup: Obsidian + Claude Code + OpenClaw + QMD

### Step 1 — Migrate existing notes with Claude Code

Wes had years of Markdown notes scattered around. Instead of manually organizing them, he spun up a Claude Code instance and asked it to convert everything into an Obsidian vault. The AI analyzed the content, created categories, applied tags, identified meeting notes and tagged the people involved. This turned a messy pile of files into a structured, searchable vault in minutes instead of hours.

### Step 2 — Connect Obsidian to an AI bot via CLI

Using the Obsidian CLI tool, Wes connected his vault to his OpenClaw bot. Now he can log information by voice or text — something like "make an Obsidian note logging my t-shirt measurements: brand X, medium, chest 52cm, arm 38cm, runs tight." The bot creates a properly formatted note with frontmatter metadata.

The real power comes from querying: "Here's the size chart for this new shirt — which size would fit me best?" The bot checks the stored measurements and recommends a size. This is the kind of mundane-but-useful AI application that actually saves time every week.

### Step 3 — Structured metadata with frontmatter

Obsidian supports YAML frontmatter — custom properties attached to each note. Wes uses this to store structured data (measurements, fit notes, whether he wears an undershirt) alongside free-form text. This makes notes queryable both by humans and by AI agents.

### Step 4 — Semantic search with QMD

QMD (by Toby Lütke, CEO of Shopify) solves the memory problem with AI tools. It vectorizes every sentence in your Markdown files, enabling semantic search — finding notes by meaning, not exact keywords. Searching "t-shirt size" will find a note titled "clothing measurements" even though the words don't match. QMD can replace the built-in memory of your AI bot, giving it access to your entire vault as context.

Current limitation: no image/video support yet. Wes hopes to eventually search screenshots and visual content too.

### Step 5 — Daily Notes (Scott's workflow)

Scott Tolinski uses Obsidian's Daily Notes feature — a new file created automatically each day. He uses it for brain dumps, meeting notes (especially 1:1s), and heavy tagging. The tags make everything searchable without needing a dedicated file for every small topic. It's low-friction capture that feeds into the larger knowledge system over time.

## Sync: iCloud vs Obsidian Sync

Wes uses iCloud to sync his vault across devices but finds it slow. Obsidian Sync (paid) is the dedicated alternative. Both hosts acknowledged this is worth a deeper look — and mentioned wanting to do a full Obsidian tips episode in the future.

## Other Topics from the Episode

Beyond the Obsidian deep-dive, the episode covered several web development topics worth noting.

**Popover and Dialog for Navigation** — The `<dialog>` and `popover` HTML attributes are ready for simple mobile navs, but browser support isn't 100%. Scott still uses JavaScript + CSS class toggling for compatibility, with progressive enhancement toward native APIs. The CSS properties `@starting-style` and `allow-discrete` enable animating elements from `display: none`.

**Does Code Quality Still Matter with AI?** — Both hosts said yes, emphatically. AI tools work better with well-organized, discoverable code (TypeScript LSP, clear function boundaries). Duplicated or spaghetti code leads to drift and maintenance nightmares as projects grow. Wes shared an example of an AI agent converting Express code to Hono by following existing patterns in the codebase — good structure made the conversion smooth.

**Effect.ts** — A TypeScript library for better error handling, concurrency, and composition. Steep learning curve (compared to RxJS), but potentially powerful when paired with AI-assisted coding since the boilerplate cost is reduced.

**CSS Layout Frameworks in 2026** — Bootstrap-style grid systems are largely unnecessary now. A few reusable CSS utility classes (stack, sidebar, readable-width) handle 80% of layout needs. Scott's Graffiti UI library demonstrates this approach with CSS custom properties for theming.

**Supporting Older Browsers** — iPad Safari remains the biggest challenge. Old iPads don't get OS updates, so users are stuck on outdated Safari versions. The practical approach: check your analytics, use `@supports` queries, and polyfill where possible.

## Tools and References

- [Obsidian](https://obsidian.md) — Markdown-based knowledge vault
- [Obsidian Sync](https://obsidian.md/sync) — Paid sync service
- [QMD](https://qmd.sh) — Semantic search for Markdown via vectorization (by Toby Lütke)
- [Effect.ts](https://effect.website) — TypeScript library for robust error handling and concurrency
- [Graffiti UI](https://graffiti-ui.com) — CSS utility library with custom property theming
- [Sentry](https://sentry.io) — Error monitoring and performance tracking
- [Modem](https://modem.dev) — User feedback aggregation for devs (by Ben Vinegar)
- [MadCSS](https://madcss.com) — Syntax podcast merch
- [AVerMedia Live Streamer CAP 4K](https://www.avermedia.com) — Capture card recommended by both hosts
- [Phases.fm](https://phases.fm) — Parenting podcast by Scott and Dr. Tolinski
