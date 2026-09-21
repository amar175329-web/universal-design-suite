---
name: pm-competitive
description: Competitive analysis framework. Research competitors, map feature gaps, identify differentiation, and track competitive moves. Use when user says "/pm-competitive", "competitive analysis", "who are our competitors", "how do we compare to X", or needs market positioning insights.
---

# /pm-competitive — Competitive Analysis

Structured competitive intelligence gathering and analysis.

## Parameters

Invoke with parameters for different contexts:
- `/pm-competitive Notion` → full competitive profile of Notion
- `/pm-competitive "Linear" --focus pricing` → focused pricing comparison

| Parameter | Required | Description |
|-----------|----------|-------------|
| `competitor_name` | yes | Name of the competitor to analyze |
| `focus_area` | no | Focus on a specific dimension: `pricing`, `features`, or `positioning` |

## Workflow

### Step 1: Define the Landscape

Ask:
- "Who are your main competitors?" (or "What space are you in?" to discover them)
- "What dimensions matter most?" (price, features, UX, speed, integrations, etc.)

### Step 2: Research

For each competitor, gather:
1. **WebSearch** for recent news, funding, launches
2. **WebFetch** their landing page — extract positioning, pricing, features
3. Check Product Hunt, G2, Capterra for reviews and ratings
4. Check social media for sentiment and community size

Build a profile:
```
## [Competitor Name]
- **Positioning**: How they describe themselves
- **Pricing**: Plans and price points
- **Key Features**: Top 5-10 features
- **Strengths**: What they do well
- **Weaknesses**: Where they fall short
- **Recent Moves**: Last 3 months of notable activity
- **Community**: Size, engagement, sentiment
```

### Step 3: Comparison Matrix

| Dimension | You | Competitor A | Competitor B |
|-----------|-----|-------------|-------------|
| Price | $X | $Y | $Z |
| Feature 1 | ✅ | ✅ | ❌ |
| Feature 2 | ❌ | ✅ | ✅ |
| UX Quality | 8/10 | 6/10 | 7/10 |

### Step 4: Strategic Insights

- **Your Moat**: What's hard to copy?
- **Feature Gaps**: What do they have that you don't?
- **Opportunity Gaps**: What does nobody do well?
- **Positioning**: Where should you position given the landscape?
- **Risk**: What competitive move would hurt you most?

### Step 5: Save & Track

Save to `hq/competitive/YYYY-MM-DD-landscape.md`

Offer to set up competitive monitoring:
```
schedule_task(
  prompt="Check [competitor] website and social for new launches or pricing changes",
  schedule_type="cron",
  schedule_value="0 9 * * 1"  // Weekly Monday 9am
)
```

## Quick Mode

```
/pm-competitive How do we compare to [Competitor X]?
```

Focused 1:1 comparison instead of full landscape.
