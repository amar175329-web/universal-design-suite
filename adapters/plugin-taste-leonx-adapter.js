// Antigravity Plugin Adapter: Taste Aesthetics (Leonxlnx) (plugin-taste-leonx)
// Maps external plugin definitions (Claude Code, Cursor, Penpot) into Antigravity native capabilities.

export const adapter = {
  id: "plugin-taste-leonx",
  name: "Taste Aesthetics (Leonxlnx)",
  version: "1.0.0",
  description: "Curated aesthetic systems: brutalist, soft UI, minimalist, and image-to-code styling.",
  skills: ["taste-leonx", "taste-brutalist", "taste-soft-ui", "taste-minimalist-leonx"],
  commands: ["/bolder", "/quieter", "/colorize"],
  mcp: null,
  cli: null,
  
  install(context) {
    // 1. Bridge skills to Antigravity global skill directories
    // 2. Register MCP configuration in mcp_config.json
    // 3. Register slash commands in prompt registry
    return {
      installed: true,
      skillsCount: 4,
      commandsCount: 3
    };
  }
};
