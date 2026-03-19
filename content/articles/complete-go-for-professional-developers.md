---
title: "Complete Go for Professional Developers — Course Notes"
date: 2025-05-20
tags:
  - golang
  - backend
  - api
description: "Summary of Melkey’s Frontend Masters course covering Go fundamentals, REST APIs, PostgreSQL integration, authentication, and testing strategies."
layout: post.njk
---

# Complete Go for Professional Developers — Course Notes

## Introduction

These notes rewrite the original `Complete Go for Professional Developers.md` into the Notion format. The Frontend Masters course, led by Melkey, walks through building a production-ready workout tracking API in Go. Key topics include language fundamentals, REST API design, PostgreSQL integration, user authentication, middleware, and testing.

## Course Overview

- **Instructor**: Melkey (Frontend Masters)
- **Project**: Workout tracker API with authentication
- **Tooling**: Go, Chi router, PostgreSQL (Docker), Goose migrations
- **Deliverables**: Deployable API with tests, JWT-based auth, structured modular architecture

## Key Concepts

- Go syntax and types (variables, functions, structs, slices/maps/pointers)
- Building REST APIs with Chi: routing, middleware, handlers
- PostgreSQL setup via Docker, migrations with Goose, data access layers
- Authentication: bcrypt password hashing, JWT issuance and validation, route protection
- Testing: Go’s testing framework, integration tests with a dedicated test database, error handling strategies

## Detailed Notes

### Go Fundamentals

- Review of Go’s type system, control structures, collections, and pointer semantics
- Emphasis on idiomatic error handling and structuring code with packages

### Backend/API Development

- Setting up an HTTP server using Chi
- Defining REST endpoints for CRUD operations
- Decoupling handlers from business logic via services and repositories

### Database Integration

- Running PostgreSQL in Docker
- Managing schema changes with Goose migrations
- Implementing repository patterns for maintainable data access

### Authentication & Security

- Registering users with hashed passwords (bcrypt)
- JWT-based authentication for login and session management
- Guarding routes with custom middleware to enforce auth

### Testing & Error Handling

- Writing unit and integration tests with Go’s `testing` package
- Using a dedicated test database or mocks for repository tests
- Structuring errors to surface informative messages to API clients

### Application Architecture

- Separation of concerns between HTTP layer, business logic, and persistence
- Leveraging interfaces to improve testability and plugability

## Questions & Ideas

- How to extend the platform with user profiles, social features, or analytics?
- Which deployment strategy works best (Docker Compose, Kubernetes, serverless)?
- How to scale the workload as usage grows—caching, horizontal scaling, service decomposition?

## Action Items

- Build the workout tracker by following the course modules
- Experiment with Go concurrency (goroutines/channels) around background tasks or notifications
- Implement full CRUD and test with `curl` or Postman
- Harden authentication flows (JWT refresh, password reset)
- Write comprehensive tests (unit, integration, end-to-end) and integrate into CI/CD

## Related Materials

- [Go Programming Language Documentation](https://go.dev/doc/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Docker Documentation](https://docs.docker.com/)
- [RESTful API Design Principles](https://restfulapi.net/)
- Frontend Masters course link: [https://frontendmasters.com/courses/complete-go/](https://frontendmasters.com/courses/complete-go/)

## Related Notes

- [[backward-design-go-concurrency|Backward Design for Learning]]
- [[go-http-client-workshop|HTTP Clients and Concurrency in Go]]
- [[go-language-basics|Go Language Basics — Packages, Semantics, and Concurrency]]
- [[go-learning-agenda-jujus-challenge|Go Learning Agenda (Juju's Challenge)]]
- [[go-marshaling-comparison|Go Marshaling Strategies]]
- [[golang|Golang]]
- [[graphql|GraphQL]]
