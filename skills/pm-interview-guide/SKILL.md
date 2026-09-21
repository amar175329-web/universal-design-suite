---
name: pm-interview-guide
description: Create user interview scripts with hypotheses, questions, and analysis frameworks. Use when user says "/pm-interview-guide", "user interview", "customer discovery", "talk to users", or needs to prepare for user research.
---

# /pm-interview-guide — User Interview Script Generator

Create structured interview guides that extract real insights (not validation).

## Parameters

Invoke with parameters for different contexts:
- `/pm-interview-guide "Why do users churn after day 7?"` → Mom Test script for churn research
- `/pm-interview-guide "Onboarding friction" --persona "enterprise admin" --method jobs-to-be-done` → JTBD-framed guide

| Parameter | Required | Description |
|-----------|----------|-------------|
| `research_question` | yes | What you want to learn from the interviews |
| `persona` | no | Who you are interviewing (e.g., `enterprise admin`, `power user`, `churned customer`) |
| `method` | no | Interview methodology: `mom-test` (default), `jobs-to-be-done`, or `usability` |

## Workflow

### Step 1: Define the Research Goal

Ask:
- "What do you want to learn?" (problem validation, solution feedback, pricing, churn reason)
- "Who are you interviewing?" (persona, segment)
- "What's your hypothesis?" (what you believe is true that you're testing)

### Step 2: Generate Script

Based on Mom Test principles (Rob Fitzpatrick):
- Never ask "Would you use this?" (they'll say yes to be nice)
- Ask about past behavior, not future intent
- Ask about specifics, not generalities
- Let them talk — follow the energy

Structure:
```markdown
# Interview Guide: [Topic]
**Hypothesis:** [What we're testing]
**Persona:** [Who we're talking to]
**Duration:** 25-30 min

## Warm-Up (2 min)
- Tell me about your role and what you're working on right now.

## Context (5 min)
- Walk me through the last time you [relevant behavior].
- How often does [problem] come up?
- What do you currently do about it?

## Deep Dive (15 min)
- [3-5 questions that test the hypothesis without leading]
- [Follow-up probes for each]

## Solution Exploration (5 min)
- [If showing a concept] What's your first reaction?
- What would you expect this to do?
- What's missing?

## Wrap-Up (3 min)
- If you could wave a magic wand, what would you change about [domain]?
- Is there anyone else I should talk to about this?
- Can I follow up if I have more questions?

## Observer Notes Template
- Strongest emotional reaction:
- Unexpected insight:
- Hypothesis supported / challenged:
- Quote worth saving:
```

### Step 3: Anti-Patterns Check

Flag if any questions are:
- Leading ("Don't you think X would be better?")
- Future-intent ("Would you pay for this?")
- Feature requests ("What features do you want?")
- Too broad ("What are your pain points?")

Replace with better alternatives.

### Step 4: Post-Interview

After the interview, offer:
- "Paste your notes and I'll extract insights"
- Pattern analysis across multiple interviews
- Update initiative/PRD based on findings
- Save findings to `memory/wiki/sources/YYYY-MM-DD-interview-{name}.md`
