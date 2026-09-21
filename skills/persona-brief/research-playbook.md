# Research Playbook

How to gather live audience material from Reddit and adjacent platforms. Reddit is the primary source — the others are for triangulation.

## Shortcut: the `last30days` skill

A sibling skill (`last30days`) already pulls posts and engagement from Reddit, X, YouTube, TikTok, Hacker News, Polymarket, GitHub, and the web for any topic in the last 30 days. For broad audience exploration where you don't know the subreddit map yet, run `last30days` first to get a multi-platform pulse, then drill into Reddit specifically using the tactics below.

Use `last30days` when: you need to discover which platforms the audience actually lives on, or you want recent (vs. all-time) sentiment.

Use the tactics below when: you have a defined audience and need deep, citable Reddit material with specific thread URLs.

## Reddit (primary)

### Find candidate subreddits

```
WebSearch site:reddit.com [audience term]
WebSearch [audience term] subreddit
```

Pull out 8–12 candidates. Confirm each is active (last post < 7 days) and has the audience density you need.

### Get subreddit metadata

```
WebFetch https://www.reddit.com/r/[sub]/about.json
```

Returns: subscriber count, public description, rules summary, active user count.

### Search within a subreddit

```
WebFetch https://www.reddit.com/r/[sub]/search.json?q=[query]&restrict_sr=on&sort=top&limit=25&t=year
```

- `sort=top` for highest-signal posts; `sort=new` for current sentiment
- `t=year` (or `month`, `week`) to scope time
- `limit=25` is generous; default 10 is often enough

### Pull a specific thread

```
WebFetch https://www.reddit.com/r/[sub]/comments/[id].json
```

Returns: post body + all comments with scores. Look for high-upvote comments that match the audience voice — these are your quote candidates.

### Capture the URL

For every quote, the URL must point to the **specific thread or comment permalink**, not the subreddit. Comment permalinks look like:

```
https://www.reddit.com/r/[sub]/comments/[id]/[slug]/[comment_id]/
```

If your URL ends at `/r/[sub]/`, you've cut a corner — go back and find the actual source.

### Query patterns

For pain-point research, search for **emotional language**, not topic words:

| Pain area | Search queries |
|---|---|
| Anxiety / overwhelm | "is it normal to feel", "anyone else", "burning out", "can't keep up" |
| Decision paralysis | "analysis paralysis", "second-guessing", "too many options", "can't decide between" |
| Identity / impostor | "feel like a fraud", "imposter syndrome", "not as smart as", "don't belong" |
| ROI / worth-it | "was it worth it", "regret", "would you do it again", "ROI" |
| Relationships | "lost touch", "follow up", "stay in contact", "drifted apart" |
| Time / capacity | "burning out", "no time for", "running on empty", "can't fit" |

### Anti-patterns to avoid

- **Generic search** ("MBA tips") returns junk; **emotional search** ("MBA burnout") returns gold.
- **One-shot search** misses the breadth — run 8–12 query variants per pain area.
- **Top-of-all-time** is often legacy content; prefer top-of-year for current voice.
- **Don't paraphrase quotes silently.** If you compose a quote in voice, mark it as paraphrased or cut it. Synthesized quotes presented as cited are the fastest way to destroy a brief's credibility.

### When Reddit blocks

Reddit's JSON endpoints sometimes return 429 or empty for high-volume access. Fallbacks:

1. Use `WebSearch site:reddit.com/r/[sub] "[phrase]"` then `WebFetch` the resulting HTML thread URLs
2. Use `WebSearch site:old.reddit.com/r/[sub]` — the old interface is sometimes more accessible
3. Switch to the Reddit search UI URL (HTML, not .json): `https://www.reddit.com/r/[sub]/search/?q=...&restrict_sr=1&sort=top&t=year`

## Hacker News

For tech / startup / engineering audiences. Use Algolia's HN search API:

```
WebFetch https://hn.algolia.com/api/v1/search?query=[term]&tags=story&hitsPerPage=30
WebFetch https://hn.algolia.com/api/v1/search?query=[term]&tags=comment&hitsPerPage=30
```

HN comments are unusually well-written — quote them sparingly but cite specifically. The permalink format is `https://news.ycombinator.com/item?id=[id]`.

## X / Twitter

Direct API access is gated. Use `WebSearch` to find embedded tweets:

```
WebSearch [audience term] twitter "[phrase]"
WebSearch site:twitter.com [audience term]
WebSearch site:x.com [audience term]
```

For audience research, X's value is in *tone* (snarky, terse, performative) — quote sparingly and only when the language pattern adds something Reddit doesn't.

## TikTok

Comments are the gold, not videos. Use `WebSearch`:

```
WebSearch tiktok comments [audience term]
WebSearch site:tiktok.com [audience term]
```

For pain points, search for video reactions to the topic — the comment sections capture the audience's unfiltered voice. Direct fetch is brittle; transcribe tone observations rather than verbatim quotes when scraping fails.

## YouTube

Look at comment sections on videos that target the audience:

```
WebSearch youtube [audience term] comments
WebSearch site:youtube.com [audience term]
```

Useful for: long-form rants, niche complaints, recurring patterns across creators in the audience's space.

## Polymarket / niche platforms

For finance, politics, or prediction-market-adjacent audiences, Polymarket comments capture a specific voice. `WebFetch` market pages and pull the discussion section.

## Triangulation rules

A good brief uses Reddit as the spine, then triangulates:

- A pain point that appears on Reddit + HN + X is **structural** — confident inclusion
- A pain point that appears only on one platform may be **platform-specific** (don't generalize)
- A vocabulary term used on Reddit but not elsewhere is Reddit-native — flag it in the use/avoid table
- A vocabulary term used everywhere is universal — safe to use across platforms

## Source-counting honesty

When the brief header says "70+ searches, 80+ threads analyzed", make it true. Track:

- Subreddits searched
- Queries run
- Threads opened
- Quotes captured

Report these honestly in the brief header. If you ran 12 searches and pulled 18 quotes, say so — don't inflate. The brief is more credible at honest 12/18 than fake 70/80.
