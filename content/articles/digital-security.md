---
title: "Digital Security"
date: 2025-01-15
tags:
  - '#backend'
description: "Course-style outline for digital security: vulnerabilities, secure development, and incident response"
layout: post.njk
---

# Digital Security

These are course notes distilled from security lectures and references.

## Digital Security: The Cost of Neglect and Effective Prevention

**Video References:**
- OWASP Top 10 (overview): https://owasp.org/www-project-top-ten/
- Google Cloud: Incident Response Playbook: https://cloud.google.com/architecture/incident-response-playbook

---

## Lesson Structure

### Lesson 1: Common Vulnerabilities in Software Systems

**Introduction:**
- Context on common vulnerabilities in software systems.
- Importance of OWASP and its updated lists.
- Focus on common software systems (e.g., web applications).

**Key Vulnerabilities:**
- **Unauthorized Resource Access:**
  - Problem: Malicious users accessing restricted data.
  - Solutions:
    - Strict permission validation.
    - Principle of least privilege.
    - Use of frameworks/tools (e.g., Spring Security).
  - Best practices:
    - Protect sensitive endpoints.
    - Apply rate limiting and API controls.
- **Cryptography & Sensitive Data:**
  - Problem: Exposure of passwords and personal information.
  - Solutions:
    - Encrypt sensitive data.
    - Use secure algorithms (e.g., SHA-256 for hashes).
    - Enforce HTTPS.
  - Best practices:
    - Avoid storing unnecessary data.
    - Use mature tooling for key management.
- **Injection:**
  - Problem: SQL Injection, Shell Injection, etc.
  - Solutions:
    - Rigorous sanitization of user input.
    - Validate types, formats, and sizes.
  - Best practices:
    - Never trust input directly.
    - Configure serializers to avoid malicious execution.

---

### Lesson 2: Secure Development Practices

**Input Validation:**
- Example attacks: e.g., server overload with large payloads.
- Strategies:
  - Limit size and format of inputs.
  - Reject or correct invalid inputs.

**Overflow and Casting:**
- Problem: Exploiting data limits (e.g., integer overflow).
- Solutions:
  - Define clear bounds for inputs and operations.
  - Validate intermediate values (e.g., sums, multiplications).

**Configuration and Exposure:**
- Problem: Unnecessary exposure of APIs and services.
- Solutions:
  - Restrict access to internal services.
  - Sanitize error messages to avoid information leakage.

**Tools and Processes:**
- Use tools like Dependabot and SonarQube for vulnerability analysis.
- Importance of documentation and sharing best practices within the team.

---

### Lesson 3: Incident Response

**Steps to Respond to Attacks:**
- **Detection and Immediate Response:**
  - Set up a dedicated security duty/on-call.
  - Establish clear notification and response processes.
- **Resolution Structure:**
  - Create an incident-response framework (checklists & playbooks).
  - Document every action taken during the incident.
- **Impact Assessment:**
  - Identify financial and operational impact.
  - Assess risk (likelihood and complexity).
- **Learning and Prevention:**
  - Run a post-mortem:
    - Identify root causes.
    - Create preventive actions to avoid similar incidents.
    - Foster a culture of continuous learning.

**Post-Attack Best Practices:**
- Maintain strict control over sensitive information during the incident.
- Record all actions for audit and future analysis.

**Course Conclusion:**
- Security must be integrated from the beginning of development.
- Adopt a proactive mindset: validate, monitor, and learn continuously.
- Apply the practices above to strengthen systems against vulnerabilities and attacks.