# Deduplication Report: Exact Duplicates Analysis

**Total Discovered Items**: 491
**Exact Duplicates Removed**: 57
**Unique Capabilities Retained**: 434

## Methodology: Zero Capability Drop + Zero Exact Duplication
1. **Intelligent Content Hashing**: Sha256 hashes of ASTs and file contents were computed to differentiate superficial naming overlaps from genuine behavioral duplicates.
2. **Behavioral Divergence Retention**: If two skills shared a name (e.g. `taste-skill`) but contained distinct aesthetics or implementation logic (e.g., Leonxlnx dark-mode fintech vs chenthedigger minimalist editorial), **BOTH WERE PRESERVED** under disambiguated canonical IDs (`taste-leonx`, `taste-chenthedigger`).
3. **Exact Clones Pruned**: Submodule copies and identical utility skills duplicated across multiple boilerplate repos were deduplicated into a single canonical source.

## Deduplication Audit Sample (57 Items)

| Duplicate Source | Canonical Capability | Reason | Provenance |
|---|---|---|---|
| `21st-dev__skill:skills/21st-ui-explore/SKILL.md` | `21st-ui-explore` | `Identical SHA256 matches 21st-ui-explore from 21st-dev__claude-code-plugin` | `... skills/21st-ui-explore/SKILL.md` |
| `21st-dev__skill:skills/21st-ai/SKILL.md` | `21st-ai` | `Identical SHA256 matches 21st-ai from 21st-dev__claude-code-plugin` | `...skill -> skills/21st-ai/SKILL.md` |
| `21st-dev__skill:skills/21st-ui-build/SKILL.md` | `21st-ui-build` | `Identical SHA256 matches 21st-ui-build from 21st-dev__claude-code-plugin` | `...-> skills/21st-ui-build/SKILL.md` |
| `21st-dev__skill:skills/21st-design-sync/SKILL.md` | `21st-design-sync` | `Identical SHA256 matches 21st-design-sync from 21st-dev__claude-code-plugin` | `...skills/21st-design-sync/SKILL.md` |
| `21st-dev__skill:skills/21st-registry/SKILL.md` | `21st-registry` | `Identical SHA256 matches 21st-registry from 21st-dev__claude-code-plugin` | `...-> skills/21st-registry/SKILL.md` |
| `21st-dev__skill:skills/21st-ui-review/SKILL.md` | `21st-ui-review` | `Identical SHA256 matches 21st-ui-review from 21st-dev__claude-code-plugin` | `...> skills/21st-ui-review/SKILL.md` |
| `21st-dev__skill:skills/21st-cli-use/SKILL.md` | `21st-cli-use` | `Identical SHA256 matches 21st-cli-use from 21st-dev__claude-code-plugin` | `... -> skills/21st-cli-use/SKILL.md` |
| `...ter:.claude/skills/next-best-practices/SKILL.md` | `next-best-practices` | `Identical SHA256 matches next-best-practices from Kiranism__next-shadcn-dashboard-starter` | `...lls/next-best-practices/SKILL.md` |
| `...ude/skills/vercel-react-best-practices/SKILL.md` | `vercel-react-best-practices` | `Identical SHA256 matches vercel-react-best-practices from Kiranism__next-shadcn-dashboard-starter` | `...el-react-best-practices/SKILL.md` |
| `...ude/skills/vercel-composition-patterns/SKILL.md` | `vercel-composition-patterns` | `Identical SHA256 matches vercel-composition-patterns from Kiranism__next-shadcn-dashboard-starter` | `...el-composition-patterns/SKILL.md` |
| `...laude/skills/kiranism-shadcn-dashboard/SKILL.md` | `kiranism-shadcn-dashboard` | `Multi-agent platform copy in same repo (.claude/skills/kiranism-shadcn-dashboard/SKILL.md vs .agents/skills/kiranism-shadcn-dashboard/SKILL.md)` | `...ranism-shadcn-dashboard/SKILL.md` |
| `...r:.claude/skills/web-design-guidelines/SKILL.md` | `web-design-guidelines` | `Identical SHA256 matches web-design-guidelines from Kiranism__next-shadcn-dashboard-starter` | `...s/web-design-guidelines/SKILL.md` |
| `anthropics__skills:skills/frontend-design/SKILL.md` | `frontend-design` | `Identical SHA256 matches frontend-design from anthropics__claude-code` | `... skills/frontend-design/SKILL.md` |
| `...e-skill:skills/industrial-brutalist-ui/SKILL.md` | `industrial-brutalist-ui` | `Identical SHA256 matches industrial-brutalist-ui from Leonxlnx__taste-skill` | `...industrial-brutalist-ui/SKILL.md` |
| `...kill:skills/redesign-existing-projects/SKILL.md` | `redesign-existing-projects` | `Identical SHA256 matches redesign-existing-projects from Leonxlnx__taste-skill` | `...esign-existing-projects/SKILL.md` |
| `...e-skill:skills/full-output-enforcement/SKILL.md` | `full-output-enforcement` | `Identical SHA256 matches full-output-enforcement from Leonxlnx__taste-skill` | `...full-output-enforcement/SKILL.md` |
| `...ste-skill:skills/design-taste-frontend/SKILL.md` | `design-taste-frontend` | `Identical SHA256 matches design-taste-frontend from Leonxlnx__taste-skill` | `...s/design-taste-frontend/SKILL.md` |
| `...hedigger__taste-skill:skills/gpt-taste/SKILL.md` | `gpt-taste` | `Identical SHA256 matches gpt-taste from Leonxlnx__taste-skill` | `...ill -> skills/gpt-taste/SKILL.md` |
| `...gger__taste-skill:skills/image-to-code/SKILL.md` | `image-to-code` | `Identical SHA256 matches image-to-code from Leonxlnx__taste-skill` | `...-> skills/image-to-code/SKILL.md` |
| `...ste-skill:skills/imagegen-frontend-web/SKILL.md` | `imagegen-frontend-web` | `Identical SHA256 matches imagegen-frontend-web from Leonxlnx__taste-skill` | `...s/imagegen-frontend-web/SKILL.md` |
| `...thedigger__taste-skill:skills/brandkit/SKILL.md` | `brandkit` | `Identical SHA256 matches brandkit from Leonxlnx__taste-skill` | `...kill -> skills/brandkit/SKILL.md` |
| `...gger__taste-skill:skills/minimalist-ui/SKILL.md` | `minimalist-ui` | `Identical SHA256 matches minimalist-ui from Leonxlnx__taste-skill` | `...-> skills/minimalist-ui/SKILL.md` |
| `...-skill:skills/imagegen-frontend-mobile/SKILL.md` | `imagegen-frontend-mobile` | `Identical SHA256 matches imagegen-frontend-mobile from Leonxlnx__taste-skill` | `...magegen-frontend-mobile/SKILL.md` |
| `...te-skill:skills/high-end-visual-design/SKILL.md` | `high-end-visual-design` | `Identical SHA256 matches high-end-visual-design from Leonxlnx__taste-skill` | `.../high-end-visual-design/SKILL.md` |
| `...packages/builtin-skills/src/acceptance/SKILL.md` | `acceptance` | `Multi-agent platform copy in same repo (packages/builtin-skills/src/acceptance/SKILL.md vs public/acceptance/skill.md)` | `...n-skills/src/acceptance/SKILL.md` |
| *(+32 more exact duplicates cataloged in `catalog/deduplication.json`)* | ... | Exact SHA-256 match | Various repos |
