---
title: "Package Oriented Design — Go Example"
date: 2025-04-15
tags:
  - golang
  - software-architecture
description: "Sample Go project layout following Bill Kennedy's package oriented design guidance."
layout: post.njk
---

# Package Oriented Design — Go Example

## Build-time serialization options in Go

Go types can expose custom wire formats via `encoding/json` and friends. Here’s how the main options compare:

### 1. `MarshalText` / `UnmarshalText`
- Implements `encoding.TextMarshaler` / `encoding.TextUnmarshaler`.
- Converts values to plain text; JSON, XML, and other encoders automatically use it when a custom JSON marshaler is absent.

```go
func (n Name) MarshalText() ([]byte, error) {
    return []byte(n.value), nil
}

func (n *Name) UnmarshalText(data []byte) error {
    n.value = string(data)
    return nil
}
```

### 2. `MarshalJSON` / `UnmarshalJSON`
- Implements `json.Marshaler` / `json.Unmarshaler`.
- Full control over the JSON representation.

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
        return errors.New("formato inválido")
    }
    n.value = strings.TrimPrefix(s, "prefix-")
    return nil
}
```

### 3. Helper function (`MarshalName`)
- No interface; useful for tests or custom glue without exposing marshaler interfaces.

```go
func MarshalName(n Name) ([]byte, error) {
    return []byte(n.value), nil
}
```

### Comparison

| Método | Interface | `encoding/json` ready? | Controle sobre JSON | Complexidade |
| --- | --- | --- | --- | --- |
| `MarshalText` | `encoding.TextMarshaler` | Sim | Parcial | Baixa |
| `MarshalJSON` | `json.Marshaler` | Sim | Total | Alta |
| Função auxiliar | Nenhuma | Não | Manual | Baixa |

### Resumo
- **`MarshalText`**: ideal para tipos fortes com representação textual simples.
- **`MarshalJSON`**: escolha quando a estrutura JSON precisa ser personalizada.
- **Função auxiliar**: útil para cenários específicos ou testes sem alterar o tipo.

`encoding/json` usa `MarshalText` automaticamente se `MarshalJSON` não estiver presente, portanto muitas vezes basta implementar o primeiro.

## Related Notes

- [[agenda-gophers-workshop|Gophers Workshop — Deploy-First Go Architecture]]
- [[backward-design-go-concurrency|Backward Design for Learning]]
- [[books-to-study|Books & Papers to Study]]
- [[dddod|Domain-Driven, Data-Oriented Design (DDDOD)]]
- [[golang|Golang]]
- [[package-oriented-design|Package Oriented Design]]
