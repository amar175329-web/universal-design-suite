# Persistence Architecture: GitHub Access

**Persistence Area**: `$SNAP_USER_COMMON` (`/home/ubuntu/snap/antigravity-cli/common`)

## Why This Configuration Survives Restarts & Updates
1. **Snap Revision Immunity**:
   - Snap packages have two data directories: `$SNAP_USER_DATA` (e.g. `/snap/.../21` which changes on every package update) and `$SNAP_USER_COMMON` (which is shared across ALL past, present, and future revisions).
   - Our configuration is placed in `$SNAP_USER_COMMON` (`/home/ubuntu/snap/antigravity-cli/common`), guaranteeing that future Antigravity CLI updates will NOT erase the authentication.

2. **Automated Shell Environment Integration**:
   - Configured in `/home/ubuntu/snap/antigravity-cli/common/.bashrc`:
     ```bash
     export GH_CONFIG_DIR="/home/ubuntu/snap/antigravity-cli/common/.config/gh"
     ```
   - Configured in `/home/ubuntu/snap/antigravity-cli/common/.profile`:
     ```bash
     export GH_CONFIG_DIR="/home/ubuntu/snap/antigravity-cli/common/.config/gh"
     ```
   - Verified that `gh` independently resolves `$XDG_CONFIG_HOME/gh` which is built into the Snap launcher runtime.

3. **Global Git Integration**:
   - The `.gitconfig` file is located at `/home/ubuntu/snap/antigravity-cli/common/.gitconfig`, the canonical Git home inside Antigravity. Any subshell or build tool automatically inherits this configuration.
