---
title: "Remix is React Router — what that means in practice"
date: 2025-09-01
tags:
  - '#frontend'
  - '#react'
  - '#nodejs'
description: "How Remix builds on React Router: nested routing + data loaders/actions + progressive enhancement."
layout: post.njk
---

## Summary
- Remix was built by the React Router authors and, as of RR v7, Remix v2 features ship in React Router’s framework mode. :contentReference[oaicite:0]{index=0}  
- Your app = **nested routes** + **data loaders** (reads) + **actions** (writes) + **forms/fetchers**. :contentReference[oaicite:1]{index=1}  
- Server handles data. Router coordinates **fetch → render → revalidate** on nav and mutations; tune with `shouldRevalidate`. :contentReference[oaicite:2]{index=2}

---

## Mental model
- **Route = UI + data contract.**  
  - `loader()` → fetch data for GET.  
  - `action()` → handle POST/PUT/PATCH/DELETE.  
- **Nested routing** gives **nested data + layouts**.  
- **Forms** submit to actions and work **without JS**; with JS you get **instant SPA** transitions. :contentReference[oaicite:3]{index=3}  
- **Revalidation**: after an action, Remix re-runs affected loaders. :contentReference[oaicite:4]{index=4}

---

## Quick start (route module)
```tsx
// app/routes/posts.$id.tsx
import { Form, useLoaderData, useActionData } from "@remix-run/react";
import { json, type ActionFunctionArgs, type LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ params }: LoaderFunctionArgs) {
  const post = await db.post.find(params.id!);
  if (!post) throw new Response("Not found", { status: 404 });
  return json(post); // serialized to the client with proper headers
}

export async function action({ request, params }: ActionFunctionArgs) {
  const form = await request.formData();
  const body = form.get("body") as string;
  await db.post.update(params.id!, { body });
  return json({ ok: true });
}

export default function Post() {
  const post = useLoaderData<typeof loader>();
  const res = useActionData<typeof action>();
  return (
    <>
      <article>{post.body}</article>
      {res?.ok && <p role="status">Saved.</p>}
      <Form method="post" replace>
        <textarea name="body" defaultValue={post.body} />
        <button type="submit">Save</button>
      </Form>
    </>
  );
}
```

---

## Patterns to use

* **Layouts via nesting:** `routes/_layout.tsx` → `routes/_layout.posts.tsx` → `routes/_layout.posts.$id.tsx`.
* **Fetcher** for background work (edit-in-place, optimistic UI). :contentReference[oaicite:5]{index=5}
* **ErrorBoundary** per route with `useRouteError` (**CatchBoundary** deprecated). :contentReference[oaicite:6]{index=6}
* **Action-driven nav:** return `redirect("/posts")` from `action()` after create/delete.

---

## Testing hooks

* **Loaders/Actions = pure-ish** functions → unit test with fake `request/params`.
* **Routes**: render with **`createMemoryRouter`** to test nested UI and transitions. :contentReference[oaicite:7]{index=7}

---

## When to pick Remix

* You want **form-first, server-led** data flow with **SPA feel**.
* You need **nested** layouts and **automatic data revalidation**.
* You prefer **one router** to coordinate UI, data, and navigation. :contentReference[oaicite:8]{index=8}

