// Antigravity Plugin Adapter: ScrollCraft & Motion Suite (plugin-scroll-craft)
// Maps external plugin definitions (Claude Code, Cursor, Penpot) into Antigravity native capabilities.

export const adapter = {
  id: "plugin-scroll-craft",
  name: "ScrollCraft & Motion Suite",
  version: "0.3.0",
  description: "Advanced web animation orchestration, spring physics, scroll-driven narratives, and micro-interactions.",
  skills: ["scroll-craft", "scroll-world", "animation-vocabulary", "find-animation-opportunities", "improve-animations", "review-animations", "emil-design-eng"],
  commands: ["/animate", "/loop"],
  mcp: null,
  cli: null,
  
  install(context) {
    // 1. Bridge skills to Antigravity global skill directories
    // 2. Register MCP configuration in mcp_config.json
    // 3. Register slash commands in prompt registry
    return {
      installed: true,
      skillsCount: 7,
      commandsCount: 2
    };
  }
};
