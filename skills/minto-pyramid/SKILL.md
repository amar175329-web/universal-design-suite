---
name: minto-pyramid
description: Barbara Minto's Pyramid Principle for business writing — answer first, exactly three reasons, evidence underneath. Use when reviewing, tightening, restructuring, or sanity-checking any written deliverable (email, stakeholder update, memo, proposal, PRD, exec summary, deck narrative, Slack post), when the user asks "is this clear", "what's the point of this", "tighten this", "make this shorter", "does this land", or says minto / pyramid / buried lede / so what / answer first. Also use to OFFER a restructure after drafting a business-comms deliverable — offer, never auto-apply.
---

# The Pyramid Principle

Barbara Minto built this at McKinsey to fix one failure mode: writing that warms up, gives context, and lands the conclusion at the bottom where nobody reads it.

The shape is always the same:

```
        THE ANSWER
    (one sentence, top)
     /      |      \
Reason 1  Reason 2  Reason 3
   |         |         |
evidence  evidence  evidence
```

Three rules govern it:

1. **The answer goes first.** Not the context, not the journey, not the caveats. If the reader stops after line one, they still got the decision.
2. **Exactly three reasons.** Two is thin, four means one of them is a detail wearing a reason's coat. Three is the constraint that forces the thinking.
3. **The reasons are MECE** — mutually exclusive, collectively exhaustive. No overlap between them; together they fully carry the case.

Everything below the top line exists to answer the question the line above it raises. Anything that answers no question gets cut.

---

## When this skill fires

### 1. Review requests — run it

The user hands over a draft and asks anything evaluative: "have a look at this", "is this clear", "tighten this", "too long?", "does this land", "what am I missing".

**Run Mode 2 (buried lede test) first, then offer Mode 1.** Never restructure before diagnosing — you need to know what the draft was secretly arguing before you rebuild it.

### 2. Drafting from scratch — OFFER, do not apply

When you write a business-comms deliverable unprompted (stakeholder update, email, memo, proposal, exec summary, decision doc), **write it the way you normally would**. Then end with a single line:

> Want this Minto'd? (answer first, three reasons, evidence under each)

One line. Not a paragraph, not a pitch, not a pre-emptive second version. If they say yes, run Mode 1.

Do not offer on: chat replies, code, commit messages, notes-to-self, creative writing, or anything under ~100 words.

### 3. Explicit invocation

`/minto-pyramid`, or the user names a mode ("run the so-what pass on this"). Run what they asked for.

### Do NOT fire on

- Personal-voice writing — cover letters, LinkedIn posts, site copy, anything in the author's own voice. Minto structure makes personal writing read like a consulting deck.
- Narrative or persuasive pieces where the build IS the point.
- Anything the user has already said is finished.

---

## The five modes

### Mode 1 — The restructure

Rewrite using the pyramid: open with the single main conclusion in one sentence, then exactly three supporting reasons, then the evidence under each. Cut anything that does not sit under one of the three.

Show what you cut, in a short list at the end. The cuts are half the value — the user needs to see what the draft was carrying that it didn't need.

### Mode 2 — The buried lede test

Read the draft and answer three things:

1. **The one conclusion it is actually building toward** — in one sentence.
2. **The boss sentence** — if they had one sentence to give their boss, what is it?
3. **Where they hid it** — quote the line, name the paragraph. Usually it's the second-to-last paragraph, or split across two sentences that never meet.

Diagnostic only. Do not rewrite unless asked.

### Mode 3 — The three-reason audit

Check the three reasons against MECE:

- **Overlap** — do any two say the same thing in different words? Name the pair.
- **Coverage** — together, do they fully carry the conclusion, or is there a hole a reader will fall into?
- **Rank demotion** — flag any that is a *detail pretending to be a reason*. Test: can it be stated without reference to the conclusion? If it's really evidence, it belongs one level down.

If there are more than three, say which two collapse into one. If fewer, say what's missing.

### Mode 4 — The so-what pass

Go line by line. After each, ask "so what?" Delete every line that cannot answer it. Show what survives.

Present it as the surviving draft, with the death toll: "Cut 14 of 31 lines."

### Mode 5 — The email version

Compress to under 150 words in the same structure: answer, three reasons, evidence only where it earns its place. **Keep their voice** — this is compression, not a rewrite into consulting register.

---

## Sequencing

**Run 2 before 1** on anything already written. Diagnose the buried conclusion before restructuring around it, or you'll build the pyramid on whatever happened to be in the opening paragraph.

A full pass on a long draft: **2 → 3 → 1 → 4 → 5**. Diagnose, check the logic holds, rebuild, strip, compress.

---

## Failure modes to avoid

- **Manufacturing a third reason.** If the case genuinely has two, say so and ask whether the third is missing thinking or a missing fact. Don't pad.
- **Losing the voice.** Minto governs structure, not register. The restructured draft should still sound like the person who wrote it.
- **Cutting the ask.** Business writing usually ends in a request. It survives every pass — often it belongs in line one, next to the answer.
- **Treating context as the answer.** "We ran an experiment on onboarding" is context. "We should ship the new onboarding" is the answer. If the top line doesn't commit to something, it isn't the top line.
- **Applying it silently.** Outside an explicit review request, offer first. The user asked for a draft, not a restructure.
