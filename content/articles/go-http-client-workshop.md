---
title: "HTTP Clients and Concurrency in Go"
date: 2025-05-20
tags:
  - golang
  - http
  - concurrency
description: "Detailed notes from Maximiliano Firtman’s ‘Basics of Go’ segment on building HTTP clients, parsing JSON, and coordinating concurrent requests using goroutines and wait groups."
layout: post.njk
---

# HTTP Clients and Concurrency in Go

## Introduction

These notes rewrite the original `Transcrito.md` transcript in English, using the Notion format. The content summarizes Maximiliano Firtman’s lecture from the Frontend Masters course “Basics of Go”, focusing on building HTTP clients, parsing JSON responses, handling errors, and coordinating concurrent requests with goroutines and wait groups.

## Building a Currency Rate Client

- Objective: fetch cryptocurrency exchange rates (e.g., BTC → USD, EUR, GBP) from an API.
- Challenge: support dynamic base currencies while preserving the convenience of a constant URL.
- Solution: define the API URL as a formatted string and use `fmt.Sprintf` to inject the desired currency code. The constant holds the format, not the concrete value.

## Using Go’s `strings` Package

- Strings in Go are not objects; string manipulation relies on functions from the `strings` package.
- Important functions:
  - `strings.ToUpper` for uppercase conversions.
  - `strings.Contains`, `strings.Count`, etc.
- `len()` returns the length in **bytes**, not Unicode code points; multi-byte characters (e.g., emoji) require specialized functions to count runes.
- Example: flag emoji deletion in editors illustrates multi-byte characters and the need to consider rune-aware functions when counting characters.

## Formatting and Sending HTTP Requests

- Use `fmt.Sprintf` to create an API URL with the desired currency.
- Make the HTTP GET request (via `http.Get`) and capture the response and error.
- Errors must be returned up the chain wrapped in context (`fmt.Errorf("status code received: %d", status)`).
- The function returns both the rate (pointer) and an error. Returning `nil, err` communicates failure while preserving the responsibility of the caller to decide what to do with the error.

## Handling HTTP Responses and Errors

- Synchronous operation: `http.Get` blocks until a response arrives; no `await` or `.then` is required.
- Check HTTP status codes: 200 means OK, other codes should be handled accordingly. Go’s `net/http` package defines constants for standard codes (e.g., `http.StatusOK`).
- For non-OK responses, create informative errors—`fmt.Errorf` with embedded status code keeps diagnostics meaningful.
- Body reading: HTTP bodies are streams (`io.ReadCloser`). Use `io.ReadAll` (or streaming decoders) to read the entire response into a byte slice.

## Parsing JSON Responses

- Load the JSON into Go structures with `json.Unmarshal`.
- Beware of type mismatches: ensure struct fields match the JSON properties. Use tools like JSON-to-Go to generate initial struct definitions.
- Struct tags in backticks (e.g., ``json:"price"``) instruct the JSON package which field to map.
- Example mapping structure:
  ```go
  type CEXResponse struct {
      Pair string  `json:"pair"`
      Last float64 `json:"last"`
  }
  ```
- When API data does not map directly to your internal model, define intermediate response structs and convert to domain types.

## Demonstrating the HTTP Client

- Building a small CLI that calls the API, parses the JSON, and prints the rate.
- Example output: `Rate for BTC: 36000.23`.
- Watch for pointer printing—`fmt.Println(rate)` prints an address; access fields (e.g., `rate.Price`) for human-readable output.

## Synchronous Behavior and Goroutines

- Calling `http.Get` is synchronous. Each call blocks until the network response completes.
- To fetch multiple currencies concurrently, use goroutines. Wrap the call to the client function with the `go` keyword.

## Coordinating Goroutines with `sync.WaitGroup`

- Wait groups act like counters: increment when launching a goroutine, decrement when it finishes, and `Wait()` until the counter returns to zero.
- Pattern:
  ```go
  var wg sync.WaitGroup
  currencies := []string{"BTC", "ETH", "BCH"}

  for _, currency := range currencies {
      wg.Add(1)
      go func(cur string) {
          defer wg.Done()
          getCurrencyData(cur)
      }(currency)
  }

  wg.Wait()
  ```

## Goroutines and Closures

- When launching goroutines inside loops, capture the loop variable correctly (pass it as a parameter to the closure) to avoid referencing the final loop value.
- Example demonstrates launching a goroutine with a closure that references `currency` or using a local copy.

## Handling Pointer vs Value Types

- Go provides syntactic sugar for accessing fields through pointers (`rate.Price` works even if `rate` is a pointer).
- Use pointers when mutating shared state or when returning optional values (so `nil` indicates absence).

## Common Pitfalls and Debugging Tips

- Firewall prompts (e.g., macOS Lulu) might appear each time `go run` compiles a new binary; whitelist if safe.
- Printing JSON without parsing is useful for debugging; once stable, parse into structured types.
- Int/float mismatches in API data require adjusting struct definitions accordingly.
- Provide informative error messages so the UI or calling layer can decide how to react.

## Example Code Using a WaitGroup

```go
func getCurrencyData(currency string) (*Rate, error) {
    // Build URL with fmt.Sprintf and perform HTTP GET...
}

func main() {
    currencies := []string{"BTC", "ETH", "BCH"}
    var wg sync.WaitGroup

    for _, currency := range currencies {
        wg.Add(1)
        go func(cur string) {
            defer wg.Done()
            rate, err := getCurrencyData(cur)
            if err != nil {
                log.Printf("error fetching %s: %v", cur, err)
                return
            }
            fmt.Printf("Rate for %s: %.2f\n", cur, rate.Price)
        }(currency)
    }

    wg.Wait()
}
```

## References

- Maximiliano Firtman, “Basics of Go” — Frontend Masters.
- Go standard library: `net/http`, `encoding/json`, `strings`, `fmt`, `sync`, `time`.
- Official Go documentation — [https://go.dev/doc/](https://go.dev/doc/).
- JSON-to-Go converter: [https://mholt.github.io/json-to-go/](https://mholt.github.io/json-to-go/).

## Related Notes

- [[agenda-gophers-workshop|Gophers Workshop — Deploy-First Go Architecture]]
- [[backward-design-go-concurrency|Backward Design for Learning]]
- [[complete-go-for-professional-developers|Complete Go for Professional Developers — Course Notes]]
- [[dddod|Domain-Driven, Data-Oriented Design (DDDOD)]]
- [[go-language-basics|Go Language Basics — Packages, Semantics, and Concurrency]]
- [[go-marshaling-comparison|Go Marshaling Strategies]]
- [[golang|Golang]]
