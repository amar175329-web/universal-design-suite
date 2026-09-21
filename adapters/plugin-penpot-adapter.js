// Antigravity Plugin Adapter: Penpot Design System Engine (plugin-penpot)
// Maps external plugin definitions (Claude Code, Cursor, Penpot) into Antigravity native capabilities.

export const adapter = {
  id: "plugin-penpot",
  name: "Penpot Design System Engine",
  version: "2.17.0",
  description: "Design tokens, color palette generation, contrast checks, and Penpot MCP connectivity.",
  skills: ["penpot-tokens", "penpot-contrast", "penpot-palette"],
  commands: [],
  mcp: {"name": "penpot-mcp", "command": "npx @penpot/mcp"},
  cli: null,
  
  install(context) {
    // 1. Bridge skills to Antigravity global skill directories
    // 2. Register MCP configuration in mcp_config.json
    // 3. Register slash commands in prompt registry
    return {
      installed: true,
      skillsCount: 3,
      commandsCount: 0
    };
  }
};
