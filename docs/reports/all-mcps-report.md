# All MCPs Report: Model Context Protocol Architecture

**Total MCP Servers Configured**: 6
**Status**: Configured in `universal-design-suite/mcps/mcp_config.template.json` and active in global Antigravity config.

## Registered MCP Servers

| Server Name | Command | Arguments | Transport | Primary Purpose |
|---|---|---|---|---|
| `magicui` | `node` | `mcps/magicui-mcp/index.js` | `stdio` | Direct lookup & insertion of MagicUI components, props & effects |
| `21st-magic` | `npx` | `-y @21st-dev/magic@latest` | `stdio` | Component discovery, inspiration search, and React snippet extraction |
| `copilotkit-docs` | `node` | `mcps/copilotkit-mcp/index.js` | `stdio` | Official API reference and hook generator for CopilotKit AI interfaces |
| `assistant-ui` | `npx` | `-y @assistant-ui/mcp-server@latest` | `stdio` | Chat UI primitives, thread managers, and streaming assistant widgets |
| `penpot` | `node` | `mcps/penpot-mcp/index.js` | `stdio` | Bi-directional design bridge to extract tokens and layout specs from Penpot |
| `mantine` | `npx` | `-y @mantinedev/mcp-server@latest` | `stdio` | Deep prop search, theme token lookups, and accessible form components |

## Security & FinOps Governance
- Zero API keys or secrets stored in repo or configurations.
- All MCPs operate via lazy stdio process spawning without idle compute or persistent background overhead.
