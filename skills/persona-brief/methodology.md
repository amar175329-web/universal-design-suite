# Persona Brief Methodology

The persona brief format is a self-contained marketing playbook designed to be pasted into any LLM as a single context block. It encodes audience research as: distribution map → identity model → vocabulary corpus → pain inventory → translation layer → content assets → guardrails.

**The architecture: context → empathy → translation → assets → guardrails.**

## Section-by-section

### 1. Header (title, date, sources)

Required: audience name, generation date, source counts ("70+ Reddit searches, 80+ threads analyzed, real quotes with URLs"). Source counts establish provenance and signal rigor to anyone using the brief later. Be honest — if you ran 12 searches, say 12.

### 2. Purpose & how to use

A 4-bullet operating manual:

- **As LLM context** — the prompt to feed alongside the brief
- **As human reference** — pain points + content angles for direct riffing
- **For comment responses** — pain section → mapping section → tone section workflow
- **Key principle** — "Lead with the pressure, not the product." 80/20 empathy/product. Reluctant, not salesy.

Also include a one-paragraph internal product summary marked clearly as *for reference, not for the platform*. This keeps the writer grounded in what the product actually does without leaking marketing voice into the output.

### 3. Subreddit map (3 tiers)

A discoverability map for content distribution.

- **Tier 1 — Primary targets**: high audience density + emotional/strategic posts. Table: subreddit, subscribers, culture & topics, rules/norms, best content type.
- **Tier 2 — Secondary**: adjacent communities where the audience also lives. Same table, slightly slimmer.
- **Tier 3 — Adjacent/supportive**: communities where the audience appears but not as core identity. Table: subreddit, subscribers, *why it matters* (the bridge to the core audience).

The tier structure forces prioritization. Tier 1 is where vulnerability posts go; Tier 3 is for casting a wider net or for product-features-aligned communities (e.g. r/Journaling for a journaling product targeting MBAs).

### 4. Audience psyche

The identity model. Structured as:

- **6–8 numbered identity traits** — each a sentence header in bold, then a paragraph explaining it, then a quote that captures it. Traits are *characterizations*, not demographics. Example: "Hyper-competitive but terrified of appearing so."
- **What drives them** — bullet list of motivators
- **What they fear** — bullet list of fears (specific, not generic)
- **How they see themselves** — bullet list of self-concepts

The traits should map to pain points later — every trait creates a pain. If a trait doesn't generate a pain in the next section, drop it.

### 5. Language patterns & vocabulary

Themed corpus, organized by topic (not by source). Each theme has:

- 3–5 real quotes with URLs
- A "**Key phrases:**" line listing the exact terms the audience uses

Themes follow the audience's mental model — for MBAs: networking grind, decision overload, impostor syndrome, ROI pressure, relationship density, EMBA juggle, conversation prep, thinking quality.

Quotes should be selected for *language*, not just sentiment. Look for the precise terms the audience uses to describe their experience — these become the writer's vocabulary.

### 6. Pain points in their words

8–12 numbered pain points. Each contains:

- A descriptive header ("The Networking Maintenance Gap")
- 3–5 real quotes from across the platform
- A `**Pattern:**` line that abstracts the insight

The Pattern line is what makes the brief generative. It tells the LLM how to think about the pain, not just what the pain sounds like. Example: *"The relationship-maintenance failure is not effort — it's infrastructure."*

Order pain points from most surface (acute, day-to-day) to most existential (compounding, identity-level). The last pain point should always be the deepest fear.

### 7. Product → audience-language mapping

The translation layer. Each major pain → a reframe in the audience's voice.

Format: **"[pain in their words]"** → *italicized first-person reframe that introduces the product feature without selling it.*

The reframe should sound like a peer's casual recommendation, not marketing copy. It should:

- Use the audience's exact vocabulary
- Reference a concrete habit or moment (not the product's name first)
- Frame the product as infrastructure or tool, not transformation
- Mention the product organically, often in passing

This is the section where the brand voice meets the audience voice. If it sounds like marketing, redo it.

### 8. Content angles & post ideas

Three subsections, all numbered for downstream reference:

- **Vulnerability posts (thread starters)** — full post ideas with target subs, hook lines, and how the product angle naturally appears in comments
- **Comment templates** — drop-in responses to common thread types ("On networking anxiety threads...")
- **Discussion starters** — open questions that drive engagement without leading with product

Number every entry across all subsections. The brief is reused over months — numbered angles let users say "let's draft #3 today."

### 9. Words & phrases: use vs avoid

Three tables:

- **✅ Use** — phrase | why it works | where to use
- **❌ Avoid** — phrase | why it fails
- **🔀 Conditional** — phrase | when OK | when not

The avoid list is where marketing instincts go to die. Include obvious LinkedIn-isms ("unlock your potential"), wellness-speak ("self-care", "holistic"), corporate filler ("synergize", "leverage"), and category traps ("AI-powered", "ChatGPT wrapper").

The conditional list catches the sneaky ones — terms that work *if* the audience introduces them but fail when introduced fresh.

### 10. Tone & style guide

Six subsections:

- **Voice profile** — one sentence describing who's writing ("the sharpest person in the cohort talking to a classmate, not a professor")
- **Sentence structure** — punctuation patterns, sentence length, formatting choices (em dashes, parentheticals, specific numbers)
- **Formality level** — % thoughtful / casual, contractions, person, register
- **Humor type** — 3–4 named types with examples (dry observation, ironic, self-aware, understated)
- **Vulnerability style** — the arc (specific confession → shared pattern → concrete thing that worked → openness, not prescription)
- **Formatting for the platform** — paragraph length, line breaks, emoji rules, headers/bold
- **The golden test** — one sentence that catches anything that's drifted off-voice

The golden test is the single most important line in the section. For MBA: *"If it reads like something a consultant wrote for a newsletter, rewrite it until it reads like something a second-year MBA would text a first-year at 11pm during recruiting season."*

### 11. Common objections & how to address them

5–7 likely objections with natural responses. Format:

**"Objection in their voice"**

*Italicized response that addresses the concern without sounding defensive.*

Cover: comparison to obvious competitors ("isn't this just X?"), redundancy with existing tools, time/effort cost, value skepticism, category skepticism, and the audience-specific objection ("but I already have access to [audience-specific resource]").

### 12. Closing operating directive

The final line repeats the LLM operating instruction. Always something like:

*"This brief is the foundation for all [audience]-targeted content. Hand to any LLM with: 'Write [platform]-native content for the [audience] persona using only the language, quotes, and angles in this brief. Match the tone, vocabulary, and specificity described. Never sound like marketing. Lead with the pressure, not the product.'"*

This makes the brief portable. Anyone (or any agent) can pick it up and produce on-voice content.

## What separates a good brief from a great one

- **Quotes are specific, not generic.** "I'm losing the thread" beats "networking is hard."
- **Patterns are insights, not summaries.** "It's an infrastructure problem, not an effort problem" beats "people struggle to maintain relationships."
- **Mapping sounds like a peer.** If the reframe could appear in a Substack ad, it's wrong.
- **Avoid list is specific to the category.** Generic avoid lists ("don't be salesy") teach nothing.
- **Tone guide passes the golden test on its own examples.** If your tone-guide example fails the test you wrote, rewrite both.

## What a bad brief looks like

- Subreddit roots used as quote URLs ("we cited 80 threads" but every link is `/r/MBA/`)
- Pain points without Pattern lines (just quotes, no abstraction)
- Mapping section that names the product first
- Use/avoid lists that are obvious ("don't say 'amazing'")
- Tone section without a golden test
- No closing operating directive
- Synthesized quotes presented as cited (the fastest credibility kill)
