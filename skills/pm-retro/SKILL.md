---
name: pm-retro
description: Run a weekly retrospective on product progress. Analyzes initiative movement, KPI trends, decision velocity, and energy patterns. Generates actionable insights and adjustments. Use when user says "/pm-retro", "weekly review", "retro", or at end of week.
---

# /pm-retro — Weekly Retrospective

Structured weekly review that turns data into adjustments.

## Workflow

### Step 1: Gather Data (automated)

Read from local files:
- `initiatives.json` — status changes, progress deltas, history entries from the past 7 days
- `metrics.json` — KPI movements
- `hq/decisions/` — decisions made vs still open
- `memory/sessions/` — conversation summaries from the past 7 days
- `memory/observations/` — patterns noticed

### Step 2: Generate the Retro

Structure:

**📊 Week in Numbers**
- Initiatives: X active → Y active, Z completed, W blocked
- KPIs: which moved, which didn't
- Decisions: X made, Y still open (Z aging)
- Sessions: N conversations, top topics

**✅ What Went Well**
- Concrete wins from initiative history
- KPIs that improved
- Decisions that unblocked progress

**🚧 What Didn't**
- Stalled initiatives (no history entries this week)
- KPIs that regressed or flatlined
- Aging decisions
- Blockers that persisted

**💡 Patterns**
- From observations: recurring themes, behavioral patterns
- Time allocation: what consumed most attention vs what moves the needle
- Energy: high-output days vs low-output days (if energy audit data exists)

**🎯 Adjustments for Next Week**
- Top 3 focus items
- Decisions to force
- Initiatives to pause/unpause
- Process changes

### Step 3: Save

Save retro to `memory/sessions/YYYY-MM-DD-weekly-retro.md`

Update initiatives.json if any status changes were agreed (pause, reprioritize, etc.)

### Step 4: Present

Format per channel rules. End with:
"Want to adjust any initiatives or force any decisions based on this?"

## Automated Weekly Run

Can be scheduled via `/pm-setup`:
```
schedule_task(prompt="/pm-retro", schedule_type="cron", schedule_value="0 18 * * 5")
```
Runs Friday 6pm, posts retro to the chat.
