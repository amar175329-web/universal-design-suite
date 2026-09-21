---
name: pm-prd
description: Generate a Product Requirements Document from conversation context, initiative data, or a brief description. Outputs structured PRD with problem, solution, requirements, success metrics, and edge cases. Use when user says "/pm-prd", "write a PRD", "spec this out", or needs to document product requirements.
---

# /pm-prd — PRD Generator

Turn ideas into structured Product Requirements Documents.

## Parameters

Invoke with parameters for different contexts:
- `/pm-prd "Add dark mode to dashboard"` → lightweight PRD from description
- `/pm-prd "Onboarding flow" --audience "enterprise admins" --metric "activation rate"` → targeted PRD

| Parameter | Required | Description |
|-----------|----------|-------------|
| `feature_name` | yes | Name or short description of the feature to spec |
| `target_audience` | no | Who this feature is for (e.g., `enterprise admins`, `free-tier users`) |
| `success_metric` | no | Primary metric this feature should move (e.g., `activation rate`, `NPS`) |

## Workflow

### Step 1: Gather Context

Sources (check all, use what's available):
1. User's description (required — at minimum a one-liner)
2. Related initiative from `initiatives.json`
3. Related decisions from `hq/decisions/`
4. Conversation history (recent sessions about this topic)
5. Wiki entities/concepts if referenced

### Step 2: Draft PRD

Structure:

```markdown
# PRD: [Feature Name]
**Author:** [user_name] | **Date:** YYYY-MM-DD | **Status:** Draft

## Problem Statement
What problem does this solve? Who has this problem? How do we know?

## Goals & Success Metrics
- Primary metric: [what moves]
- Secondary metrics: [guardrails]
- Non-goals: [what this is NOT]

## User Stories
- As a [persona], I want to [action] so that [benefit]

## Solution Overview
High-level approach in 2-3 paragraphs.

## Detailed Requirements

### Must Have (P0)
- [ ] Requirement with acceptance criteria

### Should Have (P1)
- [ ] Requirement with acceptance criteria

### Nice to Have (P2)
- [ ] Requirement with acceptance criteria

## Technical Considerations
- Dependencies, APIs, data model changes
- Performance requirements
- Security/privacy implications

## Edge Cases & Error States
- What happens when [X]?
- How do we handle [Y]?

## Launch Plan
- Feature flag? Gradual rollout? Beta first?
- Documentation needed
- Support/CS considerations

## Open Questions
- [ ] Unresolved items that need answers before build
```

### Step 3: Review

Present the draft. Ask:
- "Anything missing or wrong?"
- "Want me to adjust scope (add/remove requirements)?"
- "Ready to save?"

### Step 4: Save

Save to `hq/prds/YYYY-MM-DD-{slug}.md`

Link to initiative in `initiatives.json` if applicable.

## Quick Mode

```
/pm-prd Add dark mode to the dashboard
```

Generates a lightweight PRD (problem + requirements + metrics) without the full ceremony.

## From Voice

Works great with voice input:
```
/pm-prd [voice transcription about the feature idea]
```

Extracts structure from unstructured rambling.
