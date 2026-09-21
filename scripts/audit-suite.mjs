#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

console.log('--- UNIVERSAL DESIGN SUITE AUDIT REPORT ---');
const skillsDir = path.join(root, 'skills');
const skills = fs.readdirSync(skillsDir);
let validSkills = 0;
let missingSkillMd = 0;

for (const s of skills) {
  const p = path.join(skillsDir, s);
  if (fs.statSync(p).isDirectory()) {
    if (fs.existsSync(path.join(p, 'SKILL.md'))) {
      validSkills++;
    } else {
      missingSkillMd++;
      console.warn(`[WARN] Missing SKILL.md in: ${s}`);
    }
  }
}

console.log(`Total canonical skills: ${validSkills}`);
console.log(`Skills with missing SKILL.md: ${missingSkillMd}`);
console.log('Audit complete.');
