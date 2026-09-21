# Animation Orchestration & Motion Philosophy

## Motion Principles (Motion / Emil Kowalski Guidance)
1. **Purpose-Driven**: Animate state changes and spatial relationships; avoid purely decorative animations.
2. **Transform & Opacity Only**: High-performance 60/120fps animations utilizing hardware compositing.
3. **Respect Reduced Motion**: Always wrap transitions with .
4. **Spring Physics Over Bounce**: Use dampened springs () instead of excessive bouncy easing.

## Reusable Motion Variants
