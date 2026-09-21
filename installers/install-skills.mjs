#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
spawnSync('node', [path.join(__dirname, '../install.mjs'), '--skills'], { stdio: 'inherit' });
