---
title: "Go Language Basics — Packages, Semantics, and Concurrency"
date: 2025-05-20
tags:
  - golang
  - backend
  - concurrency
description: "Consolidated notes on core Go concepts: package layout, visibility rules, error handling, data semantics, and introductory concurrency patterns."
layout: post.njk
---

# Go Language Basics — Packages, Semantics, and Concurrency

## Introduction

These notes merge and reorganize the previous `Golang.md` and `Golang(1).md` files into a single English summary. The focus is on foundational Go concepts useful when transitioning from languages such as JavaScript or TypeScript: how packages work, how functions handle parameters and return values, the distinction between value and pointer semantics, idiomatic error handling, and the essentials of goroutines and channels.

## Package Structure and Visibility

- Packages provide the first level of organization in Go. All files within the same directory and `package` share the same namespace and do not need to re-import each other.
- Identifier casing controls visibility:
  - Lowercase names are package-private (not exported).
  - Uppercase names are exported and available to other packages (e.g., `fmt.Print`).
- When importing, reference the package name (or alias) to access exported identifiers:
  ```go
  import data "example.com/project/data"

  data.Function()
  ```
- Avoid catch-all `utils` or `common` packages; they tend to become dependency magnets.

## Functions and Multiple Returns

- Functions can return multiple values, commonly used for results plus errors:
  ```go
  func addAndSubtract(a, b int) (int, int) {
      return a + b, a - b
  }
  ```
- Go encourages explicit error handling instead of exceptions. Example:
  ```go
  package main

  import (
      "errors"
      "fmt"
  )

  type User struct {
      ID   int
      Name string
  }

  func readUser(id int) (*User, error) {
      user := &User{ID: id, Name: "John Doe"}
      if id > 0 {
          return user, nil
      }
      return nil, errors.New("user not found")
  }

  func main() {
      user, err := readUser(2)
      if err != nil {
          fmt.Println("error:", err)
          return
      }
      fmt.Println("user:", user.Name)
  }
  ```

## Value vs Pointer Semantics

- Passing by value copies the data; passing a pointer shares the same underlying instance.
- Primitive types (int, string, bool) generally use value semantics.
- Use pointer semantics when:
  - You want to mutate the original value (`*age++`).
  - The struct represents an API or is large enough that copying becomes expensive.
- Example: incrementing a value through a pointer parameter:
  ```go
  func birthday(age *int) {
      *age++
  }
  ```

## Control Flow Essentials

- The `if` statement in Go can include an initializer; the sample screenshot in the original note showed default patterns for checking `nil` and assigning defaults.
- `switch` statements are concise and do not require explicit `break` (each case ends automatically).
- `for` is the only loop keyword and can emulate while loops or infinite loops; ranges provide convenient iteration over slices, maps, and strings.

## Methods, Interfaces, and Embedding

- Methods are functions with receivers; whether the receiver is a value or pointer dictates copying vs. shared access.
- Interfaces are satisfied implicitly. You do not need to declare that a type implements an interface—matching method sets are enough.
- Struct embedding allows one struct to expose the fields and methods of another, similar to composition with default forwarding:
  ```go
  type Workshop struct {
      data.Course
      Date time.Time
  }
  ```
- Factories often return the exported struct or interface; e.g. `NewInstructor(name, lastname string) Instructor`.

## Arrays, Slices, and Collections

- Arrays have fixed length and are value types.
- Slices are descriptors containing a pointer to an underlying array, length, and capacity; passing slices copies the descriptor but not the backing array.
- The pattern `qty := len(countries)` is common to retrieve sizes.

## Deferred Execution and Panic

- `defer` schedules functions to run after the surrounding function returns—useful for cleanup. Deferred calls execute LIFO (last defer runs first).
- `panic` aborts the current goroutine and unwinds the stack until recovered; typically reserved for unrecoverable errors. Prefer returning errors when possible.
- `recover` can catch a panic inside a deferred function, but it should be used judiciously.

## Concurrency Basics: Goroutines and Channels

- Goroutines execute functions concurrently; they share memory space, so coordinate access carefully.
- Channels enable communication between goroutines. Buffered channels control how many values can be queued:
  ```go
  func printMessage(text string, ch chan string) {
      for i := 0; i < 5; i++ {
          fmt.Println(text)
          time.Sleep(800 * time.Millisecond)
      }
      ch <- "done"
  }

  func main() {
      ch := make(chan string)
      go printMessage("Frontend Masters Rocks!", ch)
      fmt.Println(<-ch)
      close(ch)
  }
  ```
- Always close channels when no more values will be sent to avoid goroutine leaks.

## Additional Tips and Next Steps

- Compare Go’s semantics with TypeScript or JavaScript: Go defaults to value semantics, while JS passes objects by reference by default.
- Explore packages such as `sync.WaitGroup`, `errgroup`, and context propagation for richer concurrency patterns.
- Practice writing HTTP handlers, factories, and data shapes to reinforce pointer vs value choices and error handling.
- Consider building small demos (e.g., file readers, REST endpoints, CLI tools) to apply these patterns repeatedly.

## References

- Official Go Documentation: [https://go.dev/doc/](https://go.dev/doc/)
- Go Tour (interactive): [https://go.dev/tour/](https://go.dev/tour/)
- Concurrency in Go (Katherine Cox-Buday) for deeper goroutine/channel patterns
- Ardan Labs blog — articles on package-oriented design and data semantics

## Related Notes

- [[agenda-gophers-workshop|Gophers Workshop — Deploy-First Go Architecture]]
- [[backward-design-go-concurrency|Backward Design for Learning]]
- [[complete-go-for-professional-developers|Complete Go for Professional Developers — Course Notes]]
- [[go-http-client-workshop|HTTP Clients and Concurrency in Go]]
- [[go-learning-agenda-jujus-challenge|Go Learning Agenda (Juju's Challenge)]]
- [[go-marshaling-comparison|Go Marshaling Strategies]]
- [[golang|Golang]]
