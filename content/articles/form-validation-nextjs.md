---
title: "Form Validation in Next.js"
date: 2025-04-10
tags:
  - react
  - frontend
  - typescript
  - testing
description: "Client and server validation strategies for Next.js and React 19 forms using Zod, React Hook Form, and server actions."
layout: post.njk
---

# Form Validation in Next.js

## ⭐ Overview
Form validation protects data integrity and user experience. Combine client-side feedback with server-side enforcement for robust apps.

## 🧠 Client-side patterns
- **HTML5 attributes**: `required`, `type="email"`, `minLength`, `maxLength` for quick wins.
- **React Hook Form + Zod**: schema-based validation, minimal re-renders.
- **React 19 hooks**: `useFormState`, `useFormStatus` to reflect pending/error states.
- **Debounced inputs**: delay validation on change to avoid noisy errors.

## 🧾 Server-side strategies
- **Server Actions**: validate inside Next.js server actions before mutating data.
- **API Routes / Route Handlers**: apply Zod or class-validator for parity with clients.
- **Edge functions**: run lightweight validation for critical latency paths.

## 🧪 Example
```tsx
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email
        <input type="email" {...register('email')} aria-invalid={!!errors.email} />
      </label>
      {errors.email && <span role="alert">{errors.email.message}</span>}

      <label>Password
        <input type="password" {...register('password')} aria-invalid={!!errors.password} />
      </label>
      {errors.password && <span role="alert">{errors.password.message}</span>}

      <button type="submit" disabled={isSubmitting}>Submit</button>
    </form>
  );
}
```

## 🧭 Best practices
- Lazy-load heavy form components for faster TTI.
- Mirror validation schemas on server and client (shared Zod schemas).
- Provide clear, accessible error messaging with `aria-live` regions.
- Use integration tests (Playwright/Testing Library) to verify validation flows.

## 🚀 Benefits
- **Performance**: smaller bundles with code splitting & debounce.
- **Security**: server-side validation blocks malicious inputs.
- **UX**: real-time feedback, consistent messaging.
- **Maintainability**: single source of truth for rules.

## Related Notes

- [[enterprise-ui-development|Enterprise UI Development — Testing, Standards, and Ego Control]]
- [[forwarding-ref|Forwarding Ref]]
- [[react-battle-of-monsters-challenge|React Coding Challenge — Battle of Monsters]]
- [[react-suspense|React.Suspense]]
- [[react-with-responsiveness|React with Responsiveness]]
- [[remix-is-react-router|Remix is React Router — what that means in practice]]
- [[testing-enterprise-ui|Enterprise UI Testing & Quality Ramp-Up]]
