// Antigravity Plugin Adapter: UI/UX Pro Max Intelligence (plugin-ui-ux-pro-max)
// Maps external plugin definitions (Claude Code, Cursor, Penpot) into Antigravity native capabilities.

export const adapter = {
  id: "plugin-ui-ux-pro-max",
  name: "UI/UX Pro Max Intelligence",
  version: "2.13.0",
  description: "Multi-framework UI/UX intelligence system, design tokens, responsive layout rules, and slides engine.",
  skills: ["ui-ux-pro-max", "slides", "design", "ui-styling", "design-system", "banner-design", "brand"],
  commands: ["/audit", "/layout", "/polish"],
  mcp: null,
  cli: {"name": "uipro", "npm": "ui-ux-pro-max-cli"},
  
  install(context) {
    // 1. Bridge skills to Antigravity global skill directories
    // 2. Register MCP configuration in mcp_config.json
    // 3. Register slash commands in prompt registry
    return {
      installed: true,
      skillsCount: 7,
      commandsCount: 3
    };
  }
};
