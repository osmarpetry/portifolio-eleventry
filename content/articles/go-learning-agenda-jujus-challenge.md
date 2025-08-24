---
title: "Go Learning Agenda (Juju's Challenge)"
date: 2025-01-15
tags:
  - '#golang'
  - '#backend'
description: "A practical learning agenda to build a Go HTTP API while covering fundamentals, testing, observability, and containerization"
layout: post.njk
---

# Go Learning Agenda (Juju's Challenge)

Build an HTTP API responsible for handling a phone agenda (contacts). The goal is not the features themselves, but the engineering decisions along the way: configuration, API design, testing, logging/metrics, persistence, and containerization.

## General
- [x] The HTTP service should be configurable through flags on startup (timeouts and port to use)

## Endpoints
- [x] Endpoint to create a contact
- [x] Endpoint to edit contact information
- [x] Endpoint to delete a contact
- [x] Endpoint to get a contact by id
- [x] Endpoint to search contacts by partial name
- [x] Endpoint to list all contacts

## Tests
- [ ] Target reasonable coverage (≥ 70%) with table-driven tests
- [ ] Add end-to-end tests that hit the real HTTP server (good chance to try an HTTP client)

## Logs & Metrics
- [ ] Log one line per request: method, path, status code, latency
- [ ] On error, log status and a helpful message to aid troubleshooting
- [ ] Collect service and host metrics (suggestion: Prometheus) ([prometheus go app guide](https://prometheus.io/docs/guides/go-application/))

## Containerization and Storage
- [ ] Include a buildable Dockerfile (note: pure `scratch` images may break HTTPS requests; be mindful for real-world needs) ([reference](https://levelup.gitconnected.com/complete-guide-to-create-docker-container-for-your-golang-application-80f3fb59a15e))
- [x] Persist data with any storage solution you prefer (file, SQLite, Postgres, etc.)

## Suggested learning path
1. CLI & configuration: flags, env, and sane defaults.
2. HTTP server: handlers, context, timeouts, graceful shutdown.
3. Validation & errors: structured errors and proper HTTP status mapping.
4. Data layer: interface-driven repository with an in-memory impl first, then swap to a real store.
5. Testing: table-driven unit tests; e2e tests booting the server on a random port.
6. Observability: middleware for request logging and Prometheus metrics.
7. Containerization: multi-stage build; minimal runtime image; healthcheck.
8. Extras: rate limiting, request IDs, pprof.

## FIX
- [x] Avoid stutter like `Phonebook.InsertPhonebook`; use `Phonebook.Insert` instead
- [x] Fix database configuration
- [ ] Add better user-facing/API error feedback (consistent JSON error schema)