// Antigravity Plugin Adapter: CopilotKit Agentic UI (plugin-copilotkit)
// Maps external plugin definitions (Claude Code, Cursor, Penpot) into Antigravity native capabilities.

export const adapter = {
  id: "plugin-copilotkit",
  name: "CopilotKit Agentic UI",
  version: "1.73.0",
  description: "Agent-aware UI components, multimodal normalization, and contextual chat interfaces.",
  skills: ["copilotkit"],
  commands: [],
  mcp: {"name": "copilotkit-docs", "serverUrl": "https://mcp.copilotkit.ai/mcp"},
  cli: {"name": "fast-cdk", "npm": "fast-cdk"},
  
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
