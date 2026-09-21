---
name: pm-decision
description: Log and classify a product decision using Type 1 (irreversible) / Type 2 (reversible) framework. Captures context, options, trade-offs, and deadline. Updates Command Center and decision log. Use when user says "/pm-decision", "I need to decide", "should we X or Y", or mentions a strategic choice.
---

# /pm-decision — Decision Logger

Log product decisions with the Type 1 / Type 2 framework (Bezos).

## Parameters

Invoke with parameters for different contexts:
- `/pm-decision Should we use Stripe?` → quick classification
- `/pm-decision "Platform migration to AWS" --type-1` → force irreversible framing

| Parameter | Required | Description |
|-----------|----------|-------------|
| `decision_text` | yes | The decision to classify and analyze |
| `type_override` | no | Force `type-1` or `type-2` classification |

## Type Classification

- **Type 1 (One-way door):** Irreversible or very costly to reverse. Requires careful analysis.
  Examples: pricing model, platform migration, major pivot, team hire, public launch
- **Type 2 (Two-way door):** Easily reversible. Decide fast, iterate.
  Examples: UI copy, A/B test variant, tool choice, feature flag, meeting cadence

## Workflow

### Step 1: Capture the Decision

Ask (or extract from context):
1. **What's the decision?** — One-line title
2. **Context** — Why is this decision needed now? What triggered it?
3. **Options** — List 2-4 options with pros/cons
4. **Stakeholders** — Who's affected?
5. **Deadline** — When must this be decided? (Default: Type 1 = 48h, Type 2 = now)

### Step 2: Classify

Determine Type 1 or Type 2 based on:
- Can it be reversed within a week without significant cost? → Type 2
- Does it affect >50% of users, lock in architecture, or commit significant budget? → Type 1
- When in doubt, it's Type 2

### Step 3: Recommend

For **Type 2**: Make a recommendation immediately. Bias toward action.
- "I'd go with Option B because [reason]. It's reversible — we can switch in [timeframe]."

For **Type 1**: Present structured analysis.
- Options matrix with weighted criteria
- Risk assessment for each option
- Recommendation with reasoning
- "This is a one-way door. Take 24-48h to sit with it."

### Step 4: Save

Append to `hq/decisions/` directory:

```json
{
  "id": "dec-YYYY-MM-DD-slug",
  "title": "Decision title",
  "type": "Type 1",
  "status": "open",
  "context": "Why this decision matters now",
  "options": [
    {"name": "Option A", "pros": ["..."], "cons": ["..."]},
    {"name": "Option B", "pros": ["..."], "cons": ["..."]}
  ],
  "recommendation": "Option B because...",
  "stakeholders": ["PM", "Eng Lead"],
  "deadline": "2026-04-15",
  "created": "2026-04-11",
  "decided": null,
  "outcome": null
}
```

Also update `hq-config.json` → `decisions` array so the Command Center shows it.

### Step 5: Follow Up

For Type 1 decisions approaching deadline:
- Daily brief flags them as "⚠️ aging"
- After 48h, escalate: "This Type 1 decision is 3 days old. Time to decide or explicitly defer."

When decided:
- Update `status` to "decided", set `outcome`
- Move to history section in Command Center
- Log in initiatives if it affects one

## Quick Mode

If user provides enough context in one message:
```
/pm-decision Should we use Stripe or Paddle for billing?
Context: Stripe has better docs, Paddle handles EU tax automatically
```

Skip the questions, classify, recommend, save — all in one response.
