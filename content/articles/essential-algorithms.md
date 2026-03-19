---
title: "Essential Algorithms in Programming"
date: 2024-02-08
tags:
  - algorithms
  - data-structures
  - performance
description: "Core sorting, searching, and graph algorithms every programmer should master."
layout: post.njk
---

# Essential Algorithms in Programming

A comprehensive guide to fundamental algorithms across sorting, searching, and graph domains.

## Sorting Algorithms
### Bubble Sort
- **Operation**: Repeatedly swap adjacent elements if out of order.
- **Characteristics**: O(n²) time, O(1) space, stable, best case O(n).
- **Use cases**: Small datasets, educational contexts, memory-constrained scenarios.

### Insertion Sort
- **Operation**: Build sorted array one item at a time by inserting elements into proper positions.
- **Characteristics**: O(n²) time, O(1) space, stable, best case O(n) for nearly sorted data.
- **Use cases**: Small arrays (< 50 elements), nearly sorted data, streaming scenarios.

### Merge Sort
- **Operation**: Divide array in half, sort recursively, merge sorted halves.
- **Characteristics**: O(n log n) time, O(n) space, stable, predictable performance.
- **Use cases**: Large data sets, when stability matters, trading memory for speed.

## Searching Algorithms
### Linear Search
- **Operation**: Scan elements sequentially until match or end.
- **Characteristics**: O(n) time, no sorting needed.
- **Use cases**: Small lists, unsorted data, single-pass lookups.

### Binary Search
- **Operation**: Repeatedly halve search interval in sorted arrays.
- **Characteristics**: O(log n) time, requires sorted data.
- **Use cases**: Large sorted datasets, frequent lookups after initial sort.

## Graph Algorithms
### Depth-First Search (DFS)
- **Operation**: Explore as deep as possible before backtracking.
- **Characteristics**: Uses stack/recursion, O(V + E) time.
- **Use cases**: Cycle detection, topological sorting, maze solving.

### Breadth-First Search (BFS)
- **Operation**: Explore neighbors level by level with a queue.
- **Characteristics**: O(V + E) time, finds shortest path in unweighted graphs.
- **Use cases**: Shortest paths, social network analysis, routing in unweighted graphs.

### Dijkstra's Algorithm
- **Operation**: Track minimum distances in weighted graphs, expand nearest unvisited vertex.
- **Characteristics**: O(V²) or O(E log V) with priority queue, no negative weights.
- **Use cases**: Navigation, network routing, path optimization.

## References
- Data Structures Every Programmer Should Know
- 3 Types of Algorithms Every Programmer Needs to Know
- MIT: Algorithms and Data Structures
- *Introduction to Algorithms* (Cormen et al.)

## Related Notes

- [[algorithms-course-intro|Design & Analysis of Algorithms — Course Overview]]
- [[big-o-notation|Big O Notation]]
- [[javascript-technical-questions|JavaScript Technical Questions]]
- [[recursion|Recursion]]
- [[singly-doubly-linked-lists-stacks-and-queues|Singly & Doubly Linked Lists - Stacks and Queues]]
- [[tree|Tree]]
