// Antigravity Plugin Adapter: Claude Code Workflow Suite (plugin-claude-workflow)
// Maps external plugin definitions (Claude Code, Cursor, Penpot) into Antigravity native capabilities.

export const adapter = {
  id: "plugin-claude-workflow",
  name: "Claude Code Workflow Suite",
  version: "1.1.0",
  description: "Code review, git commit orchestration, feature development, and frontend design guidelines.",
  skills: ["frontend-design", "code-review", "commit-commands", "feature-dev"],
  commands: ["/audit", "/polish"],
  mcp: null,
  cli: null,
  
  install(context) {
    // 1. Bridge skills to Antigravity global skill directories
    // 2. Register MCP configuration in mcp_config.json
    // 3. Register slash commands in prompt registry
    return {
      installed: true,
      skillsCount: 4,
      commandsCount: 2
    };
  }
};
