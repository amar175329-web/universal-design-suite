// Antigravity Plugin Adapter: Sepia Architecture & Refactor (plugin-sepia)
// Maps external plugin definitions (Claude Code, Cursor, Penpot) into Antigravity native capabilities.

export const adapter = {
  id: "plugin-sepia",
  name: "Sepia Architecture & Refactor",
  version: "1.0.0",
  description: "Engineering principles, Hemingway-style clarity, code review, recreation, and refactoring.",
  skills: ["sepia", "sepia-hemingway", "sepia-recreate", "sepia-refactor", "sepia-review", "sepia-write"],
  commands: ["/clarify", "/audit"],
  mcp: null,
  cli: null,
  
  install(context) {
    // 1. Bridge skills to Antigravity global skill directories
    // 2. Register MCP configuration in mcp_config.json
    // 3. Register slash commands in prompt registry
    return {
      installed: true,
      skillsCount: 6,
      commandsCount: 2
    };
  }
};
