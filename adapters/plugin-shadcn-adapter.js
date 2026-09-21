// Antigravity Plugin Adapter: Shadcn Component Architecture (plugin-shadcn)
// Maps external plugin definitions (Claude Code, Cursor, Penpot) into Antigravity native capabilities.

export const adapter = {
  id: "plugin-shadcn",
  name: "Shadcn Component Architecture",
  version: "1.0.0",
  description: "Accessible React/Tailwind component registry, CLI automation, and Radix-to-Base migration.",
  skills: ["shadcn", "migrate-radix-to-base"],
  commands: [],
  mcp: null,
  cli: {"name": "shadcn", "npm": "shadcn@latest"},
  
  install(context) {
    // 1. Bridge skills to Antigravity global skill directories
    // 2. Register MCP configuration in mcp_config.json
    // 3. Register slash commands in prompt registry
    return {
      installed: true,
      skillsCount: 2,
      commandsCount: 0
    };
  }
};
