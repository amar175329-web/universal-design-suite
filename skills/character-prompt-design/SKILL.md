---
name: character-prompt-design
description: Design AI character/agent prompts iteratively — clarify scope, draft full prompt, review and revise, ship, then capture lessons for next time. Use when creating, drafting, refining, or revising a character/agent persona (advisor, companion, assistant, brand voice), defining tone/scope/boundaries, or building a structured prompt with archetypes, expertise, behavior, and voice fields. Includes scope-discipline patterns (pattern-over-prescription, SME caveats, vocabulary guards) and notes on shipping characters to a Strapi-style CMS with structured prompt fields.
---

# Character Prompt Design

A method for building AI character / agent prompts that hold up under real use. Works for advisors, companions, brand voices, and any other long-form persona prompt that ships as a system message. The method has three parts: a discipline of asking before drafting, a structured field set to draft into, and an iterative loop that improves the character within a session and across sessions over time.

## When to use this skill

Trigger when the user wants to:

- Design or draft a new AI character / advisor / companion / agent persona
- Refine an existing character's tone, scope, or boundaries
- Create a brand voice or product persona that ships as a system prompt
- Define what a character should and shouldn't do (and how it handles edge cases)
- Ship a character to a CMS with structured prompt fields (e.g. Strapi)

Especially useful when:

- The character needs a clear scope discipline (what it handles vs. defers vs. refers out)
- The character operates in emotionally sensitive territory (health, money, relationships, learning)
- The character is one of several that need to feel distinct from each other
- Iteration matters more than getting it right the first time

---

## The core directive: ask before drafting

The single biggest predictor of a good character prompt is the questions asked before a single word is written. **Do not produce a draft until scope is clear.** A bad draft is worse than no draft — it anchors the conversation and the user spends time correcting noise instead of shaping signal.

When the user describes a character they want, respond by asking the relevant clarifying questions from the list below (only the ones that aren't already answered). Phrase them as numbered, optioned questions so the user can reply terse-fast ("1a, 2 yes, 3c").

### Clarifying questions (the canonical set)

1. **Audience** — primary user. Adults? Students? Specific demographics? Any secondary audiences?
2. **Lanes in scope** — list the specific situations / problem types this character handles. Tick what's in.
3. **Lanes out of scope** — what sits *next to* this character that is explicitly *not* its job? Often what others would assume is in. Hand off to whom?
4. **Engagement model** — does the character work with the user's own content/data directly (numbers, study material, screenshots), or stay meta? See `reference.md → Engagement-with-material policies`.
5. **Coaching energy** — where on the spectrum from slow-and-soft to direct-and-energetic should it sit? Anchor against existing characters in the same product if there are any.
6. **Archetypes** — which 1-3 Jungian archetypes lead the personality? (Sage, Caregiver, Hero, Magician, Lover, Everyman, Ruler.) See `reference.md → Archetype catalog`.
7. **Structure** — fully standalone (every field populated), or inheriting from an existing archetype/template?
8. **Publication safety** — is this an experiment, a private draft, or live? What's the rollout plan?
9. **Anything specific** — name, key/slug, voice, model, capabilities, references to influences.

Skip whichever are obvious. Ask only what you actually need.

If the user has given a brief that names existing characters as references ("Like <existing character> but for X"), pull those characters first and read their actual prompts before drafting. Anchor against ground truth, not your model of what those characters probably are.

---

## The iterative loop

Six phases. Run them in order. Phase 6 is what makes the skill compound across uses.

### Phase 1 — Clarify

Ask the relevant clarifying questions. Get answers. Restate anything you're inferring. If a tension surfaces ("you want X but also Y"), name it and ask the user to pick or to clarify why both.

When you have enough signal, name your assumptions explicitly:

> "Based on what you've said, I'll: position this character at warm-but-direct, lean Sage + Caregiver, scope out diagnosis but allow engagement with user-pasted material under an SME caveat. Anything off?"

Wait for the green light.

### Phase 2 — Draft to a working file

Draft the **full** character payload to a working file, not into the chat directly. The payload is too long to read fluently in a chat stream and the user will scan it once at the file level.

Path convention: `/tmp/<character-name>-draft.json` (or equivalent on Windows / Linux).

The full payload should include every field the destination system expects. For a Strapi-style character, see `templates/character-payload.json`. The minimum field set for any character prompt:

- `name` — display name
- `key` / `slug` — unique identifier (kebab- or camel-cased)
- `role` — short user-facing label ("Body & Energy", "Money & Mind")
- `short_intro` — one-line tagline
- `personality` — archetypes, essence, dials, backstory, core philosophy
- `expertise` — disciplines, scope & boundaries, frameworks, scientific influences
- `behavior` — definitions, approach, priority hierarchy, conversational flow (phases), constructive challenge, lexicon, micro-patterns, decision tree, style rules
- `text_response_style` — tone, modes, distinct style, grammar, vocabulary guards
- `text_emoji_usage` — emoji policy
- `text_mode_instructions` — segmentation, formatting, image handling
- `voice_response_style` — vocal identity, modes, speaking style
- `voice_tone_description` — personality, technical guidelines, length
- `voice_mode_instructions` — numbers, fact vs assumption, pronunciations
- `interaction_instructions` — proactive outreach triggers and focus
- `system_notes` — internal notes for future maintainers

See `reference.md → Field templates` for what each field should contain.

In the chat, post only:
- One paragraph of what's in the draft
- A structural-changes summary (3-7 bullets) — what tonal moves, what archetypes, what scope decisions
- The file path
- One direct question: "anything to revise before I ship?"

Never dump prompt content into the chat. The chat is for decisions; the file is for content.

### Phase 3 — Review and revise

The user reviews the file (or asks you to surface specific sections). They'll come back with revisions in plain English:

> "soften the bro language" / "drop Mary Claire Haver" / "engage with material when asked, just caveat it"

For each revision:

1. **Identify which fields are affected.** Tone changes often touch personality + behavior + text_response_style + voice_response_style. Scope changes touch expertise + behavior + interaction_instructions. Check all of them — a single change rarely lives in one field.

2. **Make the change consistently across all affected fields.** This is where most failures happen — updating one field and leaving a contradictory line in another. See `reference.md → Consistency checklist`.

3. **PUT the updated fields back** (or rewrite the file) and surface a concise diff: what changed, where, and why. Bullets, not paragraphs.

4. **Re-ask: anything else?** Don't assume you're done.

Loop until the user signs off.

### Phase 4 — Ship

Save / publish / commit the character to its destination.

Notes on publication safety, in order of preference:
- **True draft** if the destination supports it (and you've verified the flag actually works — in at least one Strapi v5 deployment, `?status=draft` did *not* prevent publishing)
- **Published + unlisted/hidden flag** if true-draft isn't reliable. This is the reliable safety net when true-draft can't be trusted.
- **Published + low priority** as a last resort to stay out of the main listing

Always set conservative defaults: `premium: false`, `default_advisor: false`, no avatar yet (so it can't accidentally appear). Tell the user what's safe and what they need to adjust manually before any rollout.

After shipping, confirm with a tight summary: id, documentId, key, name, role, where it landed, what's still manual.

### Phase 5 — Post-ship refine

The user will often come back with refinements after seeing the character live. Treat this exactly like Phase 3: identify affected fields, make consistent changes, surface a tight diff, re-ask.

Common post-ship refinement triggers:
- The character is more restrictive than it should be (refuses to engage where engagement is fine with a caveat)
- A field still contradicts a Phase 3 decision (you updated some fields, missed others — see `reference.md → Consistency checklist`)
- A vocabulary or framework needs hedging after closer review (controversy / weak evidence)
- The role label needs tuning (concise, accurate, on-brand)

### Phase 6 — Capture the lesson

This is what makes the skill compound. Before declaring the session done, append one entry to `lessons.md` (see file in this skill).

**Lesson entry format:**

```
## YYYY-MM-DD — <character name> — <one-line lesson title>

**Context:** what kind of character, what was tried, what came up.

**Lesson:** the durable insight worth carrying forward.

**How to apply:** when this kind of situation comes up again, do X.
```

What counts as a lesson:
- A scope decision that surprised you (e.g., "engagement with user material is fine if caveated — don't reflexively refuse")
- A controversial influence/framework you should flag next time
- A tone shift that worked better than expected
- A consistency miss that bit you (e.g., personality field still contradicted a Phase 3 change)
- A user preference that turns out to be durable (e.g., "always show payload before posting")

What does NOT count as a lesson:
- "User wanted X, so we did X." That's project state, not a generalizable insight.
- Anything specific to one character that won't apply to the next.

Aim for 1-3 lessons per character. If there's nothing genuinely transferable, skip it — bloated lessons files are worse than short ones.

At the start of every new character session, **read `lessons.md` first** before Phase 1. Apply prior lessons silently — don't quote them at the user, just let them shape the questions and the draft.

---

## Scope discipline (the highest-leverage pattern)

Most character prompts fail not because the tone is wrong but because the *scope* is wrong — the character oversteps into expertise it doesn't have, or refuses to engage where engagement is fine, or pretends to authority it can't verify.

The universal pattern is **pattern-over-prescription**:

> Your primary work is pattern recognition. You name recurring behaviors, surface blind spots, and reflect what you observe so the user can make their own informed choices.
>
> You discuss frameworks generally — at the level of "here's the principle, here's how it tends to work."
>
> You do not deliver personalized prescriptions: specific protocols, medical advice, financial advice, training plans, diagnoses, treatment recommendations, or anything that requires individualized professional expertise.
>
> When the question needs personalized expertise, you route to a real human expert by name and type. Make the referral specific (not "a doctor" — "a registered dietitian who works with female athletes"). The referral is part of doing your job well, not a failure of it.

This pattern fits any character touching expertise-adjacent territory. See `reference.md → Scope discipline patterns` for:
- Full template language you can adapt
- The SME caveat pattern (for characters engaging with subject content)
- The number/material engagement carve-out (for characters operating on user-provided content)
- The refer-out catalog (named expert types by domain)
- The diagnosis vs. observation distinction

### Vocabulary guards (build them into the prompt)

Bake explicit "vocabulary to avoid" lists into the `text_response_style` field. Without this, character prompts drift toward:

- **Bro / locker-room register** — "bro," "man," "my friend," "let's get it," "crush it"
- **Patronizing register (the inverse trap)** — "sweetheart," "honey," "hun," "babe," "queen," "you go girl"
- **Wellness woo** — "manifest abundance," "trust the universe," "goddess energy," "honor your body"
- **Coaching cliché** — "lock in," "level up," "unlock," "10x," "hack"
- **Therapy-speak (used as filler)** — "hold space for," "sit in your emotions," "how does that make you feel"
- **Hype / urgency** — "you've got this!" as bumper sticker, "believe in yourself" as filler

A character should know which of these to avoid AND which adjacent traps to also avoid. Most prompts only guard against one side, then drift into the other.

### Em-dash rule

Em-dashes (—) are the single most reliable LLM tell in produced text. If you want the character to sound human, ban them at the prompt level:

> Never output an em-dash (—). Use periods for hard stops, ellipsis for pauses, short sentences for emphasis.

Bake this into the `text_response_style` field. The prompt will read jarring (full of em-dashes telling Claude not to use em-dashes), but the output will sound less synthetic.

---

## Cross-session improvement

This skill compounds when used repeatedly. The mechanism:

1. **Before drafting**, read `lessons.md`. Apply silently.
2. **After shipping**, append 1-3 lessons. Specific format above.
3. **When `lessons.md` gets long** (50+ entries), reorganize into themes (Tone, Scope, Specific frameworks, etc.) rather than chronological. Move durable lessons to the top; archive stale ones at the bottom.

Optional: maintain a `cross-character-map.md` that lists existing characters and their cross-reference rules ("the career character routes meaning questions to the spirituality character, body/sleep to the health character"). New characters can plug into this map.

---

## Character prompt structure (the field map)

See `reference.md → Field templates` for full templates of each field. Quick map:

| Field | What it carries |
|---|---|
| `name`, `key`, `role`, `short_intro` | Identity layer |
| `personality` | Archetypes, essence, dials, backstory, philosophy |
| `expertise` | Disciplines, scope & boundaries, frameworks, influences |
| `behavior` | Definitions, posture, priority hierarchy, phase flow, lexicon, micro-patterns, decision tree, style rules |
| `text_response_style` | Em-dash block, modes, vocabulary guards |
| `text_emoji_usage` | Emoji policy & reaction format |
| `text_mode_instructions` | Segmentation, formatting, image handling |
| `voice_response_style` | Vocal identity, modes, rhythm |
| `voice_tone_description` | Personality, technical, length |
| `voice_mode_instructions` | Numbers, dates, pronunciations |
| `interaction_instructions` | Proactive triggers, focus |
| `system_notes` | Internal notes |

Behavior is usually the longest field (8-15k chars). Personality and expertise next. Voice fields shorter.

---

## Shipping to a CMS

If the destination is a Strapi-style CMS with structured prompt fields, `templates/character-payload.json` is a full payload skeleton with conservative defaults (`unlisted: true`, `premium: false`, `default_advisor: false`). Adapt the field names to your schema. The core method works on any character that ships as a long-form prompt.

---

## Quick reference

The whole skill compressed to one screen:

1. **Ask first.** Never draft cold.
2. **Read `lessons.md`** at the start of every new character session.
3. **Anchor against existing characters** if the user references them — pull their actual prompts.
4. **Draft to a file**, not into chat.
5. **Show structural summary + file path** in chat.
6. **Scope discipline** is the highest-leverage pattern. Pattern-over-prescription + SME caveats + refer-out specifics.
7. **Engagement model is a Phase-1 question.** Don't refuse engagement reflexively — caveat and engage if the user wants.
8. **Vocabulary guards in both directions** — avoid bro register AND patronizing register, avoid coaching cliché AND wellness woo.
9. **Em-dash block** is the single highest-leverage anti-LLM-tell move.
10. **Make changes consistently across all affected fields.** Most failures live in fields the user didn't think to check.
11. **Show safe defaults at ship**: `unlisted: true`, `premium: false`, `default_advisor: false`. Name what's still manual.
12. **Capture the lesson** before declaring done.
