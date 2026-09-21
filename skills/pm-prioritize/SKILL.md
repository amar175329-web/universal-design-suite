---
name: pm-prioritize
description: Score and prioritize features or initiatives using RICE, ICE, or weighted scoring frameworks. Use when user says "/pm-prioritize", "help me prioritize", "what should I build next", or needs to rank competing options.
---

# /pm-prioritize — Prioritization Framework

Score competing features, initiatives, or tasks to decide what to build next.

## Frameworks Available

### RICE (default)
- **Reach**: How many users/month will this affect? (number)
- **Impact**: How much will it move the needle per user? (0.25=minimal, 0.5=low, 1=medium, 2=high, 3=massive)
- **Confidence**: How sure are we about estimates? (100%=high, 80%=medium, 50%=low)
- **Effort**: Person-weeks to build (number)
- **Score** = (Reach × Impact × Confidence) / Effort

### ICE (quick mode)
- **Impact**: 1-10
- **Confidence**: 1-10
- **Ease**: 1-10 (inverse of effort)
- **Score** = Impact × Confidence × Ease

### Weighted Scoring (custom)
- User defines criteria and weights
- Each option scored 1-10 on each criterion
- Weighted sum produces final ranking

## Workflow

### Step 1: Collect Items

Ask: "What are you choosing between?" Accept:
- Free-text list
- Initiative names from initiatives.json
- "All active initiatives"

### Step 2: Choose Framework

Default to RICE. Suggest ICE for quick decisions (< 5 items, low stakes).
Suggest Weighted Scoring when criteria go beyond standard RICE dimensions.

### Step 3: Score

For each item, either:
- **Ask the user** for each dimension (interactive mode)
- **Estimate from context** using initiative data, KPIs, and market knowledge (auto mode)
- **Hybrid**: estimate first, ask user to adjust

Always show your reasoning for auto-estimates.

### Step 4: Present Results

Ranked table:
```
| # | Feature           | Reach | Impact | Conf | Effort | RICE  |
|---|-------------------|-------|--------|------|--------|-------|
| 1 | Onboarding V2     | 5000  | 2      | 80%  | 3      | 2,667 |
| 2 | API Rate Limiting | 1000  | 3      | 90%  | 4      | 675   |
```

Add commentary:
- "Clear winner" vs "Close call — tiebreaker needed"
- Sensitivity analysis: "If Onboarding effort is actually 5 weeks, it drops to #2"

### Step 5: Act on Results

- "Want me to update initiative priorities based on this ranking?"
- Update initiatives.json with new priority order if confirmed
- Log the prioritization in decisions history
