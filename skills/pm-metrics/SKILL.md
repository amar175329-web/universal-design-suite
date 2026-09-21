---
name: pm-metrics
description: Define and track product metrics — North Star metric, input/output metrics, KPIs with targets. Creates metrics.json for the Command Center. Use when user says "/pm-metrics", "define metrics", "what should we track", "set KPIs", or needs to establish a measurement framework.
---

# /pm-metrics — Metrics Framework

Define your North Star, input metrics, and KPI targets.

## Workflow

### Step 1: North Star Discovery

Ask:
1. "What's the one metric that best captures the value your product delivers to users?"
2. "How often should it move?" (daily/weekly/monthly)

Guide toward a metric that is:
- **Leading** (predicts future success, not lagging)
- **User-centric** (measures value delivered, not vanity)
- **Actionable** (your team can influence it)

Examples by product type:
- SaaS: Weekly Active Users, Tasks Completed, Time Saved
- Marketplace: Transactions/week, GMV
- Content: Engaged Reading Time, Subscriber Growth Rate
- Developer Tools: API Calls/day, Projects Created

### Step 2: Input/Output Metrics Tree

Build a metrics tree:
```
North Star: Weekly Active Users
├── Input: New signups/week (acquisition)
├── Input: Activation rate (% complete onboarding)
├── Input: D7 retention (stickiness)
├── Output: Revenue/user (monetization)
└── Guardrail: Support tickets/user (quality)
```

For each metric:
- Current value (or best estimate)
- Target (30/60/90 day)
- Data source (how we measure it)
- Owner (who's responsible)

### Step 3: Generate metrics.json

```json
{
  "north_star": {
    "name": "Weekly Active Users",
    "current": 1240,
    "target": 2000,
    "target_date": "2026-06-30",
    "frequency": "weekly"
  },
  "kpis": [
    {
      "name": "DAU",
      "current": 1240,
      "target": 2000,
      "trend": "up",
      "category": "engagement",
      "source": "analytics"
    }
  ],
  "input_metrics": [...],
  "guardrails": [...],
  "last_updated": "2026-04-11"
}
```

### Step 4: Wire to Daily Brief

The brief engine reads `metrics.json` automatically:
- Section 2 (KPI Pulse) shows current vs target
- Flags metrics that haven't moved in 7 days
- Celebrates metrics that hit targets

### Step 5: Tracking Cadence

Suggest a tracking schedule:
- Daily: Check North Star + inputs
- Weekly: Full metrics review in retro
- Monthly: Adjust targets based on trends

Offer to schedule automated metric collection if data sources have APIs.

## Update Mode

```
/pm-metrics update DAU 1350
```

Quick update a single metric value. Timestamps automatically.
