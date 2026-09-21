# Installer Report: Universal Design Suite

**Installer Entry Points**:
- `node install.mjs [flags]`
- `bash install.sh [flags]`
- `npx universal-design-suite@latest install --all`

## Installation Flags & Modes

| Flag | Behavior |
|---|---|
| `--all` *(default)* | Installs skills, MCPs, CLIs, commands, design references, and verifies environment |
| `--skills` | Installs only the 292 canonical skills into detected Antigravity skill directories |
| `--mcps` | Configures the 6 design & component MCP servers in `mcp_config.json` |
| `--clis` | Verifies and links the 10 CLI tools into target binary directory |
| `--commands` | Registers all 24 design slash commands |
| `--references` | Restores all 74 design system specifications and extracted component libraries |
| `--target <dir>` | Installs into an isolated custom directory (used for sandboxed clean-install tests) |

## Antigravity Detection Logic
The installer automatically queries and links into all active Antigravity skill paths:
1. `/home/ubuntu/snap/antigravity-cli/common/.gemini/antigravity-cli/skills`
2. `/home/ubuntu/snap/antigravity-cli/common/.gemini/antigravity/skills`
3. `/home/ubuntu/snap/antigravity-cli/common/.agents/skills`
