---
name: pm-stakeholder-update
description: Draft a stakeholder update email or message summarizing product progress, blockers, and next steps. Pulls from initiatives, KPIs, and decisions. Use when user says "/pm-stakeholder-update", "write an update", "status email", or needs to communicate progress to leadership.
---

# /pm-stakeholder-update — Stakeholder Update Drafter

Generate clear, concise status updates for leadership, cross-functional partners, or investors.

## Parameters

Invoke with parameters for different contexts:
- `/pm-stakeholder-update --audience board --period quarterly` → board-ready quarterly update
- `/pm-stakeholder-update --audience team` → team weekly update with defaults

| Parameter | Required | Description |
|-----------|----------|-------------|
| `audience` | no | Who the update is for: `board`, `leadership`, or `team` (default: `leadership`) |
| `period` | no | Time period covered: `weekly`, `monthly`, or `quarterly` (default: `weekly`) |

## Workflow

### Step 1: Determine Audience & Format

Ask (or infer from context):
- **Who is this for?** Leadership / Board / Cross-functional / Team
- **Format?** Email (default) / Slack message / Presentation bullets
- **Cadence?** Weekly / Bi-weekly / Monthly / Ad-hoc

### Step 2: Gather Data

Automatically pull from:
- `initiatives.json` — status, progress, blockers
- `metrics.json` — KPI movements
- `hq/decisions/` — key decisions made or pending
- Recent session history — notable events, wins, learnings

### Step 3: Draft Update

**For Leadership / Board:**
```
Subject: [Product] Weekly Update — [Date]

TL;DR: [One sentence summary — the headline]

📊 Metrics
• [KPI 1]: [value] ([trend] vs last week)
• [KPI 2]: [value] ([trend])

🚀 Progress
• [Initiative 1]: [what happened] → [what's next]
• [Initiative 2]: [what happened] → [what's next]

🚧 Blockers / Risks
• [Blocker]: [what we need / by when]

⚖️ Decisions Needed
• [Decision]: [options, recommendation, deadline]

📅 Next Week
• [Top 3 priorities]
```

**For Cross-functional Partners:**
Shorter, focused on dependencies and shared work.

**For Team:**
More detail, include learnings and retro insights.

### Step 4: Tone Calibration

- **Leadership**: Confident, data-first, highlight wins then risks
- **Board/Investors**: Metrics-heavy, trajectory focus, strategic framing
- **Cross-functional**: Action-oriented, clear asks, shared context
- **Team**: Transparent, celebratory, growth-focused

### Step 5: Review & Send

Present draft. Ask:
- "Adjust tone or add/remove anything?"
- "Want me to send this via email?" (if Gmail MCP available)
- "Save as template for next week?"

Save to `hq/updates/YYYY-MM-DD-stakeholder-update.md`
