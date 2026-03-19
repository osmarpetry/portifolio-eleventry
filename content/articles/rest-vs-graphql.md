---
title: "REST First, GraphQL as a Complement"
date: 2025-04-15
tags:
  - api
  - software-architecture
  - graphql
description: "Review of Roy Fielding’s REST principles and when to introduce GraphQL for flexibility."
layout: post.njk
---

# REST First, GraphQL as a Complement

## 📄 Abstract
Roy Fielding’s 2000 dissertation defines REST (Representational State Transfer) as a style for networked systems emphasising simplicity, uniform interfaces, and resource-based design. This review revisits REST fundamentals, argues for keeping REST as the primary API style, and positions GraphQL as an optional add-on for specific scenarios.

## 🔑 Key points
- REST principles:
  - Uniform resource interface with HTTP verbs (GET, POST, PUT, DELETE).
  - Stateless interactions: each request carries necessary context.
  - Cacheability, scalability, client-server separation, independent evolution.
- Current relevance:
  - REST remains the de facto standard due to simplicity, predictability, alignment with Web infrastructure.
  - Clear contracts and versioning strategies are strengths.
- GraphQL as supplement:
  - Addresses REST limitations like over/under-fetching by letting clients specify data shape.
  - Reduces number of requests for complex view needs.
  - Adds backend complexity, requires query governance, complicates caching/monitoring; use judiciously.

## 🔗 Connections
- REST is foundational for Web interoperability (browsers, proxies, caches).
- GraphQL often sits atop existing REST APIs as a gateway for select use cases.
- Hybrid architectures are common: REST covers most cases; GraphQL targets advanced UI demands.

## ❓ Questions
- When do GraphQL benefits outweigh REST’s simplicity?
- How to secure and monitor open GraphQL endpoints effectively?
- What versioning/documentation strategies work for REST + GraphQL ecosystems?
- How to manage caching/observability in GraphQL APIs?

## 📝 Personal reflections
- REST remains the robust choice for most corporate/B2B integrations.
- GraphQL excels for rich UX but should be adopted cautiously.
- REST’s clear contracts simplify governance; GraphQL demands higher maturity.

## 📊 REST vs GraphQL comparison
| Aspect | REST | GraphQL |
| --- | --- | --- |
| Interface | Multiple endpoints per resource | Single endpoint with flexible queries |
| Versioning | URL/versioned contracts | Schema evolution via types |
| Caching | Native HTTP caching | Manual or custom caching layers |
| Flexibility | Limited to endpoint design | High; clients request exact fields |
| Complexity | Low–moderate | Moderate–high (backend & security) |
| Monitoring | Mature tooling | Requires specialised observability |

## 💻 Example
```js
// REST endpoint (Express)
app.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});
```

```js
// GraphQL schema & resolver (Apollo Server)
const typeDefs = gql`
  type User { id: ID!, name: String! }
  type Query { user(id: ID!): User }
`;

const resolvers = {
  Query: {
    user: (_, { id }) => User.findById(id),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
```

## 📚 References
- Roy Fielding, *Architectural Styles and the Design of Network-based Software Architectures* (2000) — [https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)
- Additional comparisons and best practices from AWS, IBM, Postman, WunderGraph, etc.

## Related Notes

- [[agenda-gophers-workshop|Gophers Workshop — Deploy-First Go Architecture]]
- [[backend-architectures|Backend architectures — monolith, services, serverless (maps + trade-offs)]]
- [[books-to-study|Books & Papers to Study]]
- [[code-smells-impact-maintainability|Code Smells and Maintainability]]
- [[complete-go-for-professional-developers|Complete Go for Professional Developers — Course Notes]]
- [[graphql|GraphQL]]
- [[offline-apollo-with-client|Offline Apollo with @client]]
