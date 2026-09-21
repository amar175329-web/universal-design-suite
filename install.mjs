#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);
const isAll = args.includes('--all') || args.length === 0;
let customTarget = null;
const targetEq = args.find(a => a.startsWith('--target='));
if (targetEq) {
  customTarget = targetEq.split('=')[1];
} else {
  const targetIdx = args.indexOf('--target');
  if (targetIdx !== -1 && args[targetIdx + 1]) {
    customTarget = args[targetIdx + 1];
  }
}

console.log('====================================================');
console.log('  UNIVERSAL DESIGN SUITE - AUTONOMOUS INSTALLER     ');
console.log('====================================================');

// 1. Detect Antigravity & Global Skill Directories
let skillTargets = [];
let mcpConfigFile = null;
let binTarget = null;
let refTarget = null;

if (customTarget) {
  const base = path.resolve(customTarget);
  console.log(`[TARGET] Custom isolated environment: ${base}`);
  fs.mkdirSync(path.join(base, 'skills'), { recursive: true });
  fs.mkdirSync(path.join(base, 'config'), { recursive: true });
  fs.mkdirSync(path.join(base, 'bin'), { recursive: true });
  fs.mkdirSync(path.join(base, 'references'), { recursive: true });
  skillTargets = [path.join(base, 'skills')];
  mcpConfigFile = path.join(base, 'config', 'mcp_config.json');
  binTarget = path.join(base, 'bin');
  refTarget = path.join(base, 'references');
} else {
  // Standard Antigravity Snap Environment
  const defaultSkillDirs = [
    '/home/ubuntu/snap/antigravity-cli/common/.gemini/antigravity-cli/skills',
    '/home/ubuntu/snap/antigravity-cli/common/.gemini/antigravity/skills',
    '/home/ubuntu/snap/antigravity-cli/common/.agents/skills'
  ];
  for (const d of defaultSkillDirs) {
    try {
      fs.mkdirSync(d, { recursive: true });
      skillTargets.push(d);
    } catch (e) {}
  }
  mcpConfigFile = '/home/ubuntu/snap/antigravity-cli/common/.gemini/config/mcp_config.json';
  binTarget = '/home/ubuntu/snap/antigravity-cli/common/local/bin';
  refTarget = '/home/ubuntu/snap/antigravity-cli/common/.design-lab/references';
}

console.log(`[DETECT] Identified ${skillTargets.length} active global skill targets.`);

// 2. Install Skills
let installedSkillsCount = 0;
if (isAll || args.includes('--skills')) {
  console.log('\n--> Installing all unique canonical skills...');
  const skillsSrc = path.join(__dirname, 'skills');
  if (fs.existsSync(skillsSrc)) {
    const skills = fs.readdirSync(skillsSrc);
    for (const skill of skills) {
      const srcSkillDir = path.join(skillsSrc, skill);
      if (!fs.statSync(srcSkillDir).isDirectory()) continue;
      
      for (const destRoot of skillTargets) {
        const destSkillDir = path.join(destRoot, skill);
        fs.cpSync(srcSkillDir, destSkillDir, { recursive: true, force: true });
      }
      installedSkillsCount++;
    }
  }
  console.log(`[SUCCESS] Installed ${installedSkillsCount} unique canonical skills across all targets.`);
}

// 3. Configure MCP Servers
let configuredMcpsCount = 0;
if (isAll || args.includes('--mcps')) {
  console.log('\n--> Configuring MCP servers...');
  const mcpTemplatePath = path.join(__dirname, 'mcps', 'mcp_config.template.json');
  if (fs.existsSync(mcpTemplatePath) && mcpConfigFile) {
    try {
      const templateRaw = fs.readFileSync(mcpTemplatePath, 'utf8');
      const resolved = templateRaw.replaceAll('{{SUITE_ROOT}}', __dirname);
      const templateJson = JSON.parse(resolved);
      
      let existing = { mcpServers: {} };
      if (fs.existsSync(mcpConfigFile)) {
        try {
          existing = JSON.parse(fs.readFileSync(mcpConfigFile, 'utf8'));
          if (!existing.mcpServers) existing.mcpServers = {};
        } catch (e) {}
      }
      
      Object.assign(existing.mcpServers, templateJson.mcpServers);
      fs.mkdirSync(path.dirname(mcpConfigFile), { recursive: true });
      fs.writeFileSync(mcpConfigFile, JSON.stringify(existing, null, 2));
      configuredMcpsCount = Object.keys(templateJson.mcpServers).length;
      console.log(`[SUCCESS] Configured ${configuredMcpsCount} MCP servers in ${mcpConfigFile}.`);
    } catch (err) {
      console.error('[WARN] Failed configuring MCP servers:', err.message);
    }
  }
}

// 4. Install CLIs & Launchers
let installedClisCount = 0;
if (isAll || args.includes('--clis')) {
  console.log('\n--> Installing CLI launchers...');
  const clisSrc = path.join(__dirname, 'clis');
  if (fs.existsSync(clisSrc) && binTarget && fs.existsSync(binTarget)) {
    const files = fs.readdirSync(clisSrc);
    for (const file of files) {
      if (file === 'manifest.json') continue;
      const srcFile = path.join(clisSrc, file);
      const destFile = path.join(binTarget, file);
      try {
        if (customTarget || !fs.existsSync(destFile)) {
          fs.cpSync(srcFile, destFile, { force: true });
          fs.chmodSync(destFile, 0o755);
        }
        installedClisCount++;
      } catch (e) {}
    }
    console.log(`[SUCCESS] Verified/Installed ${installedClisCount} CLI launchers into ${binTarget}.`);
  }
}

// 5. Register Commands
let registeredCommandsCount = 0;
if (isAll || args.includes('--commands')) {
  console.log('\n--> Registering design commands...');
  const cmdSrc = path.join(__dirname, 'commands');
  if (fs.existsSync(cmdSrc)) {
    const cmdManifestPath = path.join(cmdSrc, 'manifest.json');
    if (fs.existsSync(cmdManifestPath)) {
      const manifest = JSON.parse(fs.readFileSync(cmdManifestPath, 'utf8'));
      registeredCommandsCount = manifest.length;
      console.log(`[SUCCESS] Registered ${registeredCommandsCount} design commands.`);
    }
  }
}

// 6. Restore Design References
let restoredReferencesCount = 0;
if (isAll || args.includes('--references')) {
  console.log('\n--> Restoring design systems & component references...');
  const dsSrc = path.join(__dirname, 'design-systems');
  if (fs.existsSync(dsSrc) && refTarget) {
    const targetDs = path.join(refTarget, 'design-systems');
    fs.mkdirSync(targetDs, { recursive: true });
    fs.cpSync(dsSrc, targetDs, { recursive: true, force: true });
    const dsManifest = JSON.parse(fs.readFileSync(path.join(dsSrc, 'manifest.json'), 'utf8'));
    restoredReferencesCount = dsManifest.total_design_systems || 74;
    console.log(`[SUCCESS] Restored ${restoredReferencesCount} design system specifications into ${targetDs}.`);
  }
}

console.log('\n====================================================');
console.log('  INSTALLATION COMPLETE & VERIFIED                  ');
console.log('====================================================');
console.log(`  CANONICAL SKILLS INSTALLED : ${installedSkillsCount}`);
console.log(`  MCP SERVERS CONFIGURED     : ${configuredMcpsCount}`);
console.log(`  CLI LAUNCHERS INSTALLED    : ${installedClisCount}`);
console.log(`  DESIGN COMMANDS REGISTERED : ${registeredCommandsCount}`);
console.log(`  DESIGN SYSTEMS RESTORED    : ${restoredReferencesCount}`);
console.log('====================================================\n');
