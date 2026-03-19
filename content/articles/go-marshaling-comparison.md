---
title: "Go Marshaling Strategies"
date: 2025-04-20
tags:
  - golang
  - api
description: "Comparing MarshalText, MarshalJSON, and custom helpers for Go types."
layout: post.njk
---

# Go Marshaling Strategies

## 1. `MarshalText` / `UnmarshalText`
- Interface: `encoding.TextMarshaler`, `encoding.TextUnmarshaler`
- Use case: convert values to plain text; ideal for simple string encodings.
- Works automatically with `encoding/json`, `encoding/xml`, etc. if `MarshalJSON` isn’t implemented.

```go
func (n Name) MarshalText() ([]byte, error) {
    return []byte(n.value), nil
}

func (n *Name) UnmarshalText(data []byte) error {
    n.value = string(data)
    return nil
}
```

## 2. `MarshalJSON` / `UnmarshalJSON`
- Interface: `json.Marshaler`, `json.Unmarshaler`
- Use case: full control over JSON serialization and validation.

```go
func (n Name) MarshalJSON() ([]byte, error) {
    return json.Marshal("prefix-" + n.value)
}

func (n *Name) UnmarshalJSON(data []byte) error {
    var s string
    if err := json.Unmarshal(data, &s); err != nil {
        return err
    }
    if !strings.HasPrefix(s, "prefix-") {
        return errors.New("invalid format")
    }
    n.value = strings.TrimPrefix(s, "prefix-")
    return nil
}
```

## 3. Helper function
- No interface; useful for ad-hoc serialization (e.g., tests).

```go
func MarshalName(n Name) ([]byte, error) {
    return []byte(n.value), nil
}
```

## Comparison
| Method | Interface | `encoding/json` integration | Control over JSON | Complexity |
| --- | --- | --- | --- | --- |
| `MarshalText` | `encoding.TextMarshaler` | Yes | Partial | Low |
| `MarshalJSON` | `json.Marshaler` | Yes | Total | Higher |
| Helper function | None | Manual | Manual | Low |

## Summary
- Implement `MarshalText` for simple string representations.
- Use `MarshalJSON` when JSON structure needs customization or validation.
- Helper functions are good for convenience but lack automatic integration.

## Related Notes

- [[agenda-gophers-workshop|Gophers Workshop — Deploy-First Go Architecture]]
- [[backward-design-go-concurrency|Backward Design for Learning]]
- [[complete-go-for-professional-developers|Complete Go for Professional Developers — Course Notes]]
- [[dddod|Domain-Driven, Data-Oriented Design (DDDOD)]]
- [[go-http-client-workshop|HTTP Clients and Concurrency in Go]]
- [[go-language-basics|Go Language Basics — Packages, Semantics, and Concurrency]]
- [[golang|Golang]]
