---
name: persona-brief
description: Generate Reddit-native (and optionally X / TikTok / HN / YouTube) persona briefs for marketing — live-researched from social platforms and structured as a self-contained LLM playbook (subreddit map, persona psyche, language corpus with real quotes, pain points, product positioning, content angles, vocabulary guardrails, style guide, objections). Use when the user types /persona-brief, asks to "build a persona brief", "create a Reddit persona", "research an audience for marketing", or wants a Reddit-native marketing playbook for a specific subculture or audience. Also serves as a methodology reference when explaining how persona briefs are structured.
---

# Persona Brief

Researches a target audience live across Reddit (and optionally X, TikTok, Hacker News, YouTube) and generates a self-contained marketing playbook in a format first built for an MBA/EMBA audience brief — designed to be pasted into any LLM as a single context block for downstream content generation.

## When to use

- User types `/persona-brief` (with or without args like an audience and product)
- User asks to "build a persona brief", "research [audience] on Reddit", "create a Reddit playbook", "find what [audience] actually says"
- User wants a structured marketing reference for a specific subculture
- User asks how a persona brief is structured (methodology mode — point them at `methodology.md`)

## Inputs to collect first

Before researching, confirm:

1. **Audience** — who exactly? ("MBA students", "indie iOS devs", "first-time parents")
2. **Product** — what's being sold or messaged? One paragraph: what it does, key features, positioning. Mark this internal — it never appears verbatim in the brief.
3. **Platforms** — Reddit-only (default), or also X / TikTok / HN / YouTube / Polymarket
4. **Output path** — where the .md file should land (default: current working directory)
5. **Tone hints** — any voice constraints from the brand? (default: matches platform-native tone)

If the user just runs `/persona-brief` with no args, ask these. If they pass an audience name, confirm the rest.

## Workflow

### 1. Plan the research scope

- Identify 5–8 candidate subreddits across primary, secondary, and adjacent tiers. Use `WebSearch site:reddit.com [audience term]` if not obvious.
- Fetch metadata: `WebFetch https://www.reddit.com/r/[sub]/about.json` for subscriber count and culture.
- List 8–12 thematic search queries derived from likely pain points (e.g. "imposter syndrome", "ROI", "burning out", "lost touch").

### 2. Research live (Reddit primary)

For each subreddit + theme combo:

```
WebFetch https://www.reddit.com/r/[sub]/search.json?q=[theme]&restrict_sr=on&sort=top&limit=25&t=year
```

For high-signal threads, drill into the thread JSON:

```
WebFetch https://www.reddit.com/r/[sub]/comments/[id].json
```

Extract: real quotes, **specific thread URLs** (not subreddit roots), upvote counts, recurring phrases.

If Reddit blocks, fall back to `WebSearch site:reddit.com/r/[sub] "[phrase]"`. See `research-playbook.md` for query patterns and platform-specific tactics.

### 3. Synthesize the brief

Follow the structure in `methodology.md` exactly. Required sections:

1. Title + date + sources count
2. Purpose & how to use (operating principles, 80/20 empathy rule, internal product summary)
3. Subreddit map (3 tiers — primary, secondary, adjacent)
4. Audience psyche (6–8 numbered identity traits, then drives / fears / self-concept)
5. Language patterns (themed sections, each with 3–5 real quotes + key phrases)
6. Pain points (8–12 numbered, each with quotes + a `Pattern:` abstraction line)
7. Product → audience-language mapping (each major pain → reframe in their voice)
8. Content angles (vulnerability posts, comment templates, discussion starters — numbered)
9. Words to use / avoid / use carefully (three-column tables)
10. Tone & style guide (voice profile, sentence structure, humor, vulnerability arc, formatting, golden test)
11. Common objections + natural responses
12. Closing operating directive (paste-into-LLM instruction)

### 4. Apply the operating principles (non-negotiable)

- **Lead with the pressure, not the product.** 80% empathy/shared experience, 20% reluctant "here's what helped me."
- **Real quotes, real URLs.** Drill to specific threads, not subreddit homepages. If a quote is paraphrased or composed in voice, mark it clearly — never present synthesized quotes as cited.
- **Pattern lines after each pain point.** The abstraction is what makes the brief reusable for content generation.
- **Use/avoid vocab is a guardrail.** Anything that sounds like marketing, LinkedIn, or wellness apps goes in the avoid column.
- **Golden test.** Would a native of the audience text this to a peer? If it reads like a consultant's newsletter, rewrite.

### 5. Write the brief

- Default filename: `[Audience] Persona Brief - [YYYY-MM-DD].md`
- Default location: current working directory (or wherever the user asked)
- Use `template.md` as the structural skeleton, then fill from research
- Close with the paste-into-LLM directive (see methodology.md §12)

### 6. Report back

Tell the user:
- File path
- Source counts (subs searched, threads analyzed, quotes captured) — be honest, don't inflate
- Any platforms that blocked or returned thin results
- Suggested next step (draft a sample post, expand to another platform, etc.)

## Quality checklist before delivering

- [ ] At least 6 subreddits mapped across 3 tiers
- [ ] At least 8 pain points, each with 2+ real quotes and a Pattern: line
- [ ] Language section organized by theme, not by quote source
- [ ] Every quote URL points to a specific thread, not `/r/sub/`
- [ ] Use/avoid/conditional table has 15+ entries each
- [ ] Tone guide includes voice profile, golden test, and 3+ humor examples
- [ ] At least 12 content angle ideas: mix of posts + comment templates + discussion starters
- [ ] Closing line is a paste-into-LLM operating directive

## Methodology mode

If the user is asking *how* a persona brief is structured (not asking to generate one), point them at `methodology.md` and walk through the section-by-section logic without doing research.

## Files

- `methodology.md` — full structural breakdown of every brief section
- `research-playbook.md` — Reddit JSON tactics, X/TikTok/HN/YouTube fallbacks, query patterns
- `template.md` — blank skeleton matching the canonical structure
