---
title: "Presentation"
date: 2025-01-15
tags:
  - '#design-patterns'
  - '#presentation'
  - '#software-architecture'
description: "Outline and notes for the design patterns presentation"
layout: post.njk
---

# Presentation

Prepare the script of intentions.
Explain how to read the book and how, by seeing similar patterns, you create connections between them and discover different perspectives of the same problem, sometimes finding other ways—or better ways—to use a different pattern. Another pattern can sometimes be similar to the one you’re reading; the point is to think beyond the current pattern chapter.

SAY THE INTENTIONS: we won’t have examples of every pattern, but of some patterns.

### Decorator
We also have **Chain of Responsibility**, which can achieve similar goals. The difference is that the Decorator cannot break the flow, while the Chain of Responsibility can stop propagation. Example to mention with JWT: one handler checks permissions, another performs the query, then returns.

It’s interesting when you want to change behavior without breaking the base. Consider also **Adapter** and **Proxy**.

**Adapter** is for when you had a system serving XML everywhere and now you need JSON. You create an adapter that calls the XML service and returns the transformed JSON—no changes to the original service. You call the adapter which calls XML and returns the treated result.

The **Bridge** pattern splits two tightly coupled class hierarchies. Example: a remote control receives a `Device` in the constructor. `Device` is implemented by radio and TV; both implement the commands expected by the remote (power, next, previous). You can also extend the remote into an advanced remote (extra features). When using the advanced remote, you just swap it in.

**Proxy**: you built an app without cache; now you need cache. A proxy can check if a valid cached entry exists by id; if yes return it, otherwise forward to the service. In this case, you’d call `GetVideoProxy()`.

**Composite** is also similar in spirit because it uses recursive composition. You may have a `draw()` that calls child `draw()` recursively. Example: an order with a notebook and a free monitor, and each has accessories; when you trigger warranty at the order level, it propagates to the monitor, then to its accessory.

→ To form a cube you need 6 squares, each square has 2 triangles, each triangle has 3 points.

Since we are talking about working with what already exists, there is also the **Facade**, which simplifies usage without changing underlying classes. Before, you needed to know which video codec function to call. With a Facade, you pass the file and it handles the rest; you keep complexity in one place instead of scattering it across the codebase.

→ Goal: keep a simple interface and hide the complexity of the classes behind it.

Sometimes you’ll revisit your (or your teammate’s) code because it’s too heavy. **Flyweight** can help by controlling memory state—don’t recreate identical state repeatedly; point to a shared, immutable part.

→ It can look like a Singleton in effect. Example of the cube: many squares, triangles, and points share intrinsic state.

It often uses a factory to achieve this:
```javascript
// Example paraphrased from classic Flyweight
class TreeType {
  constructor(name, color, texture) {}
  draw(canvas, x, y) {}
}

class TreeFactory {
  static treeTypes = new Map();
  static getTreeType(name, color, texture) {
    const key = `${name}:${color}:${texture}`;
    if (!this.treeTypes.has(key)) this.treeTypes.set(key, new TreeType(name, color, texture));
    return this.treeTypes.get(key);
  }
}

class Tree {
  constructor(x, y, type) {
    this.x = x; this.y = y; this.type = type;
  }
  draw(canvas) { this.type.draw(canvas, this.x, this.y); }
}
```

#### Other patterns not covered here
**Singleton**: similar spirit to Flyweight in terms of sharing/centralizing, but guarantees a single instance.

**Iterator**: used heavily in data structures to traverse collections with a standard interface.

**Mediator**: often discouraged when it turns into a “god object” that knows too much. Prefer Chain of Responsibility, Command, and Observer where they fit. Facade is also similar but with different intent.

**Memento**: keeps snapshots of an object so you can restore to a previous state (watch memory usage). Good to store snapshot timestamps for debugging.

**Visitor**: add operations to object structures without changing the classes. Objects accept a visitor that performs operations, e.g., export shapes to XML.

**Interpreter**: parse and evaluate expressions, e.g., converting dates to a specific mask.