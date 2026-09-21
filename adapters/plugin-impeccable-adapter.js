// Antigravity Plugin Adapter: Impeccable Design Quality Suite (plugin-impeccable)
// Maps external plugin definitions (Claude Code, Cursor, Penpot) into Antigravity native capabilities.

export const adapter = {
  id: "plugin-impeccable",
  name: "Impeccable Design Quality Suite",
  version: "4.3.1",
  description: "Full-fidelity design engineering suite for polish, critique, audit, layout, typography, and motion.",
  skills: ["impeccable"],
  commands: ["/polish", "/critique", "/audit", "/animate", "/layout", "/typeset", "/clarify", "/delight", "/harden", "/onboard", "/distill", "/colorize", "/bolder", "/quieter", "/overdrive", "/shape", "/live", "/document", "/extract", "/adapt"],
  mcp: null,
  cli: {"name": "impeccable", "npm": "impeccable"},
  
  install(context) {
    // 1. Bridge skills to Antigravity global skill directories
    // 2. Register MCP configuration in mcp_config.json
    // 3. Register slash commands in prompt registry
    return {
      installed: true,
      skillsCount: 1,
      commandsCount: 20
    };
  }
};
