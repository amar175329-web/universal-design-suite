# /loop

**Command**: 
**Category**: Design Engineering & Quality
**Description**: Gauntlet loop continuous visual verification and browser testing iteration.

## Purpose & Execution Guide
When invoked with :
1. Parse the target element, component, or screen.
2. Execute the domain-specific design inspection:
   - For : Validate token scales, rem units, spacing consistency, and hex color collisions.
   - For : Query component registries (21st.dev, MagicUI, Shadcn) for matching UI primitives.
   - For : Reconcile local design tokens against remote design systems and CSS custom properties.
   - For : Execute Playwright visual regression check, capture viewport screenshot, and verify alignment.
3. Output actionable refactor recommendations and updated code diffs.
