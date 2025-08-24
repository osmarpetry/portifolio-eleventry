---
title: "PR and Issue Pattern to Follow"
date: 2025-01-15
tags:
  - '#pull-request'
  - '#issue'
  - '#git'
  - '#workflow'
description: "PR and Issue pattern to follow"
layout: post.njk
---

# PR and Issue Pattern to Follow

> Issue Context
> 
> User explained that they want to be able to switch between the regions (Atlanta, Charlotte, Denver) but could not determine how to do so in the current UI. They became frustrated and didn't realize that they could refresh the page to achieve this goal. We should introduce some affordance to support this behavior.
> 
> Ideally there is a UI control that they can use to switch between the locations; whether it is always present or in some modal is up to you.
> 
> # Acceptance Criteria
> 
> - The user can switch between regions without refreshing the page.
## Summary
Now the user can change between regions without refresh
## Screenshots
## What could be better
- disable links when the modal is open
- better redux writing, I did this way because usually, I design the components to not need the Redux
- use React Profiler to check when are necessary for the `memo` usage
- unit testing
- I have more time to focus on this task, my current schedule if busy
Solves #2