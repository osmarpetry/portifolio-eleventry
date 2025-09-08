---
title: "Tidy First? — Field Notes + React/TypeScript & Go Examples"
date: 2025-09-01
tags:
  - '#book'
  - '#frontend'
  - '#golang'
description: "Concise notes from Kent Beck’s *Tidy First?* with small, runnable patterns in React/TypeScript and Go."
layout: post.njk
---

## Summary
Small, **pre-change tidies** reduce risk, shrink review cost, and speed delivery. Separate **structure** changes from **behavior** changes; prefer **explicitness**, **locality**, and **decoupling**. :contentReference[oaicite:0]{index=0}

---

## Core patterns → tiny examples

### 1) Lazy initialization
React/TS
```ts
const data = useMemo(() => fetchExpensive(id), [id]);
````

Go

```go
type S struct{ once sync.Once; cli *Client }
func (s *S) Client() *Client { s.once.Do(func(){ s.cli = New() }); return s.cli }
```

### 2) Keep declaration next to initialization

React/TS

```ts
const [user, setUser] = useState<User|null>(null);
useEffect(()=>{ fetchUser(id).then(setUser); },[id]);
```

Go

```go
order := getOrder(id)
items := getItems(id)
cust  := getCustomer(order.CustomerID)
```

### 3) Prefer explicit parameters (avoid opaque config bags)

React/TS

```ts
function DataTable({data, pageSize, onRowClick}: {data:any[];pageSize:number;onRowClick?:(r:any)=>void}){ /* ... */ }
```

Go

```go
func StartServer(port int, host, cert, level string) error { /* ... */ }
```

(Use an `Options` struct only for truly optional tails.)

### 4) Delete redundant comments via clearer code

React/TS

```ts
useEffect(()=>{ fetchUsers().then(setUsers); },[]);
```

Go

```go
if err != nil { return nil, fmt.Errorf("query active users: %w", err) }
```

### 5) Separate **Structure (S)** vs **Behavior (B)**

- PR 1 (S): extract hook / function; move code to better place.
    
- PR 2 (B): add feature or change logic.  
    This cuts review cost and rollback risk.
    

React/TS (S → B)

```ts
// S
function useUser(id:string){ /* fetch + state */ }
// B
function Profile({id}:{id:string}){ const {user}=useUser(id); return <p>Role:{user?.role??"User"}</p> }
```

Go (S → B)

```go
// S
func validate(t Tx) error { /* ... */ }; func compute(t Tx)(fee,total float64){ /* ... */ }
// B
logAudit(t); if err := save(t,total,fee); err != nil { return err }
```

### 6) Reduce coupling, raise cohesion

React/TS

```ts
function UserProfile({u}:{u:User}){ /* only profile */ }
function UserPosts({id}:{id:string}){ /* only posts */ }
```

Go (interfaces + DI)

```go
type Inventory interface{ Stock(id string)(int,error) }
type Payment interface{ Pay(PaymentInfo) error }
// OrderService depends on interfaces, not concrete DB/Gateway.
```

### 7) Interface Definition Language mindset

Define the **contract** once; have sender/receiver use it.  
React/TS

```ts
interface UserAPI{ me():Promise<User>; byId(id:string):Promise<User>; }
class RestUserAPI implements UserAPI { /* fetch */ }
class MockUserAPI implements UserAPI { /* in-mem */ }
```

Go

```go
type UserRepo interface{ GetByID(ctx context.Context,id string)(*User,error); /* … */ }
```

Swap implementations without touching callers.

---

## Why tidy first?

- Shrinks **batch size** → cheaper reviews → more, safer change.
    
- Moves expressions “into the box” (closer to the data/owner) → fewer call-site edits.
    
- Most cost accrues from **changes**, so make each smaller and clearer.
    

---

## Quick checklist (copy/paste)

-  Can I **move** this code nearer to its data/usage?
    
-  Is there a **redundant comment** I can delete by renaming/refactoring?
    
-  Are params **explicit**? Any “config bag” to split?
    
-  PR split into **S** then **B**?
    
-  Did I replace concrete deps with **interfaces** where beneficial?
    

---

## Sources

- Kent Beck, _Tidy First?