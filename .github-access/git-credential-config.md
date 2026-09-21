# Git Credential Configuration

**Configuration Tool**: `gh auth setup-git`
**Global Git Config Location**: `/home/ubuntu/snap/antigravity-cli/common/.gitconfig`

## Active Git Credential Helper Configuration
```ini
[credential "https://github.com"]
	helper = 
	helper = !/home/ubuntu/snap/antigravity-cli/common/local/bin/gh auth git-credential
[credential "https://gist.github.com"]
	helper = 
	helper = !/home/ubuntu/snap/antigravity-cli/common/local/bin/gh auth git-credential
```

## Verification Command
```bash
git config --global --get-regexp credential
```
**Output**:
```text
credential.https://github.com.helper 
credential.https://github.com.helper !/home/ubuntu/snap/antigravity-cli/common/local/bin/gh auth git-credential
credential.https://gist.github.com.helper 
credential.https://gist.github.com.helper !/home/ubuntu/snap/antigravity-cli/common/local/bin/gh auth git-credential
```

## How It Works
When Git performs HTTPS operations (`git clone`, `git fetch`, `git pull`, `git push`) against `github.com`:
1. Git invokes `/home/ubuntu/snap/antigravity-cli/common/local/bin/gh auth git-credential`.
2. `gh` reads the authenticated OAuth session from `/home/ubuntu/snap/antigravity-cli/common/.config/gh/hosts.yml`.
3. `gh` provides dynamic, authenticated credentials over stdio without interactive password prompts.
4. Git executes the operation transparently and securely.
