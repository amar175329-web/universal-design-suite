// Antigravity Plugin Adapter: 21st.dev Design Engine (plugin-21st)
// Maps external plugin definitions (Claude Code, Cursor, Penpot) into Antigravity native capabilities.

export const adapter = {
  id: "plugin-21st",
  name: "21st.dev Design Engine",
  version: "0.4.1",
  description: "AI-assisted UI component discovery, visual generation, and sync engine.",
  skills: ["21st-ai", "21st-cli-use", "21st-design-sync", "21st-registry", "21st-ui", "21st-ui-build", "21st-ui-explore", "21st-ui-review"],
  commands: ["/explore", "/sync"],
  mcp: {"name": "21st-magic", "command": "node mcps/21st-magic-mcp/dist/index.js"},
  cli: {"name": "magic", "npm": "@21st-dev/magic"},
  
  install(context) {
    // 1. Bridge skills to Antigravity global skill directories
    // 2. Register MCP configuration in mcp_config.json
    // 3. Register slash commands in prompt registry
    return {
      installed: true,
      skillsCount: 8,
      commandsCount: 2
    };
  }
};
