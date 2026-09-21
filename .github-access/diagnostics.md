# Environment Diagnostics: Antigravity CLI & GitHub Access

**Diagnostic Date**: 2026-09-21
**Environment**: Ubuntu Linux / Antigravity CLI Snap Confinement

## 1. Filesystem & Identity Discrepancy
- **Host Real Home**: `/home/ubuntu` (`$SNAP_REAL_HOME`)
- **Antigravity Active Home**: `/home/ubuntu/snap/antigravity-cli/common` (`$HOME`, `$SNAP_USER_COMMON`)
- **Current User**: `ubuntu` (UID 1000)
- **Active PATH**: `/home/ubuntu/snap/antigravity-cli/common/.gemini/antigravity-cli/bin:/home/ubuntu/snap/antigravity-cli/common/local/bin:/snap/antigravity-cli/21/usr/sbin:/snap/antigravity-cli/21/usr/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin`
- **XDG_CONFIG_HOME**: `/home/ubuntu/snap/antigravity-cli/common/.config`
- **GH_CONFIG_DIR**: `/home/ubuntu/snap/antigravity-cli/common/.config/gh`

## 2. Snap Confinement Analysis
- **Snap Package**: `antigravity-cli` (Revision: 21, Base: `core24`, Version: `1.2.0`)
- **Confinement Mode**: `strict`
- **Active Plugs**: `home`, `network`, `network-bind`, `desktop`, `desktop-legacy`
- **Security Root Cause**: Under Ubuntu Snap `strict` confinement, AppArmor security rules grant access to regular files in `/home/ubuntu`, but explicitly deny read/write access to host top-level dotfiles and directories (e.g. `/home/ubuntu/.gitconfig`, `/home/ubuntu/.config/gh/hosts.yml`, `/home/ubuntu/.env.keys`).
- **Solution Strategy**: Zero host file tampering. Created and authenticated credentials directly within the persistent Snap user common directory (`$SNAP_USER_COMMON`), which is fully writable and persistent across all sessions and snap package revisions.

## 3. Toolchain Binaries
- **Git Version**: `git version 2.43.0` (Exec path: `/snap/antigravity-cli/21/usr/lib/git-core`)
- **GitHub CLI Version**: `gh version 2.101.0 (2026-09-15)`
- **GH Binary Path**: `/home/ubuntu/snap/antigravity-cli/common/local/bin/gh`
