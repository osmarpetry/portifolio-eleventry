---
title: "ACR Frontend — Workflow Completo de Feature Development"
date: 2026-01-26
status: active
tags: [code, note-review]
description: "Consolidação do workflow ACR (Architecture, Code Review) para desenvolvimento frontend com Outside-In TDD, Storybook-first e disciplina de escopo em PRs. Baseado em notas digitais e manuscritas."
layout: post.njk
---

## Problem / Question

Como estruturar um workflow de desenvolvimento frontend que garanta qualidade, escopo controlado de PRs e integração disciplinada — evitando scope creep, boy scouting fora de contexto e PRs "frankenstein" que misturam ticket com melhorias avulsas? E como escalar esse workflow com multi-agent (individualmente via worktrees e em time via adoção gradual)?

## Approach

Combinar um pipeline de fases (ADR → BDD → Storybook → Types → GraphQL → Component → Integration → Deploy) com regras rígidas de escopo de PR e uso de `git stash` para isolar melhorias oportunistas. Complementar com o uso de agentes AI para acelerar a fase de planejamento (ADR) sem pular etapas, e escalar para multi-agent com git worktrees (individual) e adoção em 4 camadas (time).

## Solution

### O Pipeline ACR em 7 Fases

| Fase | Tempo | Produz Código? | Output |
|------|-------|----------------|--------|
| 0. Preparação | 30min | Não | ADR + estrutura de pastas |
| 1. BDD (Outside-In) | 30min | Não | Scenarios Cypress/Playwright (failing) |
| 2. Storybook | 45min | Não | ≥5 stories (Empty, Loading, Error, Success, Edit) |
| 3. Types & Schema | 30min | Sim | Domain types + Zod schema (zero `any`) |
| 4. GraphQL Layer | 30min | Sim | Custom hooks + queries/mutations |
| 5. Component Dev | 2–3h | Sim | Implementação Red → Green → Refactor |
| 6. Integration | 1h | Não | E2E passando + Storybook interactions |
| 7. Review & Deploy | 30min | Não | PR merged |

**Total estimado: ~6h por feature completa.**

### Regra de Ouro: Escopo do PR

> "O PR deve conter apenas o escopo do ticket."

Quando encontrar uma situação de *boy scouting* (melhoria oportunista no código), o procedimento é:

1. `git stash` — salvar a melhoria fora do branch atual.
2. Entregar apenas o ticket no PR.
3. Depois, criar um PR complementar com o stash.
4. Antes de aplicar o stash, verificar se ele terá poucos conflitos com `main`.
5. Se necessário, fazer um PR separado só para a melhoria.

### Uso de AI Agent no Planejamento

O fluxo atualizado com agente AI:

```
IDEIA → Ticket → (Acceptance Criteria + ADR) → Escopo da atividade no código → TDD
```

Antes, para sair do campo da imaginação ou da arquitetura, era necessário escrever código diretamente. Atualmente, dá para realizar o planejamento completo do ADR pelo uso de um agente — o que permite definir boundaries, listar conflitos e mapear dependências antes de tocar no editor.

### Escalando: Multi-Agent por Feature (Individual)

A ideia core é dividir a feature em subtarefas que correm em paralelo e de forma isolada, usando git worktrees:

```bash
# Worktrees separadas para cada agente
git worktree add ../feature-auth auth-branch
git worktree add ../feature-api  api-branch
git worktree add ../feature-ui   ui-branch
```

Cada diretório é um workspace isolado. Abres uma sessão de Claude Code (ou Codex) em cada um, defines o scope, e deixas correr em paralelo.

O papel do dev muda — de **implementador** para **orchestrator**:

- Define as interfaces/contratos entre as partes **antes** de deixar os agentes trabalhar.
- Revisa os PRs de cada subagente.
- Resolve conflitos de integração no final.

**Risco principal:** agentes em paralelo podem tomar decisões inconsistentes se o contrato entre eles não estiver bem definido à partida (ex: nomes de tipos, estrutura de resposta de uma API interna).

### Escalando: Adoção Multi-Agent no Time (Gradual)

O problema aqui não é técnico — é de mudança de cultura e workflow. A abordagem que funciona é introduzir em camadas:

| Camada | O quê | Atrito |
|--------|-------|--------|
| 1. Autocomplete avançado | Cada dev usa AI no editor, sem mudar o fluxo do time | Zero |
| 2. AI no PR review + testes | Agente gera testes para código já escrito. Baixo risco, valor visível rápido | Baixo |
| 3. Agent por branch/feature | Um agente por subtarefa. Requer acordo sobre como definir tarefas (bom prompt, scope certo) | Médio |
| 4. Orchestration real | Multi-agent coordenado com alguém no papel de orchestrator. Time já tem intuição sobre o que os agentes fazem bem e mal | Alto |

**A maior armadilha na adoção em time:** não é a ferramenta — é a falta de acordo sobre quando confiar no output e quando revisar com cuidado. Devs sem experiência com AI tendem a cair num de dois extremos: aceitar tudo cegamente, ou rejeitar por desconfiança. O onboarding precisa cultivar o instinto do meio — **ceticismo calibrado**.

### Estrutura de Pastas por Feature

```
src/features/[feature-name]/
├── components/
│   ├── FeatureComponent.tsx
│   ├── FeatureComponent.stories.tsx
│   └── FeatureComponent.test.tsx
├── hooks/
│   └── useFeatureQuery.ts
├── graphql/
│   ├── queries.ts
│   └── mutations.ts
├── types/
│   └── Feature.ts
└── utils/
    └── validation.ts
```

### Checklist de PR

- [ ] ADR documentado
- [ ] ≥5 Storybook stories
- [ ] Coverage ≥80%
- [ ] E2E scenarios passando
- [ ] a11y violations = 0
- [ ] TypeScript sem `any` ou `@ts-ignore`
- [ ] Rebase com `main` sem conflitos
- [ ] GraphQL schema atualizado (se necessário)

### Analogia: Construir Software = Construir Casa

- **ADR** = Licença de construção (permissões, boundaries)
- **BDD** = Inspeção final desejada (a casa passa ou não?)
- **Storybook** = Maquete 3D (todos os estados visuais)
- **Types/Schema** = Planta estrutural (fundação)
- **GraphQL** = Encanamento (data flow)
- **Component** = Construção real (paredes, portas, janelas)
- **Tests** = Inspeção durante obra
- **E2E** = Vistoria final

Você só mora na casa (deploy) depois que tudo passou.

## Rating

Confidence (1–5): **4**

## Summary (3 sentences)

O ACR FE é um workflow de 7 fases que prioriza planejamento e contratos visuais (ADR, BDD, Storybook) antes de escrever código de produção. A disciplina de escopo de PR — usando `git stash` para isolar boy scouting — evita PRs inflados e conflitos desnecessários. O workflow escala para multi-agent via git worktrees (individual) e adoção em camadas no time, onde o pré-requisito crítico é cultivar "ceticismo calibrado" sobre o output dos agentes.

## Key Quotes

1. "O PR deve conter apenas o escopo do ticket."
2. "Quando eu falo de foco, é pra eu usar essa energia, mas entregando algo limpo."
3. "Você só mora na casa (deploy) depois que tudo passou."
4. "O onboarding precisa cultivar o instinto do meio — ceticismo calibrado."

## Personal Insights

- A tentação do *boy scouting* inline é real — o `git stash` como disciplina operacional (não só ferramenta) transforma o hábito de "arrumar o que viu" em algo controlável e rastreável.
- O salto de "preciso escrever código pra sair da imaginação" para "o agente me ajuda a materializar o ADR antes do código" muda fundamentalmente o custo de planejar. O planejamento deixa de ser overhead e vira output concreto.
- Fazer pausas para planejar (como na atividade da Amy) não é perda de tempo — é o que garante que o foco se converta em entrega limpa, não em código "bonus sem foco" (MOZA → bonus = sem foco).
- O workflow Outside-In (BDD → Storybook → Types → Code) força a pensar no comportamento antes da implementação, o que naturalmente reduz retrabalho.
- A transição de implementador para orchestrator com multi-agent não é só operacional — exige que o dev saiba definir contratos/interfaces com precisão cirúrgica antes de disparar os agentes. O ADR ganha ainda mais peso nesse cenário.
- A adoção em camadas no time resolve o problema de "tudo ou nada" — começar pelo autocomplete e escalar até orchestration real dá tempo para o time desenvolver o instinto de ceticismo calibrado.

## Action Items

- [ ] Buscar no YouTube conteúdo sobre TDD Outside-In aplicado a React/Next.js — **Owner:** @ — **Due:** próxima semana
- [ ] Comprar caderno de ortografia — **Owner:** @ — **Due:** esta semana
- [ ] Mover anotações para novo livro/caderno — **Owner:** @ — **Due:** esta semana
- [ ] Aplicar o workflow ACR completo na próxima feature do Cyberr como validação — **Owner:** @ — **Due:** próximo ticket
- [ ] Experimentar git worktrees + Claude Code em paralelo numa feature com 2–3 subtarefas isoláveis — **Owner:** @ — **Due:** próximo sprint
- [ ] Preparar proposta de adoção em camadas (Camada 1 → 2) para apresentar ao time Cyberr — **Owner:** @ — **Due:** a definir

## Questions

1. Qual o melhor approach para o `git stash` quando o boy scouting envolve mudanças no mesmo arquivo do ticket?
2. Como integrar o agente AI na fase de ADR sem que ele gere decisões arquiteturais que o dev não validou?
3. O threshold de ~6h por feature é realista para features que envolvem múltiplos componentes e schemas GraphQL complexos?
4. Como garantir consistência de contratos (tipos, nomes, estrutura de API) entre agentes rodando em paralelo via worktrees?
5. Qual o momento certo para avançar de uma camada de adoção para a próxima no time?

## Answers

1. Usar `git stash -p` (patch mode) para selecionar apenas os hunks de boy scouting, mantendo as mudanças do ticket no working tree. Alternativamente, commitar o ticket primeiro e depois fazer `git stash pop` num branch separado.
2. Tratar o agente como "autocomplete de planejamento" — ele gera o draft do ADR, mas o dev revisa boundaries, conflitos e dependências antes de avançar para BDD. O agente nunca decide sozinho.
3. Depende da complexidade. ~6h é o baseline para features unitárias (1 form, 1 mutation, 1 listagem). Features compostas podem exigir múltiplos ciclos ACR paralelos ou sequenciais, cada um com ~6h.
4. Definir os contratos (interfaces TypeScript, schemas GraphQL, nomes de tipos) num ficheiro shared **antes** de criar as worktrees. Cada agente recebe esse ficheiro como contexto no prompt. Alternativa: um branch `contracts` que todos os worktrees referenciam como base.
5. Quando o time demonstra conforto consistente na camada atual — i.e., não há mais debates sobre "posso confiar nisto?" na camada corrente. O sinal é que o ceticismo calibrado já se tornou instinto, não esforço consciente.

## Key Insights

- Disciplina de escopo > velocidade de entrega. Um PR focado é mais fácil de revisar, menos propenso a conflitos e mais rastreável no histórico.
- O pipeline Outside-In inverte o instinto natural de "codar primeiro" — e essa inversão é o que gera qualidade.
- AI agents no planejamento reduzem o custo cognitivo de "sair da imaginação", mas não substituem a validação humana das decisões arquiteturais.
- Foco sem disciplina de entrega vira MOZA (bonus sem foco). O sistema ACR existe para canalizar energia em output limpo.
- Multi-agent escala o ACR horizontalmente, mas amplifica o custo de contratos mal definidos. O ADR deixa de ser "nice to have" e passa a ser pré-requisito de correctness.
- Ceticismo calibrado é a skill meta da adoção de AI em times — nem aceitar tudo, nem rejeitar tudo. É o instinto que separa uso produtivo de uso perigoso.

## Related Notes

- [[tdd-systematic-review|TDD Effects on Quality and Productivity]]
- [[bdd|BDD]]
- [[enterprise-ui-development|Enterprise UI Development — Testing, Standards, and Ego Control]]
- [[testing-concepts-notes|Testing Concepts Notes]]
- [[code-smells-impact-maintainability|Code Smells and Maintainability]]
- [[tidy-first|Tidy First? — Field Notes + React/TypeScript & Go Examples]]
- [[pr-and-issue-pattern-to-follow|PR and Issue Pattern to Follow]]
- [[agile|Agile Software Development]]
- [[shape-up|Shape Up: Stop Running in Circles and Ship Work that Matters]]
- [[design-pattern|Design Pattern]]
