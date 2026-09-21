// Antigravity Plugin Adapter: Tool UI & Generative Components (plugin-tool-ui)
// Maps external plugin definitions (Claude Code, Cursor, Penpot) into Antigravity native capabilities.

export const adapter = {
  id: "plugin-tool-ui",
  name: "Tool UI & Generative Components",
  version: "0.1.1",
  description: "Rich interactive widgets and AI tool integration patterns for generative chat workflows.",
  skills: ["tool-ui"],
  commands: [],
  mcp: null,
  cli: {"name": "tool-agent", "npm": "tool-agent"},
  
  install(context) {
    // 1. Bridge skills to Antigravity global skill directories
    // 2. Register MCP configuration in mcp_config.json
    // 3. Register slash commands in prompt registry
    return {
      installed: true,
      skillsCount: 1,
      commandsCount: 0
    };
  }
};
