---
name: pm-energy-audit
description: Weekly energy and zone-of-genius review based on Matt Mochary's CEO operating system. Identifies energy-giving vs energy-draining activities and suggests delegation or restructuring. Use when user says "/pm-energy-audit", "energy audit", "I'm burned out", "what should I delegate", or at end of week.
---

# /pm-energy-audit — Energy & Zone of Genius

Mochary Method: track what gives you energy vs drains it, then restructure.

## Concept

Every activity falls into one of four zones:
- **Zone of Genius** (energizing + uniquely good at) → Do more
- **Zone of Excellence** (good at but draining) → Delegate ASAP
- **Zone of Competence** (average, neutral) → Automate or delegate
- **Zone of Incompetence** (bad at + draining) → Stop immediately

## Workflow

### Step 1: Collect Activities

Pull from the past 7 days:
- Session summaries (topics discussed, tasks done)
- Initiative work (what moved, what was hands-on vs delegation)
- Decisions made
- Meetings/calls (if calendar data available)

Present the list: "Here's what you spent time on this week. Rate each:"

### Step 2: Energy Rating

For each activity, ask:
- **Energy**: +2 (love it) / +1 (enjoy) / 0 (neutral) / -1 (draining) / -2 (hate it)
- Or just: "Which of these gave you energy? Which drained you?"

### Step 3: Zone Classification

Map each activity:
| Activity | Energy | Skill | Zone |
|----------|--------|-------|------|
| Writing PRDs | +2 | High | Genius |
| Status meetings | -1 | High | Excellence |
| Bug triage | -2 | Low | Incompetence |

### Step 4: Recommendations

**Zone of Genius** — Protect this time. Block calendar. Say no to things that compete with it.

**Zone of Excellence** — "You're good at [X] but it drains you. Can you delegate to [person/agent]?"

**Zone of Competence** — "This can be automated or delegated. Your agent can handle [X]."

**Zone of Incompetence** — "Stop doing [X]. Delegate, automate, or drop it entirely."

### Step 5: Action Plan

Concrete next steps:
1. Block 2h/day for Zone of Genius work
2. Delegate [specific task] to [person/agent]
3. Automate [specific task] with [tool/skill]
4. Drop [specific task] — it's not moving the needle

Save to `memory/sessions/YYYY-MM-DD-energy-audit.md`

### Step 6: Trend Tracking

If previous audits exist, show trends:
- "Last month you spent 40% in Zone of Excellence. This week it's 25% — good progress."
- "Zone of Genius time increased from 2h to 4h/day."

## Quick Mode

```
/pm-energy-audit "This week I spent too much time in meetings and not enough building"
```

Skip the full activity list, focus on the specific concern.
