#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

console.log('--- RUNNING SUITE VERIFICATION TESTS ---');

let failures = 0;

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    failures++;
  } else {
    console.log(`✅ PASS: ${message}`);
  }
}

// 1. Verify Manifest
const manifestPath = path.join(root, 'manifest.json');
assert(fs.existsSync(manifestPath), 'manifest.json exists');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

// 2. Verify Skills Directory
const skillsDir = path.join(root, 'skills');
assert(fs.existsSync(skillsDir), 'skills directory exists');
const skillFolders = fs.readdirSync(skillsDir).filter(f => fs.statSync(path.join(skillsDir, f)).isDirectory());
assert(skillFolders.length >= 290, `Found ${skillFolders.length} unique canonical skills (expected >= 290)`);

// 3. Verify Plugins
const pluginsDir = path.join(root, 'plugins');
const pluginFolders = fs.readdirSync(pluginsDir).filter(f => fs.statSync(path.join(pluginsDir, f)).isDirectory());
assert(pluginFolders.length >= 10, `Found ${pluginFolders.length} plugins (expected >= 10)`);

// 4. Verify MCPs
const mcpsDir = path.join(root, 'mcps');
assert(fs.existsSync(path.join(mcpsDir, 'mcp_config.template.json')), 'mcp_config.template.json exists');

// 5. Verify CLIs
const clisDir = path.join(root, 'clis');
const cliManifest = JSON.parse(fs.readFileSync(path.join(clisDir, 'manifest.json'), 'utf8'));
assert(cliManifest.length >= 10, `Found ${cliManifest.length} CLI definitions (expected >= 10)`);

// 6. Verify Commands
const commandsDir = path.join(root, 'commands');
const cmdManifest = JSON.parse(fs.readFileSync(path.join(commandsDir, 'manifest.json'), 'utf8'));
assert(cmdManifest.length >= 24, `Found ${cmdManifest.length} design commands (expected >= 24)`);

// 7. Verify Design Systems
const dsDir = path.join(root, 'design-systems');
const dsFolders = fs.readdirSync(dsDir).filter(f => fs.statSync(path.join(dsDir, f)).isDirectory());
assert(dsFolders.length >= 70, `Found ${dsFolders.length} design systems (expected >= 70)`);

// 8. Verify Licenses
const licDir = path.join(root, 'licenses');
const licFiles = fs.readdirSync(licDir).filter(f => f.endsWith('.md'));
assert(licFiles.length >= 64, `Found ${licFiles.length} license files (expected >= 64)`);

console.log('----------------------------------------');
if (failures === 0) {
  console.log('🎉 ALL SUITE VERIFICATION TESTS PASSED!');
  process.exit(0);
} else {
  console.error(`💥 SUITE VERIFICATION FAILED WITH ${failures} ERRORS.`);
  process.exit(1);
}
