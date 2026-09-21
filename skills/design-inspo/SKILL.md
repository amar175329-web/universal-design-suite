---
name: design-inspo
description: Find micro-interaction and animation inspiration from design sites (Mobbin, Godly, Detail.design, Toolfolio, Minimal Gallery, Lapa, 60fps) to level up a product's UX. Use when the user wants to improve design, level up the experience, find animations, find micro-interactions, find better or alternative components, or get design inspiration for a specific product area.
---

# Design Inspo

Find cohesive micro-interaction and animation inspiration that levels up an entire product experience — not disconnected one-offs.

## Workflow

### Step 1: Understand the product

Before searching for inspiration, deeply understand the product you're improving.

1. **Ask which product** if not specified (e.g. a mobile app, a website, a specific product area)
2. **Read the codebase** — navigate screens, components, and flows to understand:
   - Core user journeys (onboarding, main loop, key actions)
   - Current interaction patterns and animations already in use
   - Design system tokens, motion values, easing curves
   - Tech stack constraints (React Native + Reanimated? CSS transitions? Framer Motion?)
3. **Map the product areas** — build a mental model of sections:
   - Navigation & transitions between screens
   - Loading & skeleton states
   - Input interactions (forms, toggles, sliders)
   - Feedback (success, error, progress)
   - Content reveal & scroll behaviors
   - Onboarding & empty states
   - Micro-feedback (button presses, haptics cues, hover states)
4. **Identify the current motion language** — what easing, duration, and style conventions already exist? New suggestions must harmonize with these.

### Step 2: Ask what area to focus on

Ask the user which area or category they want to level up. Examples:
- "Onboarding flow"
- "Tab navigation transitions"
- "Loading and skeleton states"
- "Button and input feedback"
- "Scroll-based reveals"
- "The whole thing" (then prioritize by highest-impact areas)

If they say "the whole thing", audit the product and rank areas by:
1. How often users encounter it (frequency)
2. How bland/static it currently is (improvement potential)
3. How much it affects perceived quality (impact)

### Step 3: Search inspiration sites

Search these sites for relevant micro-interactions. Use WebSearch and WebFetch to find real examples.

**Primary sites** (search all of these):
| Site | What it's best for | Search approach |
|---|---|---|
| **Mobbin** (mobbin.com) | Real app UI patterns, categorized by flow | Search by flow type: `site:mobbin.com [category] animation` |
| **Godly** (godly.website) | Premium web interactions, scroll effects | `site:godly.website [category]` |
| **Detail.design** (detail.design) | Curated micro-interactions, motion design | `site:detail.design [category] micro interaction` |
| **Toolfolio** (toolfolio.io) | Tool and SaaS product design patterns | `site:toolfolio.io [category]` |
| **Minimal Gallery** (minimal.gallery) | Clean, minimal interaction patterns | `site:minimal.gallery [category]` |
| **Lapa** (lapa.ninja) | Landing page interactions and transitions | `site:lapa.ninja [category]` |
| **60fps** (60fps.design) | Animation and motion design references | `site:60fps.design [category] animation` |

**Also search broadly:**
- `best [category] micro interaction 2025 2026`
- `[category] animation UX inspiration`
- `[tech stack] [category] animation example` (e.g. "react native tab transition animation")

### Step 4: Curate — holistic coherence check

This is the critical step. Don't just dump links. Filter and curate:

1. **Group findings by motion principle**, not just by where you found them:
   - Shared easing curves (do they all feel like the same "hand"?)
   - Consistent timing (are durations in a similar range — e.g. 200-400ms for feedback, 400-700ms for transitions?)
   - Common motion metaphors (spring physics? fade+slide? scale+opacity?)

2. **Reject anything that clashes** with the product's existing motion language or design system. A slick 3D flip animation doesn't belong in a warm, minimal app.

3. **Check that suggestions work as a system:**
   - If you suggest a springy button press, that spring physics should echo in toggles, modals, and navigation
   - If you suggest a fade-slide-up for content reveal, that same pattern should apply to toasts, cards, and list items
   - Consistency > individual "wow" moments

4. **Prioritize by effort-to-impact ratio** — a subtle 200ms ease-out on button press is high impact, low effort. A custom shader transition is high effort.

### Step 5: Present findings

For each recommendation, provide:

```
### [Area]: [What to improve]

**Inspiration**: [Link to example] — [1-line description of what they do]
**More refs**: [Additional links]

**What makes it work**: [Why this interaction feels good — timing, easing, feedback loop]

**How to implement**:
- Tech approach (e.g. "Reanimated spring with damping 15, stiffness 150")
- Key values (duration, easing, transform properties)
- Pseudocode or real code snippet if appropriate
- Which existing components would need changes

**Coherence note**: [How this fits with other recommendations — shared easing, timing, motion metaphor]
```

### Output format

Structure the full response as:

```
## Product audit summary
[2-3 sentences on current state of motion/interaction in the product]

## Motion language recommendation
[The unifying motion principles all suggestions share — e.g. "Spring-based, 300-500ms, ease-out-cubic, warmth over precision"]

## Recommendations

### 1. [Highest impact area]
[Use the template above]

### 2. [Next area]
...

## Implementation priority
[Ordered list: what to do first for maximum perceived quality lift with minimum effort]
```

## Important rules

- **Never suggest animations that hurt performance.** 60fps or don't bother. Flag anything that risks jank (large layout shifts, non-compositable properties, JS-driven animations on the main thread).
- **Never suggest disconnected "cool" interactions.** Everything must feel like it belongs to the same product, same designer, same hand.
- **Always tie back to the real codebase.** Reference actual component files, actual screen names, actual design tokens. Don't be abstract.
- **Respect the existing design language.** Suggestions should amplify what's already there, not replace it with something foreign.
- **Show real links.** Don't fabricate URLs. If a search doesn't return good results for a site, say so and move on.
- **Be opinionated.** Don't present 20 options. Present 3-5 strong, cohesive recommendations that work together as a system.
