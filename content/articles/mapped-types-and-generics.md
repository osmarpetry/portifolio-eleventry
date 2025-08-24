---
title: "Mapped Types and Generics"
date: 2025-01-15
tags:
  - '#typescript'
  - '#generics'
  - '#mapped-types'
  - '#programming'
description: "Mapped types and generics in TypeScript"
layout: post.njk
---

# Mapped Types and Generics
The code explains itself: you define an interface without committing to concrete types in some utilities; when used, it should follow the original type constraints.
```typescript
// Video for this file:
// https://youtu.be/oGczYPNAs1k
export interface Cat {
  age: number;
  name: string;
  eat(): void;
}

// Readonly mapped type
type ReadonlyCat = {
  readonly [P in keyof Cat]: Cat[P];
}

// Generic readonly
type GenericReadonly<T> = {
  readonly [P in keyof T]: T[P];
}

type ReadonlyCat2 = GenericReadonly<Cat>;

// Make fields optional
type GenericPartial<T> = {
  [P in keyof T]?: T[P];
}

type PartialCat = GenericPartial<Cat>;
type ReadonlyPartialCat = GenericReadonly<PartialCat>;

// Add nullability
type GenericNullable<T> = {
  [P in keyof T]: T[P] | null;
}

type NullableCat = GenericNullable<Cat>;

// Proxy interface
interface Proxy<T> {
  get(): T;
  set(value: T): void;
}

// Reuse an interface; now each T key has a proxied getter/setter
type Proxied<T> = {
  [P in keyof T]: Proxy<T[P]>;
}

type ProxiedCat = Proxied<Cat>;
const cat: ProxiedCat = null as any;
cat.age.get();

// Built-in helpers
type A = Readonly<Cat>;
type B = Partial<Cat>;
type C = Pick<Cat, 'age' | 'eat'>;
```

Reference video: https://youtu.be/oGczYPNAs1k