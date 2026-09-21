# Anti-AI

Rewrite AI-generated text so it passes as human to readers and to statistical detectors (Pangram etc.) — detector mode with 'discourse fracture' and an interleave protocol, reader mode for formal register.

- **Author:** unknown — this skill arrived as `anti-ai-skill.zip` via a Dropbox share link, July 2026, with no author, license or source inside. It looks like it was built with Anthropic's `skill-creator` (it carries an `evals/` folder in that format). **If you wrote it, please open an issue so it can be credited properly or removed.**
- **License:** none stated
- **Status:** ❓ Unattributed — included because it is genuinely useful; will be removed or re-credited on the author's request.

## Files

- `SKILL.md`, `references/tells.md` (audit checklist), `references/wordbank.md`, `evals/evals.json`

## Install

```bash
cp -r skills/anti-ai ~/.claude/skills/
```

## Notes

Explicit-invocation only (`/anti-ai`); it deliberately does not trigger on "humanize this". Detector mode produces a rough, fractured voice by design — use reader mode for cover letters, client docs or anything formal. Pair with `humanizer` for a lighter touch.

---

*Included in this collection without a known author. Credit will be added as soon as the origin is confirmed.*
